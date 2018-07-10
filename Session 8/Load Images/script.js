/**
 * 
 * Callbacks
 * 
 * 
 */

function createImage(image) {
    let imgElem = document.createElement('img');
    imgElem.src = image.src;
    imgElem.width = 150;
    imgElem.height = 150;
    document.body.appendChild(imgElem);
}

// Callbacks

// loadImage('images/blue-moon-gradient.png', function (error, img1) {
//     if (error) {
//         throw error;
//     }
//     createImage(img1);
//     loadImage('images/compize-install.png', function (error, img2) {
//         if (error) {
//             throw error;
//         }
//         createImage(img2);
//         loadImage('images/compize-install.png', function (error, img3) {
//             if (error) {
//                 throw error;
//             }
//             createImage(img3);
//         })
//     })
// })

// Promised Callbacks

// loadImage('images/blue-moon-gradient.png').then((img1) => {
//     createImage(img1);
//     loadImage('images/blue-moon-gradient.png').then((img2) => {
//         createImage(img2);
//         loadImage('images/blue-moon-gradient.png').then((img3) => {
//             createImage(img3);
//         })
//     })
// })

// Promises Chained
// loadImage('images/blue-moon-gradient.png').then((img) => {
//     createImage(img);
//     return loadImage('images/blue-moon-gradient.png')
// }).then(img => {
//     createImage(img);
//     return loadImage('images/compize-install.png');
// }).then(img => {
//     createImage(img)
// }).catch(err => {
//     throw err;
// })


// Promise Request All Images at Once
// Promise.all([
//     loadImage('images/blue-moon-gradient.png'),
//     loadImage('images/compize-install.png'),
//     loadImage('images/blue-moon-gradient.png')
// ]).then((data) => {
//     data.forEach(img => {
//         createImage(img);
//     })
// }).catch((error) => {
//     throw error;
// })


const list = document.getElementById('list');
const btn = document.getElementById('btn');
const loginBtn = document.getElementById('login');
const inputUsername = document.getElementById('username');
const inputJob = document.getElementById('job');
const alert = document.getElementById('alert');
alert.style.display = 'none';
btn.addEventListener('click', getData);
loginBtn.addEventListener('click', createUser);


function createUser() {
    const body = {
        username: inputUsername.value,
        job: inputJob.value
    }
    axios.post('https://reqres.in/api/users', body)
        .then((response) => {
            console.log(response);
            console.log('****');
            console.log(response.data);
            alert.style.display = 'block';
            alert.textContent += `${response.data.username} is createdAt => ${response.data.createdAt}`;
        })
        .catch(error => { throw error })
}


function getData() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            let listData = '';
            response.data.forEach(item => {
                listData += `<tr>
                <td>${item['id']}</td>
                <td>${item['name']}</td>
                <td>${item['username']}</td>
                <td>${item['email']}</td>
                </tr>
                `;
            })
            list.innerHTML += listData;
        })
        .catch((error) => {
            throw error;
        })
}







