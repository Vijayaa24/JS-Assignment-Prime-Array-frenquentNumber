//find most frequent element in array

function mostFrequentItem(arr) {
    arr.sort();
    if (arr.length == 0)
        return -1;
    if (arr.length == 1)
        return arr[0];
    let flag = 1, mostFrequentItem , max = 0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] !== arr[i - 1]) {
            flag = 1;
        }
        else {
            flag++;
        }
        if (flag > max) {
            max = flag;
            mostFrequentItem = arr[i];
        }
    }
    return mostFrequentItem;
}

let arr = [9,8,7,9,5,4,9,4,2,2,1,3,4,5,9,6,9,2,4,9,0,8,4,0,9];
console.log(mostFrequentItem(arr));