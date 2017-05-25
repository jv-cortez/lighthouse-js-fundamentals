function whichSchool(age) {
  // Your code in here ...
  if (age < 13) {
  return("You should go to elementary school.");
  } else if (age >= 13 && age <= 18) {
    return("You should go to high school.");
  } else (age > 18); {
    return("You should go to lighthouse labs!");
  }

}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));