var count;
console.log("1. Print all numbers between -10 and 19");
count = -10;
while(count < 20){
	console.log(count);
	count++;
}

console.log("2. Print all even numbers between 10 and 40");
count = 10;
while(count < 41){
	console.log(count);
	count+=2;
}

console.log("3. Print all odd numbers between 300 and 333");
count = 301;
while(count < 334){
	console.log(count);
	count+=2;
}

console.log("4. Print all numbers divisble by 5 AND 3 between 5 and 50");
count = 5;
while(count < 51){
	if(count % 5 === 0){
		console.log(count);
	}
	else if(count % 3 === 0){
		console.log(count);
	}
	count++;
}