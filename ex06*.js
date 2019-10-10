function without(array, ...values){
    let array1 = []
    for (const v of array1){
        if (values.includes(v) == false){
            array1.push(v)
        }
    }
}

console.log(without([1,2,3,4,2], 2))