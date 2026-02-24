function mapCopy(arr, callback) {
    let dummyArr = []

    for (let i = 0; i < arr.length; i++) {
        dummyArr.push(callback(arr[i], i, arr));
    }
    return (dummyArr)
}


let arr = [1, 2, 3, 4, 5]
let result = mapCopy(arr, (num) => {
    return (num * num)
})

console.log(result)