// You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

// e.g. "The score is four nil" should return [4,0]

// Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

// "new score: two three"
  
// "two two"
  
// "Arsenal just conceded another goal, two nil"

function scoreboard(string) {
    let strArr = []
    let arr = string.split(' ')
    for(const i of arr){
      if(i === 'nine'){
        strArr.push(9)
      }else if(i==='eight'){
        strArr.push(8)
      }else if(i==='seven'){
        strArr.push(7)
      }else if(i==='six'){
        strArr.push(6)
      }else if(i==='five'){
        strArr.push(5)
      }else if(i==='four'){
        strArr.push(4)
      }else if(i==='three'){
        strArr.push(3)
      }else if(i==='two'){
        strArr.push(2)
      }else if(i==='one'){
        strArr.push(1)
      }else if(i==='nil'){
        strArr.push(0)
      }
    }
    return strArr
}