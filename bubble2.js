
//bubble short actual algorithm
function bubble2(){
  let k=0;
  for(let i=sz-1;i>=0;i--){
    setTimeout(function(){
      let k2=0;
      for(let j=0;j<i;j++){

        setTimeout(function(){
          strips[j].style.backgroundColor = "red";
        },k2);
        k2+=(101-speed);
        setTimeout(function(){
          strips[j].style.backgroundColor = "#04009A";
          if(stripHeights[j] > stripHeights[j+1] ){
            swap(j,j+1);
          }
        },k2);
        k2+=(101-speed);
      }
    },k);
    k+=(101-speed)*2*(i+1);
  }

  setTimeout(disable,k,false);
}






//adding addEventListener to bubble sort button
document.querySelector(".bubble").addEventListener("click",function(){
  //console.log("bubble is clicked",this);
  disable(true);
  bubble2();

});
