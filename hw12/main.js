const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}, {age: 68}, {age: 38}, {age: 22}, {age: 14}];

const getDay = () => {
    return new Date().getDay();
};

const getAdultUsers = (users = []) => users.filter(user => user.age > 18);

const getRandomUsers = (users, arg) => {
    const numb = Math.random();

    if (!users) {
        return false;
    }

    const length = users.length;
    const middleUser = Math.round(length / 2);

    if (numb > 0.5) {
        return users.slice(0, middleUser);
    }

    return users.slice(middleUser, length);
};


(() => {
    const testObj = {
        equal(result) {
            if (this.input === result) console.log('Success');
            else console.error(`${this.input} not equals to ${result}`);
        },
        defined() {
            if (this.input !== undefined) console.log('Success');
            else console.error(`${this.input} is not defined`);
        },
    };

    const test = (input) => {
        testObj.input = input;
        return testObj;
    };


//test 1

    const range = 0 < getDay() && getDay() < 32;
    test(typeof getDay()).equal('number');
    test(range).equal(true);

//test2
    const testUsers = [{age: 4}, {age: 40}];
    let testAdult = getAdultUsers(testUsers);
    let testNoAttr = getAdultUsers();

    test(testAdult[0].age).equal(40);
    test(testNoAttr.length).equal(0);


    // test 3
    const origMathRandom = Math.random;

    test(getRandomUsers()).equal(false);

    Math.random = () => {
        return 0.4;
    };


    test(getRandomUsers(testUsers)[0].age).equal(40);

    Math.random = () => {
        return 0.6;
    };

    test(getRandomUsers(testUsers)[0].age).equal(4);

    Math.random = origMathRandom;
})();


