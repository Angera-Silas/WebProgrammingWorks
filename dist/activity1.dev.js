"use strict";

//While loop
var a, sum;
a = 1;
sum = 0;

while (a <= 50) {
  sum = sum + a;
  a++;
}

console.log(sum); //For loop

var sum1 = 0;

for (var i = 1; i <= 50; i++) {
  sum1 = sum1 + i;
}

console.log(sum1); //do....while loop

var sum3 = 0,
    x = 1;

do {
  sum3 += x;
  x++;
} while (x <= 50);

console.log(sum3);