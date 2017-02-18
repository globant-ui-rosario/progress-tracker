# Progress Tracker Application
Courses progress tracker application

## Installation
To install all the application dependencies you must run

`npm install`

## Execution
To execute the application you have two pre-defined scripts:

`npm run server`, which will execute the Sails server.

`npm run ui`, which will execute the UI builder.

Have in mind you must have running the server in order to serve the bundled UI.

## Builder

### Tasks
Here is a full list of all static tasks we have:

- `browser-sync`, used to.
- `clean`, used to clean the `dist` folder containing all the bundled UI sources.
- `default`, also called with `gulp`, used to bundle the UI.
- `font-build`, used to bundle our fonts.
- `help`, used to list all available gulp tasks.
- `icons-build`, used to bundle our icons.
- `release`, used to bundle the entire UI and after run Sails server when deployed to the web host.
- `server`, used to execute Sails server.

Here is a list of dynamic tasks that might depend on the builder configuration:

- `[applicationId]-build`, used to trigger the application build.
- `[applicationId]-html-build`, used to trigger the application HTML build. Mainly copies the `index.html` into `dist` folder.
- `[applicationId]-html-watch`, starts watcher over `index.html` file.
- `[applicationId]-js-build`, used to trigger the application JS build.
- `[applicationId]-scss-build`, used to trigger the application SCSS build. Builds over required js files.
- `[applicationId]-scss-watch`, starts watcher over bundled scss files.

## Development process

### Branches
All branches must comply with the branches name pattern. They must have the following pattern

`I-(Issue number)_(branch desired name)`

As example a possible name for issue number 23

`I-23_some-feature-development`

### Commits
All commit messages must contain the prefix of the branch into its title, as also a little description of the work done.

### Documentation
All feature that is development and intended to be merged should have the related documentation in order to allow other
developers understand the purpose of the feature added.

### Code Review
All features that want to be merged to our code base should pass a code review process. The branch must be reflected
into a pull request. The repository has a hook to only allow pull requests with at least one approval to be merged.

All comments into the pull request must be addressed before merging the code. The features that are merged without all
comments addressed could be reverted.

### Unit testing
TBD

### Continuous integration
TBD
