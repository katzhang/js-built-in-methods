/**
 * Check if an object is really an array (http://web.mit.edu/jwalden/www/isArray.html)
 *
 */
//1. Use typeof
function useTypeof(obj) {
	console.log(typeof obj); //Outputs "object" even if an array is passed in -- doesn't tell us much.
}

//2. Use instanceof
function useInstanceof(obj) {
	console.log(obj instanceof Array); //Outs "true" if obj is an array. But not working when there are multiple globals.
}

//3. Use toString()
function useToString(obj) {
	console.log(Object.prototype.toString.call(obj)); //Outputs "[object Array]" is obj is an array.
}

//4. Use Array.isArray 
function useIsArray(obj) {
	console.log(Array.isArray(obj)); //Outputs "true" if obj is an array.
}

/**
 * Array.prototype.concat()
 *
 * @param {array|value} Arrays and/or values to concatenate
 * @returns {array} A new array
 */
//Normal uses 
function useConcat() {
	var a = ['a', 'b'];
	var b = [1, 2];
	var c = [3, 4];

	//Concatenate arrays
	var d = a.concat(b); // d = ["a", "b", 1, 2]
	var e = a.concat(b, c); //e = ["a", "b", 1, 2, 3, 4]

	//Concatenate values
	var f = a.concat('x', 'y'); //f = ["a", "b", "x", "y"]

	//Concatenate array and values
	var g = a.concat(b, 'z'); //g = ["a", "b", 1, 2, "z"]
}

//Variants: concateReverse()
//Rather than appending values, returns a new array that arguments are prepended to. 
//Additional arguments can be values only.
function concatReverse(array) {
	var args = Array.prototype.slice.call(arguments, 1);
	return args.concat(array);
}







/**
 * Array.prototype.every()
 *
 * @param {callback(value, index, array)[, thisArg]} Callback function to be executed on every element
 * @returns {boolean} Returns false as long as one of the elements fails the callback test. Otherwise returns true
 */
 function useEvery() {
 	function largerThan10(el, i, array) {
 		return (el >= 10);
 	}

 	console.log([1, 2, 3].every(largerThan10)); //Outputs false;
 	console.log([10, 20, 30].every(largerThan10)); //Outputs true;
 }

 /**
 * Array.prototype.some()
 *
 * @param {callback(value, index, array)[, thisArg]} Callback function to be executed on every element
 * @returns {boolean} Returns true as long as one of the elements passes the callback test. Otherwise returns false
 */
 function useSome() {
 	function largerThan10(el, i, array) {
 		return (el >= 10);
 	}

 	console.log([1, 2, 3].some(largerThan10)); //Outputs false;
 	console.log([10, 2, 3].some(largerThan10)); //Outputs true;
 }

 /**
 * Array.prototype.filter()
 *
 * @param {callback(value, index, array)[, thisArg]} Callback function to be executed on every element
 * @returns {array} Returns a new array of all the values that pass the callback function (return true)
 */
 function useFilter() {
 	function largerThan10(el, i, array) {
 		return (el >= 10);
 	}

 	console.log([1, 2, 3].filter(largerThan10)); //Outputs [].
 	console.log([1, 2, 30].filter(largerThan10)); //Outputs [30].
 }

 /**
 * Array.prototype.forEach()
 *
 * @param {callback(value, index, array)[, thisArg]} Callback function to be executed on every element. No way to stop or break the loop.
 * @returns {undefined}
 */
 function useForEach() {
 	function addOne(el, i, array) {
 		array[i] = el + 1;
 	}

 	console.log([1, 2, 3].forEach(addOne)); //Outputs undefined. But the original array is now [2, 3, 4].  
 }

 /**
 * Array.prototype.map()
 *
 * @param {callback(value, index, array)[, thisArg]} Callback function to be executed on every element. 
 * @returns {array} Returns a new array of the elements produced by the callback function.
 */
 function useMap() {
 	function addOne(el, i, array) {
 		return el + 1;
 	}

 	console.log([1, 2, 3].map(addOne)); //Outputs [2, 3, 4]. Unlike forEach, the value returned from callback is added to the same index of a new array.
 }

