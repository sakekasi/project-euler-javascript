//Find the sum of all the multiples of 3 or 5 below 1000.
var main = function(){
	var problem1 = function(){
		var sum = 0;
		for(var i=0; i<1000; i++){
			if(!(i%3) || !(i%5)){
				sum += i;
			}
		}
		return sum;
	};

	var main = function(){
		console.log(problem1());
	};

	return {
		main: main
	};
}();

exports.main = main;

main.main();