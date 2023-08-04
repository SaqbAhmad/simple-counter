// set initial value;
let count=0;
// select value and buttons
const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");
// console.log(btns);
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        // console.log(e.currentTarget);
       // console.log(e.target.innerText);
        if(e.target.innerText==="DECREASE"){
            count--;
        }
        else if(e.target.innerText==="INCREASE"){
            count++;
        }
        else{
            count=0;
        }
        if(count===0){
            value.style.color="#222";
        }
        else if(count>0){
            value.style.color="blue";
        }
        else{
            value.style.color="red";
        }
        value.textContent=count;
    })
})