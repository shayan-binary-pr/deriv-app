Deriv App
=============

This repository contains the static HTML, Javascript, CSS, and images content of the [Deriv](http://deriv.app) website.

## Installation

In order to work on your own version of the Deriv Javascript and CSS, please **fork this project**.

You will also need to install the following on your development machine:

- Node.js (10.14.2 or higher is recommended) and NPM (see <https://nodejs.org/en/download/package-manager/>)
- Go to project root, then run `npm install`

### Use a custom domain
In order to use your custom domain, please put it in a file named `CNAME` inside `scripts` folder of your local clone of binary-static.


How to work with this project
=============================

### Deploy to your gh-pages for the first time

1. Register your application [here](https://developers.binary.com/applications/). This will give you the ability to redirect back to your github pages after login.
Use `https://YOUR_GITHUB_USERNAME.github.io/deriv-app/` for the Redirect URL and `https://YOUR_GITHUB_USERNAME.github.io/deriv-app/en/redirect` for the Verification URL.

    If you're using a custom domain, replace the github URLs above with your domain.

2. In `src/config.js`: Insert the `Application ID` of your registered application in `user_app_id`.
   * **NOTE:** In order to avoid accidentally committing personal changes to this file, use `git update-index --assume-unchanged src/javascript/config.js`

3. Set `NODE_ENV` to `development` with `export NODE_ENV=development`
 
4. Run `npm run deploy:clean`

### Deploy to root of gh pages
This will overwrite modified files and only clear the content of `js` folder before pushing changes. It will leave other folders as they are.
```
npm run deploy
```

### Clean root and deploy to it
This removes all files and folders and deploys your `dist` folder to the root.
```
npm run deploy:clean
```

### Deploy to test folder
This will add all your changes to the test folder specified.
Please ensure it is prefixed with `br_`.
```
npm run deploy:folder "br_my_test_folder"
```

### Preview on your local machine
- Edit your `/etc/hosts` file to include this domain:
```
127.0.0.1   localhost.binary.sx
```
- To preview your changes locally for the first time, run `sudo npm start`:
    - It will run all tests, compile all css, and js/jsx as well as watch for further js/jsx/css changes and rebuild on every change you make.
- To preview your changes locally without any tests, run `npm run serve`
    - It will watch for js/jsx/css changes and rebuild on every change you make.
- To run all tests, run `npm run test`

## Release [Section is WIP]
### Staging [Temporary]

1. Add `staging.deriv.app` file to `scripts/CNAME` file.
2. Then run:
```
export NODE_ENV=staging
npm ci
npm run deploy:clean
```