//Variants: map() can also be used on strings or array-like objects. 
function useMapString(str) {
	var codeArray = Array.prototype.map.call(str, function(x) {
		return x.charCodeAt(0);
	})
	return codeArray;
}

 /**
 * Array.prototype.sort()
 *
 * @param {[callback(a, b)]} Callback function to do the comparison.
 * @returns {array} Returns the udpated array. 
 */
 function useSort() {
 	var array = [4, 2, 3, 1];

 	console.log(array.sort()); //Outputs [1, 2, 3, 4]. Unlike forEach, the value returned from callback is added to the same index of a new array.
 	console.log(array)
 }

 /**
 * Array.prototype.reduce()
 *
 * @param {callback(previousValue, value, index, array)[, initialValue]} Callback function to be executed againt an accumulator, from left to right.
 * @returns {value} Returns a single value.
 */
 function useReduce() {
 	var array = [1, 2, 3];
 	var output = array.reduce(function(a, b) {
 		return a * b;
 	})
 	console.log([output); //Outputs 6.
}

 /**
 * Array.prototype.reduceRight()
 *
 * @param {callback(previousValue, value, index, array)[, initialValue]} Callback function to be executed againt an accumulator, from right to left.
 * @returns {value} Returns a single value.
 */
 function useReduceRight() {
 	var array = [1, 2, 3];
 	var output = array.reduce(function(a, b) {
 		return a * b;
 	})
 	console.log([output); //Outputs 6.
}

 




 /**
 * Array.prototype.indexOf()
 *
 * @param {value[, index]} Pass in the value you want to search and optionally the index to start from.
 * @returns {index} Returns the first index at which a given element can be found, or -1 if it is not present.
 */
 function useIndexOf() {
 	var array = ['a', 'b', 'c', 'a', 'b', 'c'];

 	console.log(array.indexOf('a')); //Outputs 0.
 	console.log(array.indexOf('a', 1)); //Outputs 3.
 	console.log(array.indexOf('a', -1)); //Outputs -1. When negative index is passed in, the start position will be array.length + negative index.
 	console.log(array.indexOf('a', -3)); //Outputs 3.
 	console.log(array.indexOf('a', -10)); //Outputs 0. When even the calculated index is negative, returns 0.

 }

  /**
 * Array.prototype.lastIndexOf()
 *
 * @param {value[, index]} Pass in the value you want to search and optionally the index to start from. Search backwards.
 * @returns {index} Returns the last index at which a given element can be found, or -1 if it is not present.
 */
 function useLastIndexOf() {
 	var array = ['a', 'b', 'c', 'a', 'b', 'c'];

 	console.log(array.lastIndexOf('a')); //Outputs 3.
 	console.log(array.lastIndexOf('a', 1)); //Outputs 0.
 	console.log(array.lastIndexOf('a', -1)); //Outputs 3. When negative index is passed in, the start position will be array.length + negative index.
 	console.log(array.lastIndexOf('a', -3)); //Outputs 3.
 	console.log(array.lastIndexOf('a', -10)); //Outputs -1. When even the calculated index is negative, returns -1.

 }

 /**
 * Array.prototype.slice(beginIndex[, endIndex])
 *
 * @param {index} Pass in the index where to begin extraction and optionally the index to end extraction (not including).
 * @returns {array} Returns a new array of the sliced elements.
 */
 function useSlice() {
 	var array = ['a', 'b', 'c', 'd'];

 	console.log(array.slice(1)); //Outputs ["b", "c", "d"]
 	console.log(array.slice(1, 3)); //Outputs ["b", "c"]
 	console.log(array.slice(1, -1)); //Outputs ["b", "c"]
 	console.log(array.slice(-1)); //Outputs ["d"]
 }

 /**
 * Array.prototype.splice(index, howMany[, value1, value2, ...valuen])
 *
 * @param {index} Pass in the index where to start changing the array.
 * @param {number} The number of old array elements to remove.
 * @param {value1, value2, ...valuen} Elements to add to the array. If not provided, simply removing without adding the old array.
 * @returns {array} Returns an array of the removed elements.
 */
 function useSplice() {
 	var array = ['a', 'b', 'c', 'd'];

 	console.log(array.splice(1, 1, 'miu')); //Returns "b". array now becomes ["a", "miu", "c", "d"]
 }




 /**
 * Array.prototype.join()
 *
 * @param {separator} By default if omitted it is a comma.
 * @returns {string} Returns string separated by separator.
 */
 function useJoin() {
 	var array = ['a', 'b', 'c', 'a', 'b', 'c'];

 	console.log(array.join('')); //Outputs 'abcabc'.
 	console.log(array.join(' ')); //Outputs 'a b c a b c'.
 	console.log(array.join()); //Outputs 'a,b,c,a,b,c'.

 }

 /**
 * Array.prototype.pop()
 *
 * @returns {value} Returns the last element that has just been removed.
 */
 //Notice that the method does not create a new array; it simply changes the old one. Also it is generic so can be called/applied on array-like objects.
 function usePop() {
 	var array = ['a', 'b', 'c'];

 	console.log(array.pop()); //Outputs 'c'.
 	console.log(array); //Outputs ['a', 'b'].

 }

 /**
 * Array.prototype.shift()
 *
 * @returns {value} Returns the first element that has just been removed.
 */
 //Notice that the method does not create a new array; it simply changes the old one. Also it is generic so can be called/applied on array-like objects.
 function useShift() {
 	var array = ['a', 'b', 'c'];

 	console.log(array.shift()); //Outputs 'a'.
 	console.log(array); //Outputs ['b', 'c'].

 }

 /**
 * Array.prototype.push()
 *
 * @param {value1, value2, ..., valuen} Elements to be added to the end.
 * @returns {number} Returns the new length of the array.
 */
 //Notice that the method does not create a new array; it simply changes the old one.
 function usePush() {
 	var array = ['a', 'b', 'c'];

 	console.log(array.push('d', 'e')); //Outputs 5.
 	console.log(array); //Outputs ['a', 'b', 'c', 'd', 'e'].
 }

 /**
 * Array.prototype.unshift()
 *
 * @param {value1, value2, ..., valuen} Elements to be added to the beginning.
 * @returns {number} Returns the new length of the array.
 */
 //Notice that the method does not create a new array; it simply changes the old one.
 function useUnshift() {
 	var array = ['a', 'b', 'c'];

 	console.log(array.unshift('d', 'e')); //Outputs 5.
 	console.log(array); //Outputs ['d', 'e', 'a', 'b', 'c'].
 }

  /**
 * Array.prototype.reverse()
 *
 */
 //Notice that the method does not create a new array; it simply changes the old one. 
 function useReverse() {
 	var array = ['a', 'b', 'c'];

 	array.reverse(); 
 	console.log(array); //Outputs ['c', 'b', 'a'].

 }