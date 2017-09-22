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
    const writeArg = (...args) => {
        document.write(args);
    };
    const taskDiv3 = taskDiv.cloneNode(true);
    message = 'task 1.3</br>';
    taskDiv3.innerHTML = message;
    document.body.appendChild(taskDiv3);
    writeArg(['one','two','three']);
})();
