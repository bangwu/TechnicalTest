TechnicalTest
============

## Status [![Build Status](https://travis-ci.org/bangwu/TechnicalTest.svg?branch=master)](https://travis-ci.org/bangwu/TechnicalTest)
## Production

`https://celebritylist.herokuapp.com`



## Development

Before start the project, you need install gulp:

```bash
npm install bower
npm install gulp
npm install
bower install
```

To start developing in the project run:

```bash
gulp serve
```

Then head to `http://localhost:3000` in your browser.

The `serve` tasks starts a static file server, which serves the AngularJS application, and a watch task which watches all files for changes and lints, builds and injects them into the index.html accordingly.

## Tests

To run tests run:

```bash
gulp test
```

**Or** first inject all test files into `karma.conf.js` with:

```bash
gulp karma-conf
```

Then you're able to run Karma directly. Example:

```bash
karma start --single-run
```

## Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.
