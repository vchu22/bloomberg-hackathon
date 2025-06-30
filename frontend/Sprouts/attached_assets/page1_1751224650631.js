const genderButtons = document.querySelectorAll(".gender-button");
const nextButton = document.getElementById("nextBtn");
const ageInput = document.querySelector(".age-input");

let selectedGender = null;

genderButtons.forEach(button => {
  button.addEventListener("click", () => {
    genderButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedGender = button.getAttribute("data-gender");
  });
});

nextButton.addEventListener("click", () => {
  const enteredAge = parseInt(ageInput.value.trim());

  if (!selectedGender) {
    alert("Please select a gender before continuing.");
    return;
  }

  if (isNaN(enteredAge)) {
    alert("Please enter your age as a number.");
    return;
  }

  if (
    (enteredAge >= 5 && enteredAge <= 8) ||
    (enteredAge >= 9 && enteredAge <= 13) ||
    (enteredAge >= 14 && enteredAge <= 18)
  ) {
    localStorage.setItem("gender", selectedGender);
    localStorage.setItem("age", enteredAge);
    window.location.href = "page2.html";
  } else {
    alert("Please enter an age between 5 and 18.");
  }
});