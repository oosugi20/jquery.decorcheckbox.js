;(function ($, window, undefiend) {
'use script';

var MODULE_NAME = 'Decorcheckbox';
var PLUGIN_NAME = 'decorcheckbox';
var Module;


/**
 * Module
 */
Module = function (element, options) {
	this.el = element;
	this.$el = $(element);
	this.options = $.extend({
	}, options);
};

(function (fn) {
	/**
	 * fn.init
	 */
	fn.init = function () {
		this._prepareElms();
	};

	/**
	 * fn._prepareElms
	 */
	fn._prepareElms = function () {
	};


})(Module.prototype);


// set jquery.fn
$.fn[PLUGIN_NAME] = function (options) {
	this.each(function () {
		var module;
		if (!$.data(this, PLUGIN_NAME)) {
			module = new Module(this, options);
			$.data(this, PLUGIN_NAME, module);
			module.init();
		}
	});
};

// set global
$[MODULE_NAME] = Module;

})(jQuery, this);
