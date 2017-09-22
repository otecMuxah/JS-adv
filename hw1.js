(function(){

    // task1.1
    const array = [1,2,3,4,5,6,7];
    const max = (array) => Math.max(...array);
    const taskDiv = document.createElement('div');
    let message = 'task 1.1</br> input array - ' + array + '</br>maximum is - ' + max(array);
    taskDiv.innerHTML = message;
    document.body.appendChild(taskDiv);
    
    // task 1.2
    const a = [1, 2, 3]; const b = [4, 5, 6];
    const newArray = [...a,...b];
    const taskDiv2 = taskDiv.cloneNode(true);
    message = 'task 1.2</br>input arrays - ' + a + '|' + b + '</br>new array is - ' + newArray;
    taskDiv2.innerHTML = message;
    document.body.appendChild(taskDiv2);

    // task1.3
    const writeArg = (...args) => document.write(args);
    const taskDiv3 = taskDiv.cloneNode(true);
    message = 'task 1.3</br>';
    taskDiv3.innerHTML = message;
    document.body.appendChild(taskDiv3);
    writeArg(['one','two','three']);

    // task2.1
    const destr = (...rest) => {
        const [a,...obj] = rest;
        let result; 
        return result = {
            first : a,
            others: obj
        }
    }
    const taskDiv4 = taskDiv.cloneNode(true);
    message = 'task 2.1</br>obj is - ' + destr(1,2,3,4,5);
    taskDiv4.innerHTML = message;
    document.body.appendChild(taskDiv4);

    // task2.2
    const organisation = {  
        name: 'Google',   
        info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing']   }
    };
    const getInfo = (obj) => {
        const {name='Unknown',info:{partners}} = obj;
        const [firstPartner,secondPartner] = partners;
        const taskDiv4 = taskDiv.cloneNode(true);
        message = 'task 2.2</br>Name: ' + name + '</br>Partners: ' + firstPartner + ',' + secondPartner;
        taskDiv4.innerHTML = message;
        document.body.appendChild(taskDiv4);
    };

    getInfo(organisation);

    // task3.1
    const sum = (...params) => (!params.length) ? 0 : params.reduce((prev, next) => prev + next);
    const taskDiv5 = taskDiv.cloneNode(true);
    message = 'task 3.1</br>New function: ' + sum;
    taskDiv5.innerHTML = message;
    document.body.appendChild(taskDiv5);
    //task3.2
    const utils = {
        numbers: [1,2,3,4],
        prefix: 'number',
        getOdd: function () {
            return this.numbers.map((number) => {
                return this.prefix + ' - ' + number;
            })
        }
    };
    const taskDiv6 = taskDiv.cloneNode(true);
    message = 'task 3.2</br>Result: ' + utils.getOdd();
    taskDiv5.innerHTML = message;
    document.body.appendChild(taskDiv5);
})();
