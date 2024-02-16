let form = document.getElementById("input");
let number = document.getElementById("text-field");
let addBtn = document.getElementById("add-btn");
let minusBtn = document.getElementById("minus-btn");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //
  if (number.value != Number(number.value)) {
    // console.log("not a number");
    alert("Enter a number");
    number.value = "";

    // number.value = "not a number";
  } else {
    number.value = Number(number.value) + 1;
    // console.log("your number + 1 :", Number(number.value) + 1);
  }
});

minusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (number.value != Number(number.value)) {
    // console.log("not a number");
    alert("Enter a number");
    number.value = "";
  } else {
    number.value = Number(number.value) - 1;
    // console.log("your number + 1 :", Number(number.value) + 1);
  }
});
