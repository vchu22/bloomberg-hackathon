
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const activityButtons = document.querySelectorAll(".activity-button");

let selectedActivity = null;

activityButtons.forEach(button => {
  button.addEventListener("click", () => {
    activityButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedActivity = button.getAttribute("data-activity");
  });
});

backBtn.addEventListener("click", () => {
  window.location.href = "page2.html";
});

nextBtn.addEventListener("click", () => {
  if (!selectedActivity) {
    alert("Please select your activity level before continuing.");
    return;
  }

  localStorage.setItem("activity_level", selectedActivity);
  window.location.href = "page4.html";
});
