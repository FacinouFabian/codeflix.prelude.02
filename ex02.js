module.exports = function initial(array, n=1){
    if (n == 1){
        return array.splice(0, array.length - n)
    }
}