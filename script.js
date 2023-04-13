var weight, height, results, bmi;

function calculate() {
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  results = document.getElementById("results");

  height /= 100;
  height *= height;
  bmi = weight / height;
  bmi = bmi.toFixed(1);

  if (bmi <= 18.4) {
    results.innerHTML = "Your BMI is " + " " + "<b>" + bmi + "</b>" + " which means You are <b>Underweight</b>";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    results.innerHTML = "Your BMI is " + " " + "<b>" + bmi + "</b>" + " which means You are <b>Normal</b>";
  } else if (bmi >= 25 && bmi <= 29.9) {
    results.innerHTML = "Your BMI is " + " " + "<b>" + bmi + "</b>" + " which means You are <b>Overweight</b>";
  } else if (bmi >= 30) {
    results.innerHTML = "Your BMI is " + " " + "<b>" + bmi + "</b>" + " which means You are <b>Obesity</b>";
  }
}
