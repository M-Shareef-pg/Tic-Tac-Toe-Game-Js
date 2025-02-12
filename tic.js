let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset")

let player1 = true;


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
    });

});
