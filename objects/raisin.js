//INSTRUCTIONS
//Write a function that identifies whether a supposedly chocolate chip cookie also has raisins in it. 
//Your function, raisinAlarm, will receive a cookie which is an array of chocolate chips ("🍫"). 
//Your function must search through the array to see whether or not a raisin ("🍇") is present.
//If your function detects a raisin, it should return "Raisin alert!". If no raisin is present, your function should return "All good!".

const raisinAlarm = (cookie) => {

  for (const element of cookie) {
    if (element === "🍇") {
      return "Raisin Alert!";
    }

  }

  return "All good!";
};

//TEST
// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"])); // => "Raisin alert"
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"])); // => "Raisin alert"
// console.log(raisinAlarm(["🍫", "🍫", "🍫"])); // => "All good!"


//STRETCH
const raisinAlarmArray = (array) => {

  const alert = [];

  for (const subArray of array) {
    console.log(subArray);
    alert.push(raisinAlarm(subArray));
  }

  return alert;
};

//TEST
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

//EXPECTED ["Raisin alert!", "Raisin alert!", "All good!"]