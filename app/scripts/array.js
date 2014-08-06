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
 		array[i] = el+1;
 	}

 	console.log([1, 2, 3].forEach(addOne)); //Outputs undefined. But the original array is now [2, 3, 4].  
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