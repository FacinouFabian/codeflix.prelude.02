function intersection(...values){
    for (ent of values){
        // set a first tab in $first, and the others tabs
        [first, ...rest] = [...values]
        // search elements in first
        for (elt of first){
            if(includes(elt)){

            }
        }
        // if ...rest includes elements of first

        // return the first tab
        return first
    }
}

console.log(intersection([1,2,3], [1,2,3,4], [1,2,3,4,5]))