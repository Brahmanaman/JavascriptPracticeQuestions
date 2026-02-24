let user = {
    name: "Aman",
    age: 25,
    city: "Rudrapur"
};


function cloneObject(obj, key, value) {
    let newObj = {};
    for (let prop in obj) {
        newObj[prop] = obj[prop]
    }

    newObj[key] = value;

    return newObj;
}

let newObj = cloneObject(user, "city", "Delhi");

console.log(newObj)
