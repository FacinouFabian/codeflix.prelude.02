function keys(obj){

    return Object.keys(obj)
}

console.log(keys({one: 1, two: 2, three: 3}))

/*
function keys(obj){
    let arr = []
    for (const [key, value] of Object.entries(obj)){
        arr.push(key)
    }
    return arr
}
*/