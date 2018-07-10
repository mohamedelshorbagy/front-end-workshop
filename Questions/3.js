
/**
 * 
 * 
 * Hoisting
 * 
 */


/**
 * 
 * 1. Tell me the output of the code bellow and Explain our answer and the order of hoisting? Write the code after the engine recreate it ?
 *  
 */
function foo() {
    function bar() {
        return 3;
    }
    return bar();
    var bar = function () {
        return 8;
    }
}
var returnedValue = foo();
console.log(returnedValue);

/**
 * 
 * 
 * 2. Tell me the output of the code bellow and Explain tour answer and the order of hoisting ? Write the code after the engine recreate it ?
 * 
 */

function foo() {
    function bar() {
        a = 10;
        console.log(a);
    }
    bar();
}

foo(); //?