// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

function minValue(values){
    let dejaVu = []
    for(const i of values){
      if(!dejaVu.includes(i)){
        dejaVu.push(i)
      }
    }
    let sorted = dejaVu.sort((a,b)=>a-b)
    return Number(sorted.join(''))
  }