// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.


function toDayOfYear(arr) {
    // Define an array representing the number of days in each month
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Define a helper function to check if a year is a leap year
    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Initialize a variable to keep track of the total days
    let days = 0;

    // Iterate through the months (0-based index) up to the given month
    for (let i = 0; i < arr[1] - 1; i++) {
        days += daysInMonth[i]; // Add the days in each month to the total
    }

    // If the month is after February and it's a leap year, add an extra day
    if (arr[1] > 2 && isLeapYear(arr[2])) {
        days += 1;
    }

    // Add the day of the month to the total days
    return days + arr[0];
}
