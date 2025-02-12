let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset")

let player1 = true;

const winPatterns = [
    [0,1,2], //index 0
    [0,3,6], //index 1
    [0,4,8], //index 2
    [1,4,7], //index 3
    [2,5,8], //index 4
    [2,4,6], //index 5
    [3,4,5], //index 6
    [6,7,8], //index 7
];

boxes.forEach((box) =>{ //loop for each box
    box.addEventListener("click", () =>{       //event listner
        console.log("clicked");
        if(player1 === true){
            box.innerText = "X";
            player1 = false;
        } else{
            box.innerText = "O";
            player1 = true;
        }
        box.disabled = true;
        checkWinner();
    });

});


// check for winner

