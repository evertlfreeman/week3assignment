function sortArray(arr) {
    let copiedArray = arr.slice();
    let sortedArray = copiedArray.sort();
    return sortedArray;
}

let letters = ['a', 'c', 'd', 'b', 'e'];
let sortedLetters = sortArray(letters);

console.log("Sorted Array: ", sortedLetters);
console.log("Original Array: ", letters);