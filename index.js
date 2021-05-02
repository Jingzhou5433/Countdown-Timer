const startBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');
const time1Radio = document.querySelector('#time1');
const time2Radio = document.querySelector('#time2');
let minDigit = document.querySelector('#min-digits');
let secDigit = document.querySelector('#sec-digits');


(function init(){
    time1Radio.checked = true;
    console.log("init!");
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

function resetStyle(btnText, timeColor){
    startBtn.innerHTML = btnText;
    minDigit.style.color = timeColor;
    secDigit.style.color = timeColor;
}

function setTimeDigit(min, sec){
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
            resetStyle('STOP', "black");

            totalSec -= 1;
            numToStr(totalSec);

            timerID = setInterval(()=>{
                if(totalSec <= 0){
                    clearInterval(timerID);
                    window.alert("Time is up!"); 
                    resetStyle("OK");
                    return;
                }

                totalSec -= 1;
                numToStr(totalSec);
                
            }, 1000);
        }else if(text === 'STOP'){
            
            resetStyle('START', "rgb(184, 183, 183)");
            clearInterval(timerID);
        }
        
    })

    resetBtn.addEventListener('click', ()=>{
        if(timerID){
            clearInterval(timerID);
        }
        
        resetStyle('START', "black");
        if(time1Radio.checked){
    
            setTimeDigit("05","00");
        }
    
        else if(time2Radio.checked){
 
            setTimeDigit("25","00");
        }
    });

    time1Radio.addEventListener('click', ()=>{
        if(timerID){
            clearInterval(timerID);
            
            resetStyle('START', "black");
        }
        setTimeDigit("05","00");
    });

    time2Radio.addEventListener('click', ()=>{
        if(timerID){
            clearInterval(timerID);
            
            resetStyle('START', "black");
        }       
        setTimeDigit("25","00");
    });
}
