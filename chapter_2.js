(function() {
  var count, cube, hi, incrementCount, odd, odd_strict;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  hi = function(a, b) {
    return "Hello, " + a + " and " + b;
  };
  console.log(hi('John', 'Jim'));
  cube = __bind(function(num) {
    return Math.pow(num, 3);
  }, this);
  console.log("3 cubed is " + cube(3));
  odd = __bind(function(num) {
    return num % 2 === 1;
  }, this);
  console.log("3 is odd? " + odd(3));
  console.log("4 is odd? " + odd(4));
  console.log("3 string is odd? " + odd('3'));
  odd_strict = function(num) {
    if (typeof num !== 'number') {
      throw "" + num + " is not a number";
    }
    if (num !== Math.round(num)) {
      throw "" + num + " is not an integer";
    }
    if (!(num > 0)) {
      throw ("" + num + " is not positive")(num % 2 === 1);
    }
  };
  try {
    console.log("odd strict 4.5 " + odd_strict(4.5));
  } catch (e) {
    console.log(e);
  }
  count = 0;
  incrementCount = function() {
    return count++;
  };
  incrementCount();
  console.log("count is now " + count);
}).call(this);
