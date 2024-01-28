// 	For typing 
// @ts-ignore
let  typed = new Typed(".auto-type" ,{
	strings : [
		"Welcome to... ",
	" Tic Tac Toe..!!"
	],
	typeSpeed : 50,
	backSpeed : 50,
	loop : true

})

// accessing elements
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new-button");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let newGame = document.querySelector(".newb")

  
const resetGame = () =>{
	turnO = true ;
	enableBoxes();

}






// Game logic

let turnO = true;
const winPatterns = [
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8],
];

// Reset game
  

boxes.forEach((box) => {
	box.addEventListener("click", () => {
	     if (turnO) {
			// @ts-ignore
			box.innerText = "O"
			turnO = false
		 }else{
			// @ts-ignore
			box.innerText = "X";
			turnO = true ;
		 }
		//@ts-ignore
		boxes.disabled = true ;

		checkWinner();
	});
})


// enabling and disabling of boxes 
const disableBoxes = () => {
	for (const box of boxes) {
		box.disabled = true;
	}
}

const enableBoxes = () => {
	for (const box of boxes) {
		box.disabled = false;
		box.innerText = "";
	}
}


// winner logic
const showWinner = (winner) => {
msg.innerText = 
`Congratulations,The winner is "${winner}"`
msgcontainer.classList.remove("hide")
disableBoxes();
};

// const clickingnew = ()=>{
//      newGameBtn.
// }

 const checkWinner = ()=>{
	for (const  pattern of winPatterns) {
		pattern[0],pattern[1],pattern[2]
		// @ts-ignore
		let pos1val = boxes[pattern[0]].innerText;
		// @ts-ignore
		let pos2val = boxes[ pattern[1]].innerText;
		// @ts-ignore
		let pos3val = boxes[pattern[2]].innerText;

		 if (pos1val != "" && pos2val != "" && pos3val != "") {
			if (pos1val == pos2val && pos2val == pos3val ) {
				console.log("Winner",pos1val);
				showWinner(pos1val)
			}
		 }
	};
 };

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);