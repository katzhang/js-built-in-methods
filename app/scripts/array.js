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
 * @param {callback(index, element, array)[, thisArg]} Callback function to be executed on every element
 * @returns {boolean} Returns false as long as one of the elements fails the callback test. Otherwise returns true.
 */
 function useEvery() {
 	function largerThan10(el, i, array) {
 		return (el >= 10);
 	}

 	console.log([1, 2, 3].every(largerThan10)); //Outputs false;
 	console.log([10, 20, 30].every(largerThan10)); //Outputs true;
 }