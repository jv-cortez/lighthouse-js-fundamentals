//range measures the min and max
//mutiplies changes the factor of divisibility
//words replace, well, the words!



function loopyLighthouse(range, multiplies, words) {
  for (var i = range[0]; i >= range[0] && i <= range[1]; i++){

      if (i % multiplies[0] === 0 && i % multiplies[1] === 0) {
        console.log(words[0] + words[1]);
      }
      else if (i % multiplies[0] === 0) {
        console.log(words[0]);
      }
      else if (i % multiplies[1] === 0) {
        console.log(words[1]);
      }
      else {
        console.log(i);
      }

    }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);