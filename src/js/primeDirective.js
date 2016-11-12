/*globals angular */
/*jslint vars:true */

/**
 * @license angular-prime-directive version: 0.1.5
 * (c) 2013 Knight Rider Consulting, Inc. http://www.knightrider.com
 * License: MIT
 */

/**
 *
 *    @author        Dale "Ducky" Lotts
 *    @since        2013-Jul-8
 */

angular.module('ui.prime.directive', [])
  .directive('primeDirective', [function () {
    'use strict';

    return {
      restrict: 'E',
      template: '<div class=\'prime-directive\'>' +
      '<table class=\'table-condensed\'>' +
      '   <thead>' +
      '       <tr>' +
      '           <th >' +
      '             <a class=\'previous\' href=\'\' data-ng-click="changeView(data.leftValue ,$event)">&lt;&lt;&nbsp;Previous</a>&nbsp;' +
      '           </th>' +
      '           <th colspan=\'8\' title=\'AngularJS Prime Directive\'>&nbsp;Prime&nbsp;Number&nbsp;Table</th>' +
      '           <th >' +
      '             <a class=\'next\' href=\'\' data-ng-click="changeView(data.rightValue,$event)">Next&nbsp;&gt;&gt;</a>' +
      '           </th>' +
      '       </tr>' +
      '   </thead>' +
      '   <tbody>' +
      '       <tr >' +
      '           <td colspan=\'10\' >' +
      '              <span    class=\'num\' ' +
      '                       data-ng-repeat=\'value in data.values\'  ' +
      '                       data-ng-class=\'{prime: value.prime}\' ' +
      '                       data-ng-bind="value.display"></span> ' +
      '           </td>' +
      '       </tr>' +
      '   </tbody>' +
      '</table></div>',
      replace: true,
      scope: {},
      link: function (scope) {

        scope.changeView = changeView;
        scope.changeView(1, null);

        function isPrime (value) {
          var result = value !== 1;
          if (value !== 2) {
            if (value % 2 === 0) {
              result = false;
            } else {
              for (var x = 3; x <= Math.sqrt(value); x += 2) {
                if (value % x === 0) {
                  result = false;
                }
              }
            }
          }
          return result;
        }

        function changeView (startValue, event) {
          if (event) {
            event.stopPropagation();
            event.preventDefault();
          }

          if (startValue < 1) {
            startValue = 1;
          }
          scope.data = {
            'leftValue': startValue - 100,
            'rightValue': startValue + 100,
            'values': Array.apply(null, { length: 100 }).map((value, index) => {
              return {
                'display': startValue + index,
                'prime': isPrime(startValue + index)
              };
            })
          };
        }
      }
    };
  }]);
