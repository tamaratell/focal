//Modify the callback function in the previous example so that it accepts a single argument index and logs it. The problem should therefore output something like "Found Waldo at index 2!".

const findWaldo = function(names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  });
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], (index) => { console.log(`Found Waldo at index ${index}!`); });

