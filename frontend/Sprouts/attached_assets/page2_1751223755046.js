const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

backBtn.addEventListener("click", () => {
  window.location.href = "page1.html";
});

nextBtn.addEventListener("click", () => {
  const feet = parseInt(document.getElementById("feet").value.trim());
  const inches = parseInt(document.getElementById("inches").value.trim());
  const weight = parseInt(document.getElementById("weight").value.trim());

  if (isNaN(feet) || isNaN(inches) || isNaN(weight)) {
    alert("Please enter your full height and weight.");
    return;
  }

  localStorage.setItem("height_feet", feet);
  localStorage.setItem("height_inches", inches);
  localStorage.setItem("weight", weight);

  alert("Height and weight saved! Ready to send to backend.");
});