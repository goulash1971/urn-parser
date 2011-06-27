/*
 * URN Parser
 *
 * Copyright 2011, Stuart Hudson <goulash1971@yahoo.com>
 * Released under the terms of the MIT License.
 * 
 * Version 1.0.0
 */
var parseUrn = require("./parseUrn");


/**
 * Macro function that returns {@code true} if the {@param value} supplied
 * is not {@code undefined} and not {@code null}
 *
 * @param {Mixed} value to test
 * @return {Boolean} indicating if the value is set
 * @api private
 */
function isSet(value) {
	if ((value !== undefined) && (value !== null))
		return value !== '';
	return false;
}

/**
 * Macro function that returns the {@param value} if it is not {@code undefined} 
 * and not {@code null} otherwise returns ane empty string
 *
 * @param {Mixed} value to test
 * @return {String} teh string {@param value} or empty string
 * @api private
 */
function value(value) {
	if ((value !== undefined) && (value !== null))
		return value;
	return '';
}

/**
 * Macro function that returns the {@param value} with a {@param prefix} if it 
 * is not {@code undefined} and not {@code null} otherwise returns ane empty string
 *
 * @param {Mixed} value to test
 * @parem {String} the prefix
 * @return {String} the prefixed {@param value} or empty string
 * @api private
 */
function prefix(value, prefix) {
	if ((value !== undefined) && (value !== null))
		return prefix + value;
	return '';
}

/**
 * Macro function that returns the {@param value} with a {@param suffix} if it 
 * is not {@code undefined} and not {@code null} otherwise returns ane empty string
 *
 * @param {Mixed} value to test
 * @parem {String} the suffix
 * @return {String} the suffixed {@param value} or empty string
 * @api private
 */
function suffix(value, suffix) {
	if ((value !== undefined) && (value !== null))
		return value + suffix;
	return '';
}

/**
 * Parser constructor that takes some options for the parser used
 * to control parseUrn and other things.
 *
 * @param {Object} options for the Parser
 * @api public
 */
function Parser (options) {
	this.options = options;
};


/**
 * Method that will parse a given {@param urnStr} into it's components
 * in either 'loose' (default) or 'strict' mode.
 *
 * @param {String} the URN string to be parsed
 * @param {Boolean} set if we want 'strict' parsing
 * @return {Object} parsed URN
 * @api public
 * {@see parseUrn}
 */
Parser.prototype.parse = function (urnStr, strictMode) {
	if (strictMode === true) return parseUrn (urnStr, "strict");
	return parseUrn (urnStr);
};


/**
 * Method that will 'complete' a URN definition by combining the low level
 * components (if defined) into values for the higher level components.
 *
 * @param {Object} URN as components
 * @return {Object} completed URN with high level components
 * @api private
 */
Parser.prototype.complete = function (obj) {
	if (typeof obj === 'string') obj = this.parse(obj);
	return obj;
};

/**
 * Method that will create a {String} from an URN thatis specified as a series of
 * URN components
 *
 * @param {Object} the URN components
 * @return {String} the formatted URN
 * @api public
 */
Parser.prototype.format = function (obj) {
	obj = this.complete(obj);
	return (suffix(obj.protocol, ':').toLowerCase() + 
			suffix(obj.namespace, ':').toLowerCase() + value(obj.specification));
};


/**
 * Expose the Parser
 */
module.exports = exports = Parser;
