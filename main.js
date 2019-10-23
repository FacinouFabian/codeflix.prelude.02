require('./ex01')
require('./ex02')
require('./ex03')
require('./ex04')
const without = require('./ex06')
const intersection = require('./ex08')
const difference = require('./ex09')
const indexOf = require('./ex10')
const lastIndexOf = require('./ex11')
require('./ex15')
const pick = require('./ex16')
require('./ex17')
const map = require('./ex21')

// console.log(first([20,12,13]))

// console.log(initial([1,2,'est',3]))

// console.log(last([1,2,'test',4]))
// console.log(last([1,2,'test',4], 2))

// console.log(rest([0,1,2,3]))

// console.log(invert({one: 1, two: 2, three: 3}))

// console.log(omit({one: 1, two: 2, three: 3}))
// console.log(flatten([1,2,[3,4]]))
// console.log(intersection([1,2,3], [1,2,3,4], [1,2,3,4,5]))
// console.log(keys({one: 1, two: 2, three: 3}))
// console.log(values({one: 1, two: 2, three: 3}))
// console.log(pairs({one: 1, two: 2, three: 3}))
// console.log(indexOf([1,2,3], 2))
// console.log(lastIndexOf([1,2,3,2], 2))
//console.log(without([1,2,3,4,3], 3))
// object
const user = {
  firstname: 'Majdi',
  lastname: 'Toumi',
  age: 18
}
// console.log(pick(user, 'firstname', 'age'))

// console.log(map([1,2,3], function(num){ return num * 3; }))
// console.log(map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }))
// console.log(difference([1,2,3], [1,2]))
