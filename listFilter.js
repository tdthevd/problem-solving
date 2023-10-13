// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    // Using the filter method on the input list 'l'
    // The filter method creates a new array with all elements that pass a test (specified by the provided function)
    return l.filter(function(v) {
      // This function checks if the type of 'v' is 'number'
      return typeof v == 'number'
    });
  }
  

function filter_list(l) {
    let numArr = []
    for(const i of l){
      if(i === Number(i)){
         numArr.push(i)
         }
    }
    return numArr
  }