// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
	let arr = string.split('')
  let correctedString = arr.map(numToLetter =>{
    return numToLetter==='5' ? 'S':
    numToLetter==='0' ? 'O':
    numToLetter==='1' ? 'I': numToLetter
  })
  
  return correctedString.join('')
}

// not mine but food for thought
// function correct(string) {
// 	return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
// }