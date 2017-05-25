function ageCalculator(name, yearofBirth, currentYear) {
  var age = (currentYear - yearofBirth);
  return (name + " is " + age + " years old.");
}

console.log(ageCalculator("JV", 1992, 2017));