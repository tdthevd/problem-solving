// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// Worked Example
// ["right", "right", "right", "right", "left", "right"] ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)
// Examples
// ["left", "right", "left", "right"] ➞ 0

// ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

// ["left", "left", "left", "left"] ➞ 1
// Notes
// Return a positive number.
// All tests will only include the words "right" and "left".


function spinAround(turns) {
    // set counters
    let countRight = 0
    let countLeft = 0
    //iterate through the array and get the count of lefts and rights
    for(const i of turns){
      if(i ==='right'){
        countRight++
      }else if(i ==='left'){
        countLeft++
      }else{
        return 0
      }
    }
    // find out how many total spins in one direction
    if(countLeft>countRight){
      return Math.floor((countLeft-countRight)/4)
    }else if(countRight>countLeft){
      return Math.floor((countRight-countLeft)/4)
    }else{
      return 0
    }
  }