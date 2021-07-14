
let stripHeights = [];
let strips = [];
let sz = 95;
let speed = document.querySelector(".slider").value;
let check = false;

/* Disabling all buttons*/
function disable(status){
  let btns = document.querySelectorAll(".btn");
  for(let i=0;i<btns.length;i++){
    btns[i].disabled = status;
  }
  document.querySelector(".slider").disabled = status;
  document.querySelector(".range").disabled = status;
}

//function for suffling pattern..
function suffle(){
  for(let i=0;i<sz;i++){
    //random height of strip
    let stripHeight = Math.floor(Math.random() * 500)+1;
    stripHeights[i] = stripHeight;
    let strip = document.createElement("div");
    strip.className = "stripNo strip";
    //console.log(strip);
    strip.style.height = stripHeight.toString() + "px";
    strips[i] = strip ;
      document.querySelector(".container").appendChild(strip);
  }
}

  suffle();


//swap function
function swap(a,b){
    let c = stripHeights[a];
    stripHeights[a] = stripHeights[b];
    stripHeights[b] = c;
    strips[a].style.height = stripHeights[a].toString() + "px";
    strips[b].style.height = stripHeights[b].toString() + "px";

}

//adding addEventListener to slider
document.querySelector(".slider").addEventListener("input",function(){
  speed = this.value;
  //console.log(speed);
});

document.querySelector(".range").addEventListener("input",function(){
  sz = this.value;
  document.querySelector(".container").innerHTML = "";
  suffle();
  //console.log(speed);
});
