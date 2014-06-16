#!/usr/bin/env node

// Returns 1 if the number is prime; 0 otherwise
var is_prime = function(n, index, arr) {
    // Iterate through the all the prime numbers that are less than sqrt(n)
    // If any divides n then the number is not prime
    var max=Math.floor(Math.sqrt(n));
    var p=2;
    var j=1;
    for (j=1; j<index;j++) {
	p = arr[j-1];
	if (p > max) break;
	if (n == ((Math.floor(n/p))*p)) return 0;
    }
    return 1;
};

// Find first K Prime numbers are add it to Array
var firstKprime = function(k) {
    if (k<1) throw ("Expect positive integer for firstKprime function");

    var arr = new Array(k);
    
    // First two prime numbers are 2 and 3 respectively
    var i=1;
    arr[0] = 2;
    if (k == 1) return arr;

    var next_prime_candidate = 2;
    for (i=2; i<k+1; i++) {
	next_prime_candidate++;
	// Keep skipping non-prime numbers until you fine one
	while (is_prime(next_prime_candidate, i, arr) != 1) next_prime_candidate++;
	arr[i-1] = next_prime_candidate;
    }
    return (arr);
};

// Format Array to one big string separated by space
var fmt = function(arr) {
    return (arr.join(","));
};

var k = 100;
var out = fmt(firstKprime(k));
var outfile = "prime_num_" + k + ".txt";
var fs = require('fs');
fs.writeFileSync(outfile, out);

console.log("firstKprime(" + k + ")");
console.log("#s: " + out);
