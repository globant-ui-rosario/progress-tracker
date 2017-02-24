const fs = require('fs');
const axios = require('axios');

const ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const USER_REPOS_URL = 'https://api.github.com/user/repos?affiliation=owner';
const REPO_URL = 'https://api.github.com/repos/'; //:owner/:repo
const PARENT_REPO_ID = 41932477;

module.exports = {
	exchangeToken: function (options, cb){
		options.client_id = '6802d8ea346fc5b80796';
		options.client_secret = '93ec7f23e1c044563c47e8091ddcae2790079b88';
		options.state = 'placeholder';
		let config = {
			headers: {
				'Accept': 'application/json'
			}
		};
		axios.post(ACCESS_TOKEN_URL, options, config)
			.then(function (res){
				//TODO: Write to DB
				if (state = 'placeholder'){
					fs.writeFileSync('tst_token', res.data.access_token);
				} else {
					throw new Error("State is different from the sent one.");
				}
				if(cb){
					cb();
				}
			});
	},
	createMilestones: function (user){
		let token = fs.readFileSync('tst_token');
		getUserRepos(user, token, getForkedRepo);
	}
};

function getUserRepos(user, token, cb){
	let config = {
		headers: {
			'Accept': 'application/vnd.github.v3+json',
			'Authorization': 'token ' + token
		}
	};
	axios.get(USER_REPOS_URL, config)
		.then(function (res){
			let forks = [];
			res.data.forEach(function (repo) {
				if(repo.fork){
					forks.push(repo);
				};
			});
			cb(config, forks, user);
		});
};

function getForkedRepo(config, repos, user){
	console.log(repos.length);
	if (repos.length > 0){
		let repo = repos.pop();
		let finalURL = REPO_URL + repo.full_name;
		axios.get(finalURL, config)
			.then(function (res){
				if(res.data.parent.id === PARENT_REPO_ID){
					addMilestone(config, finalURL, user);
				}else{
					getReposInfo(config, repos, user);
				}
			});
	} else {
		throw new Error("No forked repo present.");
	}
}

function addMilestone(config, repoURL, user){
	let finalURL = repoURL + '/milestones';
	let options = { 
		'title': 'Test Milestone',
		'state': 'open',
		'description': 'This is the first line of the description.\nThis is the second line of the test description.'
	};
	axios.post(finalURL, options, config)
		.then(function (res){
			if(res.status === 201){
				console.log('got here!');
				addIssue(config, options, repoURL, res.data.milestoneNumber, user);
			}else{
				throw new Error("Couldn't create Milestone.");
			}
		});
}

function addIssue(config, options, repoURL, milestoneNumber, user){
	let finalURL = repoURL + '/issues';
	options = { 
		'title': 'Test Issue',
		'body': 'This is the first line of the body.\nThis is the second line of the test body.',
		'milestone': milestoneNumber,
		'assignees': user
	};
	console.log('got here 2!');
	axios.post(finalURL, options, config)
		.then(function (res){
			console.log('got here 3!');
			console.log(res.status);
			if(res.status === 201){
				console.log('OK');
			}else{
				throw new Error("Couldn't create Issue.");
			}
		});
}