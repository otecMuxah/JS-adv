(function () {
    // task4.1
    const getObject = (name, age) => {
        return {
            name: name,
            age: age
        };
    };
    getObject('Vasya', 10);
    // for some reason it give error when i try like this "const getObject = (name, age) => {name: name, age: age};"

    // task 4.2
    const someObj = {
        name: 'Vasya',
        getLength() {
            return this.name.length;
        },
        getReverse() {
            return [...this.name].reverse().join('');
        }
    };
    // task 4.3
    const getOneObject = (...obj) => {
        return Object.assign(...obj);
    };
    getOneObject( {test: 123}, {value: 'hello'}, {flag: false} );

    // task 5.1
    class Component {
        constructor(tagName = 'div') {
            this.node = document.createElement(tagName);
        }
    }
    const comp = new Component('span');

    //task 5.2
    class Component2 {
        constructor(tagName = 'div') {
            this.node = document.createElement(tagName); 
        }
        setText(text) { 
            this.node.textContent = text;
        }  
    }
    // task 5.3
    class Component3 {
        constructor(tagName = 'div'){
            this.node = document.createElement(tagName);
        }
        setText(text) {this.node.textContent = text;}
    }
    class InputComponent extends Component3 {
        constructor(tagName) {
            super(tagName);
            this.node.placeholder = 'Enter text';
        }
        setText(text) { this.node.value = text; }
        
    }
    // task 5.4 
    

})();