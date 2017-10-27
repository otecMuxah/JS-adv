// task 6.1

// https://plnkr.co/edit/KyNLf2pt8Co8BDm3EYtO?p=preview


// task 6.2
// https://github.com/otecMuxah/JS-adv/tree/master/hw6

// RESULT IS HERE - https://rawgit.com/otecMuxah/JS-adv/master/hw6/index.html
const getData62 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
};

const renderData = async () => {
    const data = await getData62();
    let counter = 1;
    let ul = document.createElement('ul');
    let htmlText = '';
    while (data[data.length - 1].userId >= counter) {
        let complete = 0;
        let uncomplete = 0;
        let newData = data.filter(item => {
            return item.userId == counter
        })
        let newNewData = newData.map(data => {
            data.completed ? complete++ : uncomplete++;
        })
        htmlText += `<li>Пользователь userID=${counter} имеет ${complete} завершенных и ${uncomplete} не завершенных заданий</li>`
        counter++;


    }
    ul.innerHTML = htmlText;
    document.body.appendChild(ul);
};

renderData();

// task 6.3
// https://codepen.io/superduper77/pen/NaerBK