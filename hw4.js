(function(){
    // task 8.1
    let task81 = () => {
        const names = {
            0: 'Vasya',
            1: 'Petya',
            2: 'Kolya'
        };

        names[Symbol.iterator] = function () {
            let index = 0;
            const keys = Object.keys(this);
            return {
                next: () => {
                    return {
                        value: this[index++],
                        done: index > keys.length
                    };
                }
            };
        };

        for (let val of names) {
            console.log(val);
        }
    };
    task81();

    //task82
    let task82 = () => {
        const obj = {
            zone: true,
            word: 'test',
            skill: 'JS',
            name: 'John'
        };

        obj[Symbol.iterator] = function () {
            let index = 0;
            const keys = Object.keys(this).sort();
            return {
                next: () => {
                    return {
                        value: this[keys[index++]],
                        done: index > keys.length
                    };
                }
            };
        };

        for (let val of obj) {
            console.log(val);
        }

    };
    task82();
    //  task8.3
    let task83 = () => {
        const date = {
            [Symbol.iterator]: function () {
                const now = new Date();
                const dateObj = {  
                    fullYear() {return now.getFullYear();},
                    month() {return now.getMonth()+1;},
                    day() {return now.getDay();},
                    today() {return now.getDate();},
                    hours() {return now.getHours();},
                    minutes() {return now.getMinutes();},
                    seconds() {return now.getSeconds();}
                };
                const capitalizeFirstLetter = (string) => {
                    if (string) {return string.charAt(0).toUpperCase() + string.slice(1);}
                };
                const dateObjKeys = Object.keys(dateObj);
                let index = 0;

                return {
                    next() {
                        return {
                            value: (()=>{
                                let dateKey = dateObjKeys[index++];
                                if (dateKey) {return capitalizeFirstLetter(dateKey) + ' is ' + dateObj[dateKey]();}
                            })(),
                            done: index > dateObjKeys.length
                            //this thing is not work because it try to iterate 8th time when length is 7
                        };
                    }
                };
            }
        };

        for (let val of date) {
            console.log(val);
        }
    };
    task83();
})();
