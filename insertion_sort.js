
/* This is all for Insertion Sort */
document.querySelector(".insertion").addEventListener("click",function(){
  console.log("insertion is clicked");
  disable(true);
  insertionSort();
});

function insertionSort(){
  let k=0;
  for(let i=1;i<sz;i++){
    //let k2=0;
    k+=(101-speed)*1;
    setTimeout(function(){
      //strips[i].style.backgroundColor = "Yellow";
      let k2=0;
      for(let j=i-1;j>=0;j--){
        setTimeout(function(){
          strips[j].style.backgroundColor = "red";
        },k2);

        setTimeout(function(){
          if(stripHeights[j] > stripHeights[j+1] )
            swap(j,j+1);

          strips[j].style.backgroundColor = "#04009A";

        },k2+ (101-speed)*1 );
        k2+=(101-speed)*1;
      }

    },k);

    k+=(101-speed)*i + (101-speed)*3 ;
  }

  setTimeout(function(){
    disable(false);
  },k);

}
