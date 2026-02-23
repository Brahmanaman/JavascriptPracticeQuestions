function findGreaterThanAvg(numArr) {
    const sum = numArr.reduce((accu, num) => {
        return accu + num
    }, 0);
    const avg = sum / numArr.length;
    return numArr.filter((num) => num > avg)
}

let arr = [1, 2, 3, 4, 5]
console.log(findGreaterThanAvg(arr))