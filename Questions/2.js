/**
 * 
 * 
 * Scopes & Closures
 * 
 */


/**
 * 
 * 
 * 1. Explain for each scope in the code below it's variables and the Conversation Between (Engine & Scope)
 * 
 */
var b = 10;
function foo() {
    var c = 20;
    function bar(f) {
        var x = 8;
        console.log(b, c, d, f, x);
    }
    var d = 5;
    bar(d * 10);
}

foo();

/**
 * 
 * 
 * 2. Tell me the output of the code bellow and Explain your answer.
 * 
 */
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}


/**
 * 
 * 3. Tell me the output of the code bellow and Explain your answer.
 *  
 */
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function () {
        console.log('You clicked element #' + i);
    });
}
