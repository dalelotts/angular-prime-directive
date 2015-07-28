# Angular Prime Directive version: 0.1.5

Native AngularJS directive that displays a Prime Number table, which is a convenient way to visualize the prime number distribution.

[![MIT License][license-image]][license-url]
[![Build Status](https://travis-ci.org/dalelotts/angular-prime-directive.png?branch=master)](https://travis-ci.org/dalelotts/angular-prime-directive)
[![Dependency Status](https://david-dm.org/dalelotts/angular-prime-directive.svg)](https://david-dm.org/dalelotts/angular-prime-directive)
[![devDependency Status](https://david-dm.org/dalelotts/angular-prime-directive/dev-status.svg)](https://david-dm.org/dalelotts/angular-prime-directive#info=devDependencies)
[![PayPal donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=F3FX5W6S2U4BW&lc=US&item_name=Dale%20Lotts&item_number=angular%2dbootstrap%2ddatetimepicker&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted "Donate one-time to this project using Paypal")


# Screenshot

![Prime Directive default view](https://raw.github.com/dalelotts/angular-prime-directive/master/screenshots/default.png)

#Dependencies

Requires:
 * AngularJS 1.1.3 or higher (Not tested with 1.0.x)

#Setup and Testing
We use karma, jshint, jscs, and istanbul to ensure the quality of the code. The easiest way to run these checks is to run these commands:

```
npm install -g gulp
npm install
npm test
```

The karma task will try to open Chrome as a browser in which to run the tests. Make sure this is available or change the configuration in test\test.config.js

#Dependencies
We use bower for dependency management.

#Usage
```json
dependencies: {
    "angular-prime-directive": "latest"
}
```

To your bower.json file. Then run

```html
bower install
```

This will copy the angular-prime-directive files into your components folder, along with its dependencies.

Load the script files in your application:
```html
<script type="text/javascript" src="components/angular/angular.js"></script>
<script type="text/javascript" src="components/angular-prime-directive/src/js/primeDirective.js"></script>
<link rel="stylesheet" href="components/angular-prime-directive/src/css/primeDirective.css">
```

Add the date module as a dependency to your application module:

```html
var myAppModule = angular.module('MyApp', ['ui.prime.directive'])
```

Apply the directive to your form elements:

```html
<div data-prime-directive ></div>
```

## Options

None

## License

angular-prime-directive is freely distributable under the terms of the [MIT license](LICENSE).

## Donating
Support this project and other work by Dale Lotts via [gittip][gittip-dalelotts].

[![Support via Gittip][gittip-badge]][gittip-dalelotts]

[gittip-badge]: https://rawgithub.com/twolfson/gittip-badge/master/dist/gittip.png
[gittip-dalelotts]: https://www.gittip.com/dalelotts/

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

