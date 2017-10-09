(function(){
    // task 9.1
    let task91 = () => {
        function* getValue(sn) {
            let value = sn;
            while (value*sn < 1000000000) {
                yield value*=sn;
                if (value*sm >= 1000000000) {
                    return console.error("alram alram")
                } 
            }
        }
        const valuer = getValue(5000);
    }
    // task 9.2
    let task92 = () => {
        function* createSeconds() {
            while(true) {
                const now = new Date();
                yield Math.floor(now.getSeconds()/10)*10;
            }
            
        }
        const getSec = createSeconds();
    }

    //task9.3
    // https://codepen.io/superduper77/pen/qPxjxr?editors=0010

})();