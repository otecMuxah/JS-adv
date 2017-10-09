const getUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
    const ul = document.createElement('ul');
    ul.innerHTML = users.map(user=>`<li>${user.name}</li>`.join(''));
    document.body.insertAdjacentElement('afterbegin', ul);
}

const getUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}
async function drawUsers() {
	const users =  await getUsers();
	const ul = document.createElement('ul');
	ul.innerHTML = users.map(user => `<li>${user.name}</li>`).join('');
	 document.body.insertAdjacentElement('afterbegin', ul);
}

// hw
async function createUser (users =[]){
	const newUsers = await Promise.all(users.map(data => 
		$.ajax('https://jsonplaceholder.typicode.com/users', {method: 'POST', data})));
	console.log(newUsers)
}
createUser([{name: 'ccc', age: 25}])