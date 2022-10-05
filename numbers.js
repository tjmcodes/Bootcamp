function dogYearsCalc() {
  age = prompt("Enter the age of your dog in years: ");
  dogYears = age * 7
  alert("Your dog is " + dogYears + " old, in human years.")
}

function dogYearsCalc2() {
  age = prompt("Enter the age of your dog in years: ");
  dogYears = ((age - 2) * 4) + 21; 
  alert("Your dog is " + dogYears + " old, in human years.")
}

function increment() {
  var x = 3;
  var y = x++;
  y += 1;
}
console.log(increment());
