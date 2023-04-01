// https://edabit.com/challenge/6R6gReGTGwzpwuffD
function sevenInBoom(array) {
  count = 0;
  for (const iterator of array) {
    if (iterator == 7) {
      console.log(`Boom!`);
      return;
    }
  }
  console.log(`there is no 7 in the array`);
}

sevenInBoom([1, 2, 3, 4, 5, 6]);
sevenInBoom([7, 2, 3, 4, 5, 6]);
