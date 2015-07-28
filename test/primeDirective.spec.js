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
