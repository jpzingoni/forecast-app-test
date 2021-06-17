window.onload = function(){

    let clock = document.querySelector('.clock')
    console.log(clock.textContent.length)
    clock.textContent = Math.floor(Math.random() * (2 - 0 + 1) + 0).toString()

    function calcularHora(){
        let newHour = Math.floor(Math.random() * (2 - 0 + 1) + 0).toString()
        let newHour3 = Math.floor(Math.random() * (5 - 0 + 1) + 0).toString()
        let newHour4 = Math.floor(Math.random() *(9 - 0 + 1) + 0).toString()
        if(newHour == "0"){
            let newHour2 = Math.floor(Math.random() *(9 - 0 + 1) + 0).toString()
            clock.innerText = newHour + newHour2 + ":" + newHour3 + newHour4
        }
        if (newHour == "2"){
            let newHour2 = Math.floor(Math.random() *(4 - 0 + 1) + 0).toString()
            clock.innerText = newHour + newHour2 + ":" + newHour3 + newHour4
        }
    }
      
    }


