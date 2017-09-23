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
    getOneObject({
        test: 123
    }, {
        value: 'hello'
    }, {
        flag: false
    });

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
        constructor(tagName = 'div') {
            this.node = document.createElement(tagName);
        }
        setText(text) {
            this.node.textContent = text;
        }
    }
    class InputComponent extends Component3 {
        constructor(tagName) {
            super(tagName);
            this.node.placeholder = 'Enter text';
        }
        setText(text) {
            this.node.value = text;
        }

    }
    // task 5.4 
    class Figure {
        constructor(angles = 1) {
            this.abstract = true;
            this.angles = angles;
        }
        getInfo() {
            return {
                angles: this.angles,
                abstract: this.abstract
            };
        }
    }
    class Triangle extends Figure {
        constructor(angles, name = 'triangle') {
            super(angles);
            this.abstract = false;
            this.name = name;
        }
        getInfo() {
            const props = super.getInfo();
            props.name = this.name;
            return props;
        }
    }
    // task 5.5
    class Table {
        constructor(rows = 3, columns = 3) {
            this.rows = rows;
            this.columns = columns;
            this.matrix = (function () {
                let result = [];
                for (let i = 0; i < rows; i++) {
                    let temp = [];
                    result.push(temp);
                    for (let j = 0; j < columns; j++) {
                        let temp2 = [{
                            text: ''
                        }];
                        result[i].push(temp2);
                    }
                }
                return result;
            })();
        }
        getCells() {
            return this.rows * this.columns;
        }
        setCellText(row, column, text) {
            this.matrix[row][column].text = text;
        }
        getCellText(row, column) {
            return this.matrix[row][column].text;
        }
        getTableInfo() {
            return {
                cells: this.getCells(),
                rows: this.rows,
                columns: this.columns
            };
        }
        static calcCells(rows, columns) {
            return rows * columns;
        }
    }
    // task 5.6
    class heirTable extends Table {
        constructor(rows, columns, name = 'table') {
            super(rows, columns);
            this.name = name;
        }
        getTableInfo() {
            let result = super.getTableInfo();
            result.name = this.name;
            return result;
        }
    }
})();