
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
    function bar() {
        return 8;
    }
}
foo();

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