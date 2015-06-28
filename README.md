# Fleming.js [![npm version](https://img.shields.io/npm/v/fleming.svg)](https://www.npmjs.com/package/fleming) [![license type](https://img.shields.io/npm/l/fleming.svg)](https://github.com/FreeAllMedia/fleming.git/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/fleming.svg)](https://www.npmjs.com/package/fleming) ![ECMAScript 6 & 5](https://img.shields.io/badge/ECMAScript-6%20/%205-red.svg)

An ES6 DateTime component.

```javascript
import Fleming from "fleming";

const fleming = new Fleming;
fleming.saySomething(); // will output "Something"
```

# Quality and Compatibility

[![Build Status](https://travis-ci.org/FreeAllMedia/fleming.png?branch=master)](https://travis-ci.org/FreeAllMedia/fleming) [![Code Climate](https://codeclimate.com/github/FreeAllMedia/fleming/badges/gpa.svg)](https://codeclimate.com/github/FreeAllMedia/fleming) [![Dependency Status](https://david-dm.org/FreeAllMedia/fleming.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/fleming?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/fleming/dev-status.svg)](https://david-dm.org/FreeAllMedia/fleming?theme=shields.io#info=devDependencies)

*Every build and release is automatically tested on the following platforms:*

![node 0.12.x](https://img.shields.io/badge/node-0.12.x-brightgreen.svg) ![node 0.11.x](https://img.shields.io/badge/node-0.11.x-brightgreen.svg) ![node 0.10.x](https://img.shields.io/badge/node-0.10.x-brightgreen.svg)
![iojs 2.x.x](https://img.shields.io/badge/iojs-2.x.x-brightgreen.svg) ![iojs 1.x.x](https://img.shields.io/badge/iojs-1.x.x-brightgreen.svg)


[![Sauce Test Status](https://saucelabs.com/browser-matrix/fleming.svg)](https://saucelabs.com/u/fleming)


*If your platform is not listed above, you can test your local environment for compatibility by copying and pasting the following commands into your terminal:*

```
npm install fleming
cd node_modules/fleming
gulp test-local
```

# Installation

Copy and paste the following command into your terminal to install Fleming:

```
npm install fleming --save
```

## Import / Require

```
// ES6
import fleming from "fleming";
```

```
// ES5
var fleming = require("fleming");
```

```
// Require.js
define(["require"] , function (require) {
    var fleming = require("fleming");
});
```

# Getting Started

## More insights

In order to say something, you should know that `fleming()` ... (add your test here)

# How to Contribute

See something that could use improvement? Have a great feature idea? We listen!

You can submit your ideas through our [issues system](https://github.com/FreeAllMedia/fleming/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

We always aim to be friendly and helpful.

## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using Fleming.js on a platform we aren't automatically testing for.

```
npm test
```


