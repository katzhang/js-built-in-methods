 /**
 * Array.from(arrayLike[, mapFn[, thisArg]])
 *
 * @param {objct} Array-like object
 * @param {callback} Map function. Optional.
 * @param {object} Context. Optional
 * @returns {array} Returns the udpated array. 
 */
Array.from = function(obj, callback, context) {
	if(!obj) return [];
	var len = obj.length || 0,
		output = new Array(len),
		i = 0;

	while (i < len) {
		output[i] = obj[i];
		i++;
	}

	if (typeof callback === 'function') {
		return context ? output.map(callback, context) : output.map(callback);
	}

	return output;
}

 /**
 * Array.of(value1, value2, ...valuen)
 * 
 */
Array.of = function() {
	return Array.prototype.slice.call(arguments);
}

 /**
 * Array.prototype.copyWithin(target, start, end = this.length)
 * 
 */
Array.prototype.copyWithin = function(target, start, optionalEnd) {
	var end = optionalEnd ? optionalEnd : this.length;
	
}