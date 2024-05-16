document.getElementById("btns").addEventListener("click", run);
let inp1 = document.getElementById("inpOne");
let inp2 = document.getElementById("inpTwo");
let inp3 = document.getElementById("inpThree");
let inp4 = document.getElementById("inpFour");
let out = document.getElementById("output");

function run() {
  score = 0;
  if (inp1.value.toLowerCase() == "lazerte") {
    inp1.style.border = "2px solid green";
    score = score + 1;
  }

  if (inp2.value.toLowerCase() == "omar") {
    inp2.style.border = "2px solid green";
    score = score + 1;
  }
  if (inp3.value.toLowerCase() == "mr.b") {
    inp3.style.border = "2px solid green";
    score = score + 1;
  }
  if (
    inp4.value.toLowerCase() == "summer" ||
    inp4.value.toLowerCase() == "spring"
  ) {
    inp4.style.border = "2px solid green";
    score = score + 1;
  }
  console.log(score);
  if (score == 0) {
    out.innerHTML = " 0%, did you even try?";
  } else if (score == 1) {
    out.innerHTML = " 25%, better luck next time!";
  } else if (score == 2) {
    out.innerHTML = " 50%, Thats decent!";
  } else if (score == 3) {
    out.innerHTML = " 75%, good job !";
  } else if (score == 4) {
    out.innerHTML = " 100%, EXCELLENT!!!!!!!!!";
  }
}
