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

const msg = text => alert(text);
const originAlert = alert;

window.alert = (text) => {
    window.alert.wasCalled = true;
    window.alert.argument = text;
}

msg('test');

test(alert.wasCalled).equal(true);