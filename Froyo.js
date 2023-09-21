//Asks user what they would like
const userInput = prompt("What flavor froyo would you like?","Vanilla, Strawberry, Coffee");
const flavors = userInput.split(",");

// Create an object to store the counts of each flavor
const flavorCount = {};

// Loop through the flavors array and count each flavor
for (const flavor of flavors) {
  if (flavorCount[flavor]) {
    // If the flavor already exists in the object, increment the count
    flavorCount[flavor]++;
  } else {
    // If the flavor doesn't exist in the object, initialize the count to 1
    flavorCount[flavor] = 1;
  }
}

// Display the flavor counts in the browser console
console.table(flavorCount);