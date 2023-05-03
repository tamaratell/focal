const args = process.argv.slice(2);

const sum = (args) => {
  let result = 0;
  args.forEach(element => {
    result += Number(element);
  });
  console.log(result);
};

sum(args);