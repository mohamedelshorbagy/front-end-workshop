// DOCUMENT PROPS
// console.log(document);
// console.log(document.body);
// console.log(document.head);


// DOCUMENT ELS. PROPS
// console.log(document.all);
// console.log(document.all[10]);

// document.title = "DOM";
// console.log(document.title);

// SELECTING ELMENTS
// BY ID
// var heading = document.getElementById('heading');
// heading.innerHTML;
// heading.textContent = "<i>Heading From JS!</i>";
// heading.innerHTML = "<i>Heading From JS!</i>";
// // console.log(heading);
// heading.style.border = "3px solid rgb(42,204,113)";

// BY Class
// Return HTMLCOLLECTION
// var textCenter = document.getElementsByClassName('text-center');
// textCenter[0].style.backgroundColor = 'rgb(52,152,220)';

// for (var i = 0; i < textCenter.length; i++) {
//     textCenter[i].style.backgroundColor = 'rgb(52,152,220)';
// }
// By Tag
// var lis = document.getElementsByTagName('li');
// console.log(lis);

// By CSS Selector
// Return NodeList
// var headingBySelectors = document.querySelectorAll('.container .text-center');
// console.log(headingBySelectors);

var btn = document.getElementById('btn-search');
var heading = document.querySelector('h1.text-center');
// EVENT LISTENERS
btn.addEventListener('click', btnClicked);


// var box = document.getElementById('box');
// box.addEventListener('mousemove', boxMouseMove);
/**
 * 
 * @function: btnClicked
 * @return: VOID
 * 
 */

function btnClicked(event) {
    console.log(event.type);
    // heading.style.marginTop = "80px";
    // btn.style.marginTop = "80px";
}
/**
 * 
 * 
 * 
 * 
 */

function boxMouseMove(e) {
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    box.style.backgroundColor = `rgb(${e.clientX},${e.clientY},40)`;
}

var addBtn = document.getElementById('btn-add');
var items = document.getElementById('items');
var inputField = document.getElementById('search');
addBtn.addEventListener('click', addItem);

function addItem(event) {
    items.innerHTML += `<li class="list-group-item">${inputField.value}</li>`;
}


inputField.addEventListener('input' , inputPressed);


function inputPressed(event) {
    items.innerHTML += `<li class="list-group-item">${event.target.value}</li>`;

}



















