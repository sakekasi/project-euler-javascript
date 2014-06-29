/*By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
find the sum of the even-valued terms.*/
var main = function(){
	var problem2 = function(){
		var sum = 0;
		var fib0 = 1,
			fib1 = 1;
		while((fib0 <= 4000000) && (fib1 <= 4000000)){
			var temp = fib1;
			fib1 = fib0 + fib1;
			fib0 = temp;

			if(!(fib1%2)){
				sum += fib1;
			}
		}

		return sum;
	};

	var main = function(){
		console.log(problem2());
	};
	return {main: main};
}();

exports.main = main;

main.main();