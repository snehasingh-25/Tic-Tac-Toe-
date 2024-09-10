let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newgame");
let msg=document.querySelector(".msg");
let msg_box=document.querySelector(".msgbox");
let count=0;
let turnO=true;
const winp=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        count++;
        box.disabled=true;
        let isWinner=checkWinner();
        if (count === 9 && !isWinner) {
            draw();
        }
    });
});
const diableBoxes =() => {
    for(box of boxes){
        box.disabled=true;
    }
}
const draw = ()=>{
        msg.innerText=`Game was a Draw`;
        msg_box.classList.remove("hide");
}
const showWinner = (winner) =>{
        msg.innerText=`Player ${winner} won the game`;
        msg_box.classList.remove("hide");
        diableBoxes();
}

const checkWinner = ()=>{
    for(let pattern of winp){
        let pos1 =boxes[pattern[0]].innerText;
        let pos2=  boxes[pattern[1]].innerText;
        let pos3=  boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1=== pos2 && pos2===pos3){
            showWinner(pos1);
            return true;
        }
    }
 }
 return false;
}
resetbtn.addEventListener("click",()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        msg_box.classList.add("hide");
    }
    count = 0;
    turnO = true;
});
newbtn.addEventListener("click",()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        msg_box.classList.add("hide");
    }
    count = 0;
    turnO = true;
});