let trex = document.getElementById("trex");
let cactus = document.getElementById("cactus");
let score = document.getElementById("score");
let cloud = document.getElementById("cloud");
let ground = document.getElementById("ground");
let gameOver = document.getElementById("gameOver");

let interval = null;
let playerScore = 0;

let scoreCounter = () =>{
  playerScore++;
  score.innerHTML = `Score <b>${playerScore}</b>`;

}


//interval = setInterval(scoreCounter, 200);


window.addEventListener("keydown", (start) => {
  //    console.log(start);
  if (start.code == "Enter") {
      gameOver.style.display = "none";
      cactus.classList.add("blockActive");
      cloud.classList.add("cloudActive");
      ground.classList.add("pathActive");

      //score
      let playerScore = 0;
      interval = setInterval(scoreCounter, 200);
  }
});


//jump Your Character
window.addEventListener("keydown", (e) => {
  //    console.log(e);

  if (e.code == "Space")
      if (trex.classList != "jump") {
          trex.classList.add("jump");

          setTimeout(() => {
              trex.classList.remove("jump");
          }, 500);
      }
});


let isAlive=setInterval(function(){
   
  let trexTop=parseInt(window.getComputedStyle(trex).getPropertyValue("top"));

  let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if(cactusLeft<50 && cactusLeft>0 && trexTop>=180) {

  clearInterval(interval);
    gameOver.style.display = "block";
    cactus.classList.remove("blockActive");
    cloud.classList.remove("cloudActive");
    ground.classList.remove("pathActive");
    
    playerScore=0;
  }
},20);
