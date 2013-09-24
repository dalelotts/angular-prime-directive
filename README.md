# Angular Prime Directive

Native AngularJS directive that displays a Prime Number table, which is a convenient way to visualize the prime number distribution.

[![Build Status](https://travis-ci.org/dalelotts/angular-prime-directive.png?branch=master)](https://travis-ci.org/dalelotts/angular-prime-directive)

# Screenshot

![Prime Directive default view](https://raw.github.com/dalelotts/angular-prime-directive/master/screenshots/default.png)

#Dependencies

Requires:
 * AngularJS 1.1.3 or higher (Not tested with 1.0.x)

#Testing
We use karma and jshint to ensure the quality of the code. The easiest way to run these checks is to use grunt:

```
npm install -g grunt-cli
npm install bower grunt
```

The karma task will try to open Chrome as a browser in which to run the tests. Make sure this is available or change the configuration in test\test.config.js

#Usage
We use bower for dependency management. Add

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