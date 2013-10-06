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
		checked_class_name: 'checked',
		unchecked_class_name: 'unchecked'
	}, options);
};

(function (fn) {
	/**
	 * init
	 */
	fn.init = function () {
		this._prepareElms();
		this._eventify();
		switch (this.$el.attr('data-decorcheckbox-state')) {
			case 'checked':
				this.toChecked();
				break;
			case 'unchecked':
				this.toUnchecked();
				break;
			default:
				this.toUnchecked();
				break;
		}
	};

	/**
	 * _prepareElms
	 */
	fn._prepareElms = function () {
		this.$btn = this.$el.find('[data-decorcheckbox-btn]');
		this.$input = this.$el.find('[data-decorcheckbox-input]');
	};

	/**
	 * toggle
	 */
	fn.toggle = function () {
		switch (this.$el.attr('data-decorcheckbox-state')) {
			case 'checked':
				this.toUnchecked();
				break;
			case 'unchecked':
				this.toChecked();
				break;
			default:
				this.toChecked();
				break;
		}
	};

	/**
	 * toChecked
	 */
	fn.toChecked = function () {
		var o = this.options;
		this.$el.addClass(o.checked_class_name);
		this.$el.removeClass(o.unchecked_class_name);
		this.$input.prop('checked', true);
		this.$el.attr('data-decorcheckbox-state', 'checked');
		this.$input.trigger('change');
	};

	/**
	 * toUnchecked
	 */
	fn.toUnchecked = function () {
		var o = this.options;
		this.$el.removeClass(o.checked_class_name);
		this.$el.addClass(o.unchecked_class_name);
		this.$input.prop('checked', false);
		this.$el.attr('data-decorcheckbox-state', 'unchecked');
		this.$input.trigger('change');
	};

	/**
	 * _click
	 */
	fn._click = function (e) {
		e.preventDefault();
		this.toggle();
	};

	/**
	 * _eventify
	 */
	fn._eventify = function () {
		this.$btn.on('click', $.proxy(this._click, this));
	};


})(Module.prototype);


// set jquery.fn
$.fn[PLUGIN_NAME] = function (options) {
	return this.each(function () {
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
