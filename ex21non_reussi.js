module.exports = function map(list, iteratecB){
    let arr = []
    for (let item of Object.defineProperties(list)){
        const [key, value] = item
        const res = iteratecB(value)
        arr.push(res)
    }
    return arr
}
