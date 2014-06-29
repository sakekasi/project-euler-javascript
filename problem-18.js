//Find the maximum total from top to bottom of the triangle below
var fs = require('fs');

var main = function(){
	var triangle = function(callback, path){
		fs.readFile(path, {encoding: 'utf-8'}, function(err, data){
			if(!err){
				var lines = data.split("\n");
				lines.pop();
				
				var nums = lines.map(function(line){
					return line.split(" ").map(function(x){
						return parseInt(x)
					});
				});

				callback(nums); //continuation passing style. we callback instead of returning
			} else {
				console.log(err);
			}
		});
	};

	var copy = function (arr){
		if(arr[0] instanceof Array){
			var new_arr = new Array(arr.length);
			for(var i = arr.length; i--;)
				new_arr[i] = copy(arr[i]);
		}
		else{var new_arr = arr.slice(0);}
		return new_arr;
	};

	var max = function(a,b){
		return a>b ? a : b;
	}

	var problem18 = function(callback, tri){
		var opt = copy(tri);

		for(var i = tri.length - 2; i >= 0; i--){ //row
			for(var j = tri[i].length - 1; j>=0; j--){
				opt[i][j] += max(opt[i+1][j], opt[i+1][j+1]);
			}
		}

		callback(opt[0][0]);
	};

	var main = function(){
		triangle(function(x){
			problem18(console.log, x)
		},
		'problem-18.txt');
	};
	return {main: main};
}();

exports.main = main;

main.main();