function rotateArray(arr, k) {
  for (let i = 0; i < k; i++){
    arr = rotator(arr)
  }

  return arr 
}

function rotator(arr){
  let arrLen = arr.length
  let last = arr[arrLen - 1]
  //let indxLast = arr.indexOf(last)

  if (arrLen == 0){
    return arr
  }
  arr.unshift(last)
  arr.pop()

  return arr

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
