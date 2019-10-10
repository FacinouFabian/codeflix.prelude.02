function pick(obj, ...options) {
    const [firstOpts] = options
  
    const newObj = {}
    // if firstopts is a function
    if (typeof firstOpts === 'function') {
        // call this function
        const callback = firstOpts
  
      // with callback
      for (const item of Object.entries(obj)) {
          // get the keys and values of item
        const [key, value] = item
        // if the value of the key is an integer
        if (callback(value, key) === true) {
            // set the key as a key for newObj
          newObj[key] = obj[key]
        }
      }
    } else {
      // with keys
      for (const key of options) {
          // if the key exists
        if (obj[key] !== undefined) {
            // set the key as a key for newObj
          newObj[key] = obj[key]
        }
      }
    }
    return newObj
  }
  
  // object
  const user = {
    firstname: 'Majdi',
    lastname: 'Toumi',
    age: 18
  }
  
  console.log(pick(user, 'firstname', 'age'))
  // call pick and callback function
  console.log(
    pick(user, function(value, key) {
      return Number.isInteger(value)
    })
  )
  
  const arr = [1, 2, 3, 4, 5, 6]
  
  // draw the items of the tab
  arr.forEach(function (item) {
    console.log(item)
  })