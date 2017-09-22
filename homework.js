// task1.1
const array = [1, 2, 3, 4, 5, 6, 7];
const max = (array) => Math.max(...array);
// task 1.2
const a = [1, 2, 3];
const b = [4, 5, 6];
const newArray = [...a, ...b];

// task1.3
const writeArg = (...args) => document.write(args);
writeArg(['one', 'two', 'three']);

// task2.1
const destr = (...rest) => {
    const [a, ...obj] = rest;
    let result;
    return result = {
        first: a,
        others: obj
    }
}

// task2.2
const organisation = {
    name: 'Google',
    info: {
        employees: 1536,
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};
const getInfo = (obj) => {
    const {
        name = 'Unknown', info: {
            partners
        }
    } = obj;
    const [firstPartner, secondPartner] = partners;
    console.log('Name: ' + name);
    console.log('Partners: ' + firstPartner + ',' + secondPartner);
};

getInfo(organisation);

// task3.1
const sum = (...params) => (!params.length) ? 0 : params.reduce((prev, next) => prev + next);
//task3.2
const utils = {
    numbers: [1, 2, 3, 4],
    prefix: 'number',
    getOdd: function () {
        return this.numbers.map((number) => {
            return this.prefix + ' - ' + number;
        })
    }
};
//task 3.3

const getDate = () => new Date()
const getDay = () => {
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[new Date().getDay()];
}
const getListCopy = (list) => list.slice()
