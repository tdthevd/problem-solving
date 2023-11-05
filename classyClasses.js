// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// Define a class named 'Person'
class Person {
    // Constructor method is called when a new instance of 'Person' is created
    constructor(name, age) {
      // Assign the 'name' parameter to the 'name' property of the instance
      this.name = name;
      // Assign the 'age' parameter to the 'age' property of the instance
      this.age = age;
    }
    
    // Define a getter named 'info'
    get info() {
      // Return a formatted string containing the name and age of the person
      return `${this.name}'s age is ${this.age}`;
    }
  }

// We're using a getter named info because it provides a cleaner and more intuitive way to access information about a Person object.

// With a getter, we can access info as if it were a property of the object, which improves readability and makes the code more natural to work with.

// If we used a regular method (e.g., getInfo()), we would need to call it like a function (john.getInfo()), which may not be as intuitive as accessing a property.



