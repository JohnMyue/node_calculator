var factorial = exports.factorial = function(n) { 
  if (n == 0)     return 1;   
  else return n * factorial(n-1); 
}  
var fibonacci = exports.fibonacci = function(n) {   
	if (n === 1)     return 1; 
    else if (n === 2)     return 1; 
    else return fibonacci(n-1) + fibonacci(n-2); 
} 
