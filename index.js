"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

console.log("Exercise 1: List of Character Names\n");

users.forEach(function(characters){
  console.log(characters.name);
});

// Create a new constant that creates a list of names in HTML under the ID "names-list"
const nameList = document.getElementById("names-list");
for (let i = 0; i < users.length; i++) {
  const listName = document.createElement("li");
  listName.textContent = users[i].name;
  nameList.appendChild(listName);
}

// Exercise 2: Filter list by Age Less than 40

function youngerThan40(){
  const youngCharList = document.getElementById("young-characters-list");
  for (let i = 0; i < users.length; i++) {
    if (users[i].age < 40) {
      const listName = document.createElement("li");
      listName.textContent = users[i].name;
      youngCharList.appendChild(listName);
      //console.log("debug: less than 40!")
    }
  }
}
youngerThan40();

// Exercise 3: Reusable Function to Render character names
function renderCharacterNames(array, elementId) {
  const listElement = document.getElementById(elementId);
  // Goes through the array and adds each name to the list
  for (let i = 0; i < array.length; i++) {
    if (array[i].name){
      const listName = document.createElement("li");
      listName.textContent = array[i].name;
      listElement.appendChild(listName);
      //console.log("debug: Name added in exercise 3!")
    }
  }
}
renderCharacterNames(users, "function-list");

// Exercise 4: Function with Age Filter Parameter 
function youngerThanAge(ageThreshold){
  const listElement = document.getElementById("age-filter-list");
  for (let i = 0; i < users.length; i++) {
    if (users[i].age < ageThreshold) {
      const listName = document.createElement("li");
      listName.textContent = users[i].name;
      listElement.appendChild(listName);
      console.log("debug:" + users[i].name + " is under "+ ageThreshold+ " threshold for exercise 4!")
    }
  }
}
youngerThanAge(75);
// Discussed with instructor, age should be less than 75.

// Exercise 5: Error Handling for Missing Name
const BrokenUsers = [
      { id: 1, name: "Luke Skywalker", age: 23 },
      { id: 2, name: "Darth Vader", age: 45 },
      { id: 3, age: 23 }, // Missing Princess Leia name. 
      { id: 4, name: "Obi-Wan Kenobi", age: 57 },
      { id: 5, name: "Yoda", age: 900 }
    ];

function brokenArray(){

    const errors = document.getElementById("error-messages");
    const nameList = document.getElementById("error-handling-list");

    for (let i = 0; i < BrokenUsers.length; i++) {
      if (!BrokenUsers[i].name) {
        // Errir message in list
        const listName = document.createElement("li");
        listName.textContent = "User id " + BrokenUsers[i].id + " is missing a name";
        nameList.appendChild(listName);
        // Error div message
        const msg = document.createElement("div");
        // Creates an error message in the console,.
        const errorMessage = "Error: Character at index " + BrokenUsers[i].id + " is missing a 'name' property.";
        console.error(errorMessage);
        msg.textContent = errorMessage;
        errors.appendChild(msg);  
      }
    }
  }
brokenArray();