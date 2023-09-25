// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(smash) {
    if(smash.length === 0){
       return ''
       }else if(smash.length===1){
         return smash[0]
       }else{
         return smash.join(' ')
       }
       
      }

// const smash = (words) => words.join(' ');
    