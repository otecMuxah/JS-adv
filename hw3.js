// task 6.1
// document.addEventListener('DOMContentLoaded', function(){
function promiseCreator(time, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    });
}

const prom = promiseCreator(500, 'Ok!');

prom.then(console.log);

// task 6.2
class Prom {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}

const promise1 = new Prom();
// promise1.then(data => console.log(data));
// promise1.resolve('test');

//task 6.3
https://codepen.io/superduper77/pen/zEwMzM

//task 6.4 
https://codepen.io/superduper77/pen/zEzWLM

// $(function () {
//     let userList,
//         userListDOM = $('ul.user-list');

//     fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => {
//         userList = data;
//     });

//     (function createList(userList) {
//         userListDOM.empty();
//         $.each(userList, (i) => {
//             let li = $('<li/>').appendTo(userListDOM);
//             let name = $('<a/>').text(userList[i].id).appendTo(li);
//             let email = $('<a/>').text(userList[i].title).appendTo(li);
//         });
//     })(userList);
// });


//task 6.5
(function () {
    let result = [];
    function getPromise(url) {
        const xhr = new XMLHttpRequest(),
            promise = new Promise((resolve, reject) => {
                xhr.addEventListener('readystatechange', () => {

                    if (xhr.readyState != 4) return;

                    if (xhr.status != 200) {
                        reject(xhr.status);
                    } else {
                        resolve(xhr.responseText);
                    }
                });
            });

        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.send();

        return promise;
    }


    
    Promise.all([
        getPromise('https://jsonplaceholder.typicode.com/posts'),
        getPromise('https://jsonplaceholder.typicode.com/users')
    ])
        .then(response => {
            response.map(item=>result.push(JSON.parse(item)));
            console.log("Posts - ", result[0].length);
            console.log("Users - ", result[1].length);
        });
})();
