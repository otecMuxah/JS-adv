const testObj = {
    equal (result) {
        if(this.input === result) {console.log("Success")}
        else {console.error(`${input} not equal to ${result}`)}
    },
    defined () {
        if (this.input !== undefined) {console.log('Success')} else {
            console.error(`${input} not defined`)
        }
    }
};

const test = (input) => {
    testObj.input = input;
    return testObj;
};

const sum = (a=0,b=0) => {
    a+b;
};

const first = 2, second = 3;

test.sum(first+second).equal(first+second);

