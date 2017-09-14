function printReverse(array){
	//prints the reverse of a given array
	for(var i = array.length - 1; i >= 0; i--){
		console.log(array[i]);
	}
}

printReverse([3,6,2,5]);

function isUniform(array){
	//checks to see if every element in an array is the same
	var firstElement = array[0];
	for(var i = 1; i < array.length; i++){
		if(array[i] !== firstElement){
			return false;
		}
	}

	return true;
}

console.log(isUniform(["a", "a", "b"]));
console.log(isUniform([2, 2, 2, 2]));

function sumArray(array){
	var runningSum = 0;
	for(var i = 0; i < array.length; i++){
		runningSum += array[i];
	}

	return runningSum;
}

console.log(sumArray([4, 24, 1, 6, 7]));
console.log(sumArray([4, 24, 12, -6, 17]));

function max(array){
	var max = array[0];
	for(var i = 1; i < array.length; i++){
		if (array[i] > max){
			max = array[i];
		}
	}

	return max;
}

console.log(max([3, 25, -2, 32]));
console.log(max([-2, -1 , 0, -5]));