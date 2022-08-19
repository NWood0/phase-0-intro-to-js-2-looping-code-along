// Code your solutions in this file

function writeCards(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
    }
    return newArr;
}

function countDown(y) {
    for (let i = y; i >= 0; i--) {
        console.log(i)
}

}