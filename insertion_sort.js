
/* This is all for Insertion Sort */
document.querySelector(".insertion").addEventListener("click",function(){
  console.log("insertion is clicked");
  disable();
  insertionSort();
});

function insertionSort(){
  let k=0;
  for(let i=1;i<sz;i++){
    let k2=0;
    setTimeout(function(){
      //strips[i].style.backgroundColor = "Yellow";
      for(let j=i-1;j>=0;j--){
        setTimeout(function(){
          strips[j].style.backgroundColor = "red";
        },k2);

        setTimeout(function(){
          strips[j].style.backgroundColor = "#04009A";
          if(stripHeights[j] > stripHeights[j+1] )
            swap(j,j+1);
        },k2+ (21-speed)*10 );
        k2+=(21-speed)*10;
      }
    },k);
    k+=(21-speed)*10*i;
  }

}
