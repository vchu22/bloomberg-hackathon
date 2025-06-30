
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const calorieDisplay = document.getElementById("calorieAmount");

// Go back to activity selection
backBtn.addEventListener("click", () => {
  window.location.href = "page3.html";
});

nextBtn.addEventListener("click", () => {
  window.location.href = "page5.html";
});

// Get user info
const gender = localStorage.getItem("gender");
const age = parseInt(localStorage.getItem("age"));
const activity = localStorage.getItem("activity_level");

// Define calorie ranges
const calorieData = {
  "5-8": {
    "female": { min: 1200, max: 1800 },
    "male": { min: 1200, max: 2000 }
  },
  "9-13": {
    "female": { min: 1400, max: 2200 },
    "male": { min: 1600, max: 2600 }
  },
  "14-18": {
    "female": { min: 1800, max: 2400 },
    "male": { min: 2000, max: 3200 }
  }
};

// Helper to find range key
function getAgeRange(age) {
  if (age >= 5 && age <= 8) return "5-8";
  if (age >= 9 && age <= 13) return "9-13";
  if (age >= 14 && age <= 18) return "14-18";
  return null;
}

// Calculate calorie goal based on gender, age, and activity
const ageRange = getAgeRange(age);
if (ageRange && gender && calorieData[ageRange] && calorieData[ageRange][gender]) {
  const { min, max } = calorieData[ageRange][gender];
  let goal = min;

  if (activity === "moderate") {
    goal = Math.round((min + max) / 2);
  } else if (activity === "more") {
    goal = max;
  }

  calorieDisplay.textContent = goal;
  localStorage.setItem("calorie_goal", goal);
} else {
  calorieDisplay.textContent = "----";
}
