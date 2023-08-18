// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

var AmIAfraid = function(day, num){

if((day === 'Monday' && num === 12)||(day === 'Tuesday' && num > 95)||(day === 'Wednesday' && num === 34)||(day === 'Thursday' && num === 0)
    ||(day === 'Friday' && (num%2===0))||(day === 'Saturday' && num === 56)||((day ==='Sunday'&num===666)||(day ==='Sunday'&num===-666))){
    return true
  }else {return false}

}
var AmIAfraid = function (day, number) {
  switch (day.toLowerCase()) {
    case "monday":
      return number === 12;
    case "tuesday":
      return number > 95;
    case "wednesday":
      return number === 34;
    case "thursday":
      return number === 0;
    case "friday":
      return number % 2 === 0;
    case "saturday":
      return number === 56;
    case "sunday":
      return number === 666 || number === -666;
    default:
      return false; // Invalid day of the week
  }
};
var AmIAfraid = function(day, num){
  switch (day.slice(0, 2)) {
    case 'Mo':
      return num === 12;
    case 'Tu':
      return num > 95;
    case 'We':
      return num === 34;
    case 'Th':
      return num === 0;
    case 'Fr':
      return !(num % 2);
    case 'Sa':
      return num === 56;
    case 'Su':
      return Math.abs(num) === 666;  
  }
}
const AmIAfraid = (day, num) => {
  return {
    Monday   : d => d == 12,
    Tuesday  : d => d > 95,
    Wednesday: d => d == 34,
    Thursday : d => !d,
    Friday   : d => !(d % 2),
    Saturday : d => d == 56,
    Sunday   : d => Math.abs(d) == 666
  }[day](num);
}