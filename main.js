const first = require('./ex01')
const initial = require('./ex02')
const last = require('./ex03')
const rest = require('./ex04')
const flatten = require('./ex05')
const without = require('./ex06')
const intersection = require('./ex07')
const intersection = require('./ex08')
const difference = require('./ex09')
const indexOf = require('./ex10')
const lastIndexOf = require('./ex11')
const keys = require('./ex12')
const values = require('./ex13')
const pairs = require('./ex14')
const invert require('./ex15')
const pick = require('./ex16')
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
// console.log(difference([1,2,3], [1,2]))
