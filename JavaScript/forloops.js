for(var i = 0; i <= 16; i+=8) {
	console.log(i);
}

console.log("numbers between -10 and 19");

for(var num = -10; num <= 19; num+=1) {
	console.log(num);
}

console.log("even numbers between 10 and 40");

// for(var num = 10; num < 40 && num % 2 === 0; num+=2) {
// 	console.log(num);
// }

for(var num = 10; num <= 40; num += 1) {
	if(num % 2 === 0) {
		console.log(num);
	}
}

console.log("odd numbers between 300 and 333");

for(var num = 300; num <= 333; num+=1) {
	if(num % 2 !==  0) {
		console.log(num);
	}
}

console.log("number div by 5 and 3 between 5 and 50");

for(var num = 5; num <= 50; num+=1) {
	if(num % 5 === 0 && num % 3 === 0) {
		console.log(num)
	}
}