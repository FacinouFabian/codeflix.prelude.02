module.exports = function difference(array, others){
  let tab = []
  for (elt of array){
    if (!others.includes(elt)){
      tab.push(elt)
    }
  }
  return tab
}
