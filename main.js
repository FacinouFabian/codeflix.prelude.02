require('./ex01')
require('./ex02')
require('./ex03')
require('./ex04')
require('./ex15')
require('./ex16')
require('./ex17')
require('./ex21')

// console.log(first([20,12,13]))

// console.log(initial([1,2,'est',3]))

// console.log(last([1,2,'test',4]))
// console.log(last([1,2,'test',4], 2))

// console.log(rest([0,1,2,3]))

// console.log(invert({one: 1, two: 2, three: 3}))

// console.log(omit({one: 1, two: 2, three: 3}))

console.log(map([1,2,3], function(num){ return num * 3; }))
console.log(map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }))