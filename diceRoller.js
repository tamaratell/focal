//Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

const rolls = process.argv.slice(2);

const diceRoller = (rolls) => {
  let dice = [];
  for (let roll = 0; roll < rolls; roll++) {
    const min = 1;
    const max = 6;
    dice.push(Math.floor(Math.random() * (max - min + 1)) + min);
    dice.join(', ');
  }
  return `Rolled ${rolls} dice: ${dice}`;
};

console.log(diceRoller(rolls));