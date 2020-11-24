
function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(firstSubarray, secondSubArray){
  let sorted = []
  while(firstSubarray.length != 0 && secondSubArray.length != 0){
    if(firstSubarray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}
function mergeSort(array){
    let midpoint = array.length / 2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted;


    if(firstHalf < 2){
        return array 
        //if it is less than 2 b/c then it is already sorted
    } else {
         sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
}
