const startBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');
const time1Radio = document.querySelector('#time1');
const time2Radio = document.querySelector('#time2');
let minDigit = document.querySelector('#min-digits');
let secDigit = document.querySelector('#sec-digits');


(function init(){
    time1Radio.checked = true;
    console.log("init!");
    strToTime();
    countHandler();
})();

// Helper functions

function strToTime(){
    let min = +minDigit.innerHTML;
    let sec = +secDigit.innerHTML;
    let totalSec = min * 60 + sec;

    return totalSec;
}

function numToStr(totalSec){
    let min = Math.floor(totalSec / 60);
    if(min < 10){
        min = '0' + min;
    }
    let sec = totalSec - min*60;
    if(sec < 10){
        sec = '0' + sec;
    }

    minDigit.innerHTML = min;
    secDigit.innerHTML = sec;
   
}


// Control function
function countHandler(){

    let timerID;

    startBtn.addEventListener('click',()=>{
        
        let text = startBtn.innerHTML;
        let totalSec = strToTime();
        
        if(text === 'START'){
            startBtn.innerHTML = 'STOP';
            totalSec -= 1;
            numToStr(totalSec);

            timerID = setInterval(()=>{
                if(totalSec <= 0){
                    clearInterval(timerID);
                    window.alert("Time is up!");         
                    minDigit.innerHTML = "00";
                    sec.innerHTML = '00';
                }

                totalSec -= 1;
                numToStr(totalSec);
                
            }, 1000);
        }else{
            startBtn.innerHTML = 'START';
            clearInterval(timerID);
        }
    })

    resetBtn.addEventListener('click', ()=>{
        if(timerID){
            clearInterval(timerID);
        }
        startBtn.innerHTML = 'START'

        if(time1Radio.checked){
            minDigit.innerHTML = "05";
            secDigit.innerHTML = '00';
        }
    
        else if(time2Radio.checked){
            minDigit.innerHTML = "25";
            secDigit.innerHTML = '00';
        }
    });

    time1Radio.addEventListener('click', ()=>{
        if(timerID){
            clearInterval(timerID);
            startBtn.innerHTML = 'START'
        }
        console.log('radio Button 1');
        minDigit.innerHTML = "05";
        secDigit.innerHTML = '00';
    });

    time2Radio.addEventListener('click', ()=>{
        if(timerID){
            clearInterval(timerID);
            startBtn.innerHTML = 'START'
        }
        console.log('radio Button 2');
        minDigit.innerHTML = "25";
        secDigit.innerHTML = '00';
    });
}
