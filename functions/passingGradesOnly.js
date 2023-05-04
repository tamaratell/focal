const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGradesOnly = (grades, cb) => {
  const pass = cb(grades);
  return pass;
};

console.log(passingGradesOnly(grades, (grades) => { return grades.filter(grade => grade > 70); }));

