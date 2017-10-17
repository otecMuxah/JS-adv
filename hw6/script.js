// task 6.1
// const getData = async() => {
//   const response = await fetch('structure.json');
//   const data = await response.json();
//   return data;
// };

// const renderData = async() => {
//   const data = await getData();
//   const style = document.createElement('style');
//   document.body.innerHTML = data.html;
//   style.innerHTML = data.styles ;
//   document.body.appendChild(style);
// };

// renderData();


// https://plnkr.co/edit/KyNLf2pt8Co8BDm3EYtO?p=preview

const getData62 = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
};

const renderData = async() => {
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