// data validation inside the main function - code will execute after checking if data is VALID using try...catch

function houseOfCats(legs) {
  try {
    if (isNaN(legs)) throw "not a number";
    if (legs >= 50) throw "too high";
    if (legs < 0) throw "too low";
    if (legs % 2 !== 0) throw "odd number";
  } catch (err) {
    console.log(`Input is ${err}`);
  }
  const maxPeople = legs / 2;
  let result = [];
  for (let i = 0; i <= maxPeople; i++) {
    if ((legs - i * 2) % 4 === 0) {
      result.push(i);
    }
  }
  return result;
}
