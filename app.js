


let started=false;
let level=0;
let gameseq=[];
let user=[];

let colors=['red','green','orange','purple'];
document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("Game was started");
        started=true;

        levelUp();
    }
})

function checkAns(idx){
    if(gameseq[idx]==user[idx]){
        if(user.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerText=`Game Over! your score is ${level}`;
        reset();
    }
}

function btnPress(){
   let btn=this;
   btnFlash(btn)
   let color=btn.getAttribute("id");
   console.log(color);
   user.push(color);
   console.log(user);
   checkAns(user.length-1)
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },200)
}
let h3=document.querySelector('h3');
function levelUp(){
    user=[] 
    level++;
    h3.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let color=colors[randIdx];
    let randBtn=document.querySelector(`.${color}`);
    gameseq.push(color);
    console.log(gameseq)
    btnFlash(randBtn);
}

let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false
    user=[]
    gameseq=[]
    level=0
}
