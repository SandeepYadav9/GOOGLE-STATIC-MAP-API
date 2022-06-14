//Bubble Sorts

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
var arr = [7, 8, 3, 1, 2];
//bubbleSort(arr);
console.log(bubbleSort(arr));


//Selection Sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smalest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smalest] > arr[j]) {
        smalest = j;
      }
    }
    let temp = arr[smalest];
    arr[smalest] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
let arr=[7, 8, 3, 1, 2]
console.log(selectionSort(arr));



// inserson Sort
/*  
  [7,8,5,3,2,1]
   s/u

  */

function insersonSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;
    while (j >= 0 && currentElement < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}
let arr = [7, 8, 3, 1, 2];
console.log(insersonSort(arr));

