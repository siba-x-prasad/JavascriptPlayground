// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

function howMuchIsTrue(array) {
  count = 0;
  array.forEach((element) => {
    if (element) count++;
  });
  console.log(`Total True in ${array} is ${count}`);
}

howMuchIsTrue([true, false, true, false]);
