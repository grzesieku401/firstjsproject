(function(){
    var btn = document.querySelector("#getNumbers"),
        output = document.querySelector("#showNumbers");
    
    function getRandom(min,max){
        return Math.round(Math.random() * (max-min )+min);
    }
    
    window.getRandom = getRandom;

    function showRandomNumbers(){
        var numbers=[],
            number;

        for (let i = 0; i < 6; i++) {
            number = getRandom(1,49);
            
            while(numbers.indexOf(number)!==(-1)){              
                number = getRandom(1,49);
            }
            numbers.push(number);             
        }      
        console.log(numbers);
        output.value = numbers.join(", ");
    }
    
    btn.onclick = showRandomNumbers;

})();