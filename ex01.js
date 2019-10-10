module.exports = function first(array, n=1){
    if (n == 1){
        return array[0]
    }else{
        return array.splice(0, n)
    }
}