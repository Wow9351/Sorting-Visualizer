
let animation = [];
let merge_k = 0;

function animateStrip(arr){

  if(arr[0] == 1){
    setTimeout(function(){
      strips[arr[1]].style.backgroundColor = "red";
      strips[arr[2]].style.backgroundColor = "red";
    },merge_k);
    merge_k+=(101-speed);

    setTimeout(function(){
      strips[arr[1]].style.backgroundColor = "#04009A";
      strips[arr[2]].style.backgroundColor = "#04009A";
    },merge_k);
    merge_k+=(101-speed);
  }
  else{
    setTimeout(function(){
      stripHeights[arr[1]] = arr[2];
      strips[arr[1]].style.height = stripHeights[arr[1]].toString() + "px";
    },merge_k);
    merge_k+=(101-speed);
  }
}

function mergeSort(left, right){
  let arr = [];
  if( left >= right){
    arr[0]= stripHeights[left];
    return arr;
  }

  let mid = Math.floor((left+right)/2);

  let l = mergeSort(left,mid);

  let r = mergeSort(mid+1,right);

  let i=0,j=0,k=0;

  while(i <l.length && j < r.length){
      animation.push([1 , left+i , mid+1+j]);
      if(l[i] < r[j]){
          arr[k] = l[i];
          animation.push([2, left+k, arr[k]]);
        i++;
      }
      else{
          arr[k] = r[j];
          animation.push([2, left+k, arr[k]]);
        j++;
      }
      k++;
  }

  while(i <l.length){
      animation.push([1 , left+i , left+i]);
      arr[k] = l[i];
      animation.push([2, left+k, arr[k]]);
      i++;
      k++;
  }

  while(j <r.length){
      animation.push([1, mid+1+j, mid+1+j])
      arr[k] = r[j];
      animation.push([2, left+k, arr[k]]);
      j++;
      k++;
  }

  return arr;
}

function fn(){
  for(let i=0;i<animation.length;i++){
    animateStrip(animation[i]);
  }

  setTimeout(function(){
    disable(false);
  },merge_k);
  merge_k=0;
  animation = [];
}

document.querySelector(".merge").addEventListener("click",function(){
  disable(true);
  let arr = mergeSort(0,sz-1);
  fn();
});
