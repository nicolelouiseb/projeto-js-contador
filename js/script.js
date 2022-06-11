var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber=0


function add(){
    currentNumberWrapper.innerHTML = currentNumber + 1;
    currentNumber=currentNumber+1;
    console.log('currentNumer');
}

function decrement(){ 
    currentNumberWrapper.innerHTML = currentNumber - 1;
    currentNumber=currentNumber-1;
    console.log('currentNumer');
    
}

