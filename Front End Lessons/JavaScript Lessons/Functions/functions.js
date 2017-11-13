function isEven(num){
	if(num % 2 === 0){
		return true;
	}
	else{
		return false;
	}

	//or return num % 2 === 0;
}

function factorial(num){
	if(num>1){
		return num*factorial(num-1);
	}
	else{
		return 1;
	}
}

function kebabToSnake(string){
	var snake = string.replace(/-/g, "_");

	return snake;
}