module.exports = {
	logToken: function (req, res) {
		console.log(req.param("state"));
		console.log(req.param("code"));
		res.ok();
		let options = {
			state: req.param("state"),
			code: req.param("code")
		};
		GitHubService.exchangeToken(options);
	},
	createMilestones: function (req, res) {
		console.log(req.param("user"));
		GitHubService.createMilestones(req.param("user"));
		res.ok();
	}
};