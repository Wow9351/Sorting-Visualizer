//Bubble Sort
function bubble(){
  let k=0;
  for(let i=sz-1;i>=0;i--){
    setTimeout(function(){
      let mx = 0;
      let pos;
      let k2 = 0;
      for(let j=0;j<=i;j++){

        setTimeout(function(){
          strips[j].style.backgroundColor = "red";
        },k2);

        setTimeout(function(){
          strips[j].style.backgroundColor = "#04009A";

          if(stripHeights[j] > mx){
            mx = stripHeights[j];
            pos = j;
          }
        },k2 + (21-speed)*10 );
        k2+=(21-speed)*10;
      }

      setTimeout(function(){
        swap(i,pos);
      },k2)

    },k);
    k+=(21-speed)*10*i + (21-speed)*10;
  }
}

//adding addEventListener to bubble sort button
document.querySelector(".bubble").addEventListener("click",function(){
  console.log("bubble is clicked",this);
  disable();
  bubble();
});
