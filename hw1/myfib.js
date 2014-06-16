#!/usr/bin/env node

// Fibonacci
var fibonacci = function(n) {
    if (n < 1) {return 0;}
    else if (n == 1 | n == 2) { return 1;}
    else if (n > 2) { return (fibonacci(n-1) + fibonacci(n-2));}
};

// Fibonacci: closed form expression
var fibonacci2 = function(n) {
    var phi = (1 + Math.sqrt(5))/2;
    return (Math.round((Math.pow(phi, n) - Math.pow((1-phi), n))/Match.sqrt(5)));
};

// Find first K Fibonacci numbers are add it to Array
var firstKfib = function(k) {
    var i=1;
    var arr = [];

    for (i=1; i<k+1; i++) {
	arr.push(fibonacci(i));
    }
    return (arr);
};

// Format Array to one big string separated by space
var fmt = function(arr) {
    return (arr.join(" "));
};

var k = 25;
console.log("firstKfib(" + k + ")");
console.log(fmt(firstKfib(k)));
