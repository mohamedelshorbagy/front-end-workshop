// // Server
// var myString = "Hello";

// if (isNaN(myString)) {
//     // Do Nothing
// } else {
//     // All Work
// }
// // Polyfill
// if (!Number.checkNaN) {
//     Number.checkNaN = function (num) {
//         return num != num;
//     }
// }
// // NaN
// console.log(isNaN(NaN));
// console.log(isNaN("foo"));
// console.log(isNaN(42));

// To Number
// var a = "123";

// var b = a - 3;
// var c = Number(a);
// var myDate = new Date();
// console.log(+myDate);


// console.log(a);
// console.log(b);
// console.log(c);

// To String
// var a = 123;


// var b = a + "";
// var c = String(a);
// console.log(a);
// console.log(b);
// console.log(c);

// Boolean

// var a = 123;


// var b = Boolean(a);
// var c = !!a;
// console.log(a);
// console.log(b);
// console.log(c);

/**
 * 
 * Interview Question
 * 
 */


// var d = {};
// var c = { key: 123 };
// var e = { key: 456 };

// d[c] = 123; 
// // c ==> Memor
// d[e] = 456;
// console.log(d);



/**
 * 
 * Double Equals vs Triple Equals
 * Abstract Algorithm vs Strict Algorithm
 * 
 */

// Rule 1 [ Numbe <=> String ]
// var a = "0";
// var b = 42;

// if (b == a) {
//     console.log('yep!');
// } else {
//     console.log('falsy');
// }



// Rule 2 (A) [ Boolean <=> Different Types ]
var a = false;
var b = "0";
if (b == a) {
    console.log('yep!');
} else {
    console.log('falsy');
}


















































