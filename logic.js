const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const num  = document.querySelector('h2');
let counter = 0;
num.innerText = counter;
increase.addEventListener('click', () =>{
    counter++;
    num.innerText = counter;
    if(counter >= 0){
        num.setAttribute("style",'color:black');
    }
});
reset.addEventListener('click',()=>{
    counter = 0;
    num.innerText = counter;
    if(counter == 0){
        num.setAttribute("style",'color:black');
    }
});
decrease.addEventListener('click',() => {
    counter--;
    num.innerText = counter;
    if(counter < 0){
        num.setAttribute("style",'color:red');
    }
});