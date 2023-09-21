const userInputString = prompt (`We offer Vanilla, Strawberry, and Coffee flavored frozen yogurt`, "Vanilla, Strawberry, Coffee");

const stringArray = userInputString.split(",");

const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const flavor = parseInt(str);
    flavors.push(flavor);
  }

console.table(flavors);

function displayName(flavors){
    let name = 0;
    for(i=0; i < flavors.length; i++){
        name = flavors[i];
    }
    return name;
}
console.log(displayName(stringArray.toString()));

const listedItems = {
    Vanilla: stringArray[0],
    Strawberry: stringArray[1],
    Coffee: stringArray[2]
}

console.table(listedItems);
