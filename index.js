
let stripHeights = [];
let strips = [];
let sz = 100;
let speed = document.querySelector(".slider").value;
let check = false;



/* Disabling all buttons*/
function disable(){
  let btns = document.querySelectorAll(".btn");
  for(let i=0;i<btns.length;i++){
    btns[i].disabled = "disabled";
  }
  document.querySelector(".slider").disabled = "disabled";
}

//function for suffling pattern..
function suffle(){
  for(let i=0;i<sz;i++){
    //random height of strip
    let stripHeight = Math.floor(Math.random() * 500)+1;
    stripHeights[i] = stripHeight;
    let strip = document.createElement("div");
    strip.className = "stripNo strip";
    console.log(strip);
    strip.style.height = stripHeight.toString() + "px";
    strips[i] = strip ;
    if(!check)
      document.querySelector(".container").appendChild(strip);
  }
}

suffle();
check=true;

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
