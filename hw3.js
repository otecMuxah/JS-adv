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
$('.button').on('click', function () {
    promise1.resolve($('.input').val());
});

//task 6.4 
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

// });