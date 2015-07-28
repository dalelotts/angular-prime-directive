/*globals jQuery, module, describe, it, expect, beforeEach, inject */
/**
 * @license angular-prime-directive
 * (c) 2013 Knight Rider Consulting, Inc. http://www.knightrider.com
 * License: MIT
 */

/**
 *
 *    @author        Dale "Ducky" Lotts
 *    @since        7/21/13
 */

describe('sortable column', function () {
  'use strict';
  var element;
  beforeEach(module('ui.prime.directive'));

  beforeEach(inject(function ($compile, $rootScope) {
    element = $compile('<div data-prime-directive ></div>')($rootScope);
    $rootScope.$digest();
  }));

  describe('where initial structure', function () {
    it('is a `<div>` element', function () {
      expect(element.prop('tagName')).toBe('DIV');
    });
    it('contains 2 `<a>` elements', function () {
      expect(element.find('a').length).toBe(2);
    });
    it('contains 100 `<span>` elements', function () {
      expect(element.find('span').length).toBe(100);
    });
    it('contains 25 `.prime` elements', function () {
      expect(element.find('.prime').length).toBe(25);
    });
    it('contains `.prime` elements with value of 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97', function () {
      var firstPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

      var elements = element.find('.prime');
      expect(elements.length).toBe(25);
      angular.forEach(elements, function (element, index) {
        expect(jQuery(element).html()).toBe(firstPrimes[index].toString());
      });
    });
  });
  describe('clicking next link on initial display updates display', function () {
    it('first span contains 101 after clicking next', function () {
      jQuery('.next', element).trigger('click');
      expect(jQuery(jQuery('span', element)[0]).html()).toBe('101');
    });
  });
  describe('clicking previous link on initial display makes no changes', function () {
    it('first span contains 101 after clicking next', function () {
      jQuery('.previous', element).trigger('click');
      expect(jQuery(jQuery('span', element)[0]).html()).toBe('1');
    });
  });
});
