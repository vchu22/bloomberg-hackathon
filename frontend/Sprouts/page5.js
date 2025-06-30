// 🚀 BACKEND TEAM START HERE: Search for "⭐ API INTEGRATION POINT" (13 locations total)
// 🔥 PRIORITY: Update API_CONFIG.BASE_URL on line ~100, then test food categories first!

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const calorieDisplay = document.getElementById("calorieDisplay");

// Retrieve user data from localStorage
const gender = localStorage.getItem("gender");
const age = parseInt(localStorage.getItem("age"));
const activity = localStorage.getItem("activity_level");
const calorieGoal = localStorage.getItem("calorie_goal");

// Nutrition data based on age, gender, and activity level
const nutritionData = {
  "5-8": {
    "female": {
      "calories": { "min": 1200, "max": 1800 },
      "protein": { "min": 3, "max": 5 },
      "fruits": { "min": 1, "max": 1.5 },
      "vegetables": { "min": 1.5, "max": 2.5 },
      "grains": { "min": 4, "max": 6 },
      "dairy": { "min": 2.5, "max": 2.5 }
    },
    "male": {
      "calories": { "min": 1200, "max": 2000 },
      "protein": { "min": 3, "max": 5.5 },
      "fruits": { "min": 1, "max": 2 },
      "vegetables": { "min": 1.5, "max": 2.5 },
      "grains": { "min": 4, "max": 6 },
      "dairy": { "min": 2.5, "max": 2.5 }
    }
  },
  "9-13": {
    "female": {
      "calories": { "min": 1400, "max": 2200 },
      "protein": { "min": 4, "max": 6 },
      "fruits": { "min": 1.5, "max": 2 },
      "vegetables": { "min": 2, "max": 3 },
      "grains": { "min": 5, "max": 7 },
      "dairy": { "min": 3, "max": 3 }
    },
    "male": {
      "calories": { "min": 1600, "max": 2600 },
      "protein": { "min": 4, "max": 6.5 },
      "fruits": { "min": 1.5, "max": 2 },
      "vegetables": { "min": 2, "max": 3.5 },
      "grains": { "min": 5, "max": 9 },
      "dairy": { "min": 3, "max": 3 }
    }
  },
  "14-18": {

// ⭐⭐⭐ COMPREHENSIVE API INTEGRATION GUIDE FOR BACKEND TEAM ⭐⭐⭐
// 🔥 BACKEND TEAM: 
// 1. Replace all '/api/...' URLs with your Python Flask/FastAPI endpoints
// 2. Update API_CONFIG object with your base URL and authentication
// 3. Test each endpoint with the provided request/response formats
// 4. Uncomment the API calls in the functions where marked

/*
// ⭐ API INTEGRATION POINT #5: USER AUTHENTICATION & PROFILE
async function authenticateUser(credentials) {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const result = await response.json();
    localStorage.setItem('auth_token', result.token);
    localStorage.setItem('user_id', result.userId);
    return result;
  } catch (error) {
    console.error('Authentication error:', error);
  }
}

// ⭐ API INTEGRATION POINT #6: USER NUTRITION GOALS
async function saveUserNutritionGoals(goals) {
  try {
    const response = await fetch('/api/users/nutrition-goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify({
        userId: localStorage.getItem('user_id'),
        calorieGoal: goals.calories,
        proteinGoal: goals.protein,
        // ... other nutrition goals
      })
    });
    return await response.json();
  } catch (error) {
    console.error('Error saving nutrition goals:', error);
  }
}

// ⭐ API INTEGRATION POINT #7: GET PERSONALIZED RECIPES
async function getPersonalizedRecipes(userPreferences) {
  try {
    const response = await fetch('/api/recipes/personalized', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify({
        userId: localStorage.getItem('user_id'),
        age: localStorage.getItem('age'),
        gender: localStorage.getItem('gender'),
        activityLevel: localStorage.getItem('activity_level'),
        calorieGoal: localStorage.getItem('calorie_goal'),
        dietaryRestrictions: userPreferences.restrictions || [],
        preferredCuisines: userPreferences.cuisines || []
      })
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching personalized recipes:', error);
  }
}

// ⭐ API INTEGRATION POINT #8: NUTRITION ANALYSIS
async function analyzeNutrition(mealData) {
  try {
    const response = await fetch('/api/nutrition/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify({
        userId: localStorage.getItem('user_id'),
        foods: mealData.items,
        mealType: mealData.mealType
      })
    });
    return await response.json();
  } catch (error) {
    console.error('Error analyzing nutrition:', error);
  }
}

// ⭐ API INTEGRATION POINT #9: MEAL HISTORY & TRACKING
async function getMealHistory(userId, dateRange) {
  try {
    const response = await fetch(`/api/meals/history?userId=${userId}&start=${dateRange.start}&end=${dateRange.end}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching meal history:', error);
  }
}

// ⭐ API INTEGRATION POINT #10: FOOD SEARCH & SUGGESTIONS
async function searchFoods(query, category = null) {
  try {
    const params = new URLSearchParams({ q: query });
    if (category) params.append('category', category);
    
    const response = await fetch(`/api/foods/search?${params}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error searching foods:', error);
  }
}
*/


    "female": {
      "calories": { "min": 1800, "max": 2400 },
      "protein": { "min": 5, "max": 6.5 },
      "fruits": { "min": 1.5, "max": 2 },
      "vegetables": { "min": 2.5, "max": 3 },
      "grains": { "min": 6, "max": 8 },
      "dairy": { "min": 3, "max": 3 }
    },
    "male": {
      "calories": { "min": 2200, "max": 3200 },
      "protein": { "min": 6.5, "max": 7 },
      "fruits": { "min": 2, "max": 2.5 },
      "vegetables": { "min": 3, "max": 4 },
      "grains": { "min": 8, "max": 10 },
      "dairy": { "min": 3, "max": 3 }
    }
  }
};

function getAgeRange(age) {
  if (age >= 5 && age <= 8) return "5-8";
  if (age >= 9 && age <= 13) return "9-13";
  if (age >= 14 && age <= 18) return "14-18";
  return null;
}

// Display calorie goal
if (calorieDisplay) {
  if (calorieGoal) {
    calorieDisplay.textContent = calorieGoal;
  } else {
    calorieDisplay.textContent = "----";
  }
}

// Calculate nutrition goals based on gender, age, and activity
const ageRange = getAgeRange(age);
if (ageRange && gender && nutritionData[ageRange] && nutritionData[ageRange][gender]) {
  const data = nutritionData[ageRange][gender];

  // Calculate based on activity level
  const foodGroups = ['protein', 'fruits', 'vegetables', 'grains', 'dairy'];

  foodGroups.forEach(food => {
    const { min, max } = data[food];
    let goal = min;

    if (activity === "moderate") {
      goal = (min + max) / 2;
    } else if (activity === "more") {
      goal = max;
    }

    // Format the display value
    const displayValue = goal % 1 === 0 ? goal.toString() : goal.toFixed(1);

    // Map food names to correct element IDs
    const elementId = food === 'fruits' ? 'fruitsAmount' : 
                     food === 'vegetables' ? 'vegetablesAmount' : 
                     food === 'protein' ? 'proteinAmount' : 
                     food === 'grains' ? 'grainsAmount' : 
                     food === 'dairy' ? 'dairyAmount' : null;

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.textContent = displayValue;
      }
    }
  });
} else {
  // Default values if data not found
  const elements = ['proteinAmount', 'fruitsAmount', 'vegetablesAmount', 'grainsAmount', 'dairyAmount'];
  elements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = "-";
    }
  });
}

// Meal tab functionality
const mealTabs = document.querySelectorAll('.meal-tab');
let currentMeal = 'breakfast';

mealTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    mealTabs.forEach(t => t.classList.remove('active'));

    // Add active class to clicked tab
    tab.classList.add('active');

    // Update current meal
    currentMeal = tab.getAttribute('data-meal');

    // Clear current plate when switching meals
    clearCurrentPlate();

    // Show feedback message
    showSuccessMessage(`Selected ${currentMeal.charAt(0).toUpperCase() + currentMeal.slice(1)} - Add foods to your plate!`);

    // Update save button text to show current meal
    updateSaveMealButton();

    console.log('Selected meal:', currentMeal);
  });
});

// Food category tab functionality
const foodTabs = document.querySelectorAll('.food-tab');
let currentFoodCategory = null;

foodTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all food tabs
    foodTabs.forEach(t => t.classList.remove('active'));

    // Add active class to clicked tab
    tab.classList.add('active');

    // Update current food category
    currentFoodCategory = tab.getAttribute('data-category');

    console.log('Selected food category:', currentFoodCategory);

    // Fetch food items from backend
    fetchFoodItems(currentFoodCategory);
  });
});

// ⭐ API INTEGRATION POINT #1: FOOD CATEGORIES
// Function to fetch food items from backend
async function fetchFoodItems(category) {
  try {
    // 🔥 BACKEND TEAM: Replace this URL with your Python API endpoint
    // Expected API: GET /api/foods/{category}
    // Categories: 'fruits', 'veggies', 'protein', 'grains', 'dairy'
    // Expected Response: [{ name: "Apple", serving: "1 medium", calories: 80 }, ...]
    const response = await fetch(`/api/foods/${category}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 🔥 BACKEND TEAM: Add authentication headers if needed
        // 'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const foodItems = await response.json();
    displayFoodItems(foodItems, category);

  } catch (error) {
    console.error('Error fetching food items:', error);
    // Fallback: show sample data for development
    displaySampleFoodItems(category);
  }
}

// Function to display food items in the UI
function displayFoodItems(foodItems, category) {
  // Create or update food items container
  let foodItemsContainer = document.getElementById('food-items-container');

  if (!foodItemsContainer) {
    foodItemsContainer = document.createElement('div');
    foodItemsContainer.id = 'food-items-container';
    foodItemsContainer.className = 'food-items-container';

    // Insert after the food category tabs
    const foodCategoryTabs = document.querySelector('.food-category-tabs');
    foodCategoryTabs.parentNode.insertBefore(foodItemsContainer, foodCategoryTabs.nextSibling);
  }

  // Show the container and clear previous items
  foodItemsContainer.style.display = 'block';
  foodItemsContainer.innerHTML = '';

  // Create header with close button
  const headerContainer = document.createElement('div');
  headerContainer.className = 'food-items-header-container';

  const header = document.createElement('h3');
  header.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Options`;
  header.className = 'food-items-header';

  const closeButton = document.createElement('button');
  closeButton.className = 'food-items-close-btn';
  closeButton.innerHTML = '&times;';
  closeButton.title = 'Close food selection';
  closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    hideFoodItemsContainer();
  });

  headerContainer.appendChild(header);
  headerContainer.appendChild(closeButton);
  foodItemsContainer.appendChild(headerContainer);

  // Create items grid
  const itemsGrid = document.createElement('div');
  itemsGrid.className = 'food-items-grid';

  foodItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'food-item';
    itemElement.draggable = true;
    itemElement.setAttribute('data-food-item', JSON.stringify(item));
    itemElement.setAttribute('data-category', category);
    itemElement.innerHTML = `
      <div class="food-item-name">${item.name}</div>
      <div class="food-item-details">${item.serving || ''}</div>
      <div class="drag-hint">Drag to plate</div>
    `;

    // Add drag event listeners
    itemElement.addEventListener('dragstart', handleDragStart);
    itemElement.addEventListener('dragend', handleDragEnd);

    // Add click handler for food item selection (fallback for mobile)
    itemElement.addEventListener('click', () => {
      selectFoodItem(item, category);
    });

    itemsGrid.appendChild(itemElement);
  });

  foodItemsContainer.appendChild(itemsGrid);

  // Remove any existing click-outside listener before adding a new one
  document.removeEventListener('click', clickOutsideHandler);

  // Add event listener to document to close food items container when clicked outside
  setTimeout(() => {
    document.addEventListener('click', clickOutsideHandler);
  }, 100); // Small delay to prevent immediate triggering
}

// Function to handle food item selection
function selectFoodItem(item, category) {
  console.log(`Selected ${item.name} from ${category}`);

  // You can add logic here to:
  // - Add to meal plan
  // - Update nutrition tracking
  // - Send to backend for meal logging

  // Example: Add to current meal
  addToMeal(item, currentMeal);
}

// Function to add item to current meal
function addToMeal(item, meal) {
  // This is where you'd integrate with your meal tracking system
  console.log(`Adding ${item.name} to ${meal}`);

  // Example backend call to save meal item
  saveMealItem(item, meal);
}

// ⭐ API INTEGRATION POINT #2: MEAL TRACKING
// Function to save meal item to backend
async function saveMealItem(item, meal) {
  try {
    // 🔥 BACKEND TEAM: Replace with your Python API endpoint
    // Expected API: POST /api/meals/add-item
    // Expected Body: { meal, foodItem, userId, timestamp }
    const response = await fetch('/api/meals/add-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 🔥 BACKEND TEAM: Add authentication headers if needed
        // 'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      },
      body: JSON.stringify({
        meal: meal,
        foodItem: item,
        userId: localStorage.getItem('user_id') || 'guest',
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Meal item saved:', result);

  } catch (error) {
    console.error('Error saving meal item:', error);
  }
}

// Drag and drop event handlers
let draggedItem = null;

function handleDragStart(e) {
  draggedItem = {
    item: JSON.parse(e.target.getAttribute('data-food-item')),
    category: e.target.getAttribute('data-category')
  };
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  draggedItem = null;
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';

  const dropZone = e.target.closest('.plate-section, .dairy-plate');
  if (dropZone && draggedItem) {
    const targetCategory = getPlateCategory(dropZone);
    const sourceCategory = draggedItem.category;

    // Add visual feedback based on whether drop is valid
    if (categoriesMatch(sourceCategory, targetCategory)) {
      dropZone.classList.add('drag-over');
    }
  }
}

function handleDragLeave(e) {
  const dropZone = e.target.closest('.plate-section, .dairy-plate');
  if (dropZone) {
    dropZone.classList.remove('drag-over');
  }
}

function handleDrop(e) {
  e.preventDefault();
  if (!draggedItem) return;

  const dropZone = e.target.closest('.plate-section, .dairy-plate');
  if (!dropZone) return;

  // Remove drag-over styling
  dropZone.classList.remove('drag-over');

  const targetCategory = getPlateCategory(dropZone);
  const sourceCategory = draggedItem.category;

  // Check if the categories match (allow flexibility for similar categories)
  if (categoriesMatch(sourceCategory, targetCategory)) {
    addFoodToPlate(draggedItem.item, targetCategory, dropZone);
    showSuccessMessage(`Added ${draggedItem.item.name} to ${targetCategory}!`);

    // Hide food items container after each successful drop
    hideFoodItemsContainer();
  } else {
    showErrorMessage(`${draggedItem.item.name} belongs in ${sourceCategory}, not ${targetCategory}!`);
  }
}

function getPlateCategory(element) {
  if (element.classList.contains('fruits')) return 'fruits';
  if (element.classList.contains('vegetables')) return 'vegetables';
  if (element.classList.contains('protein')) return 'protein';
  if (element.classList.contains('grains')) return 'grains';
  if (element.classList.contains('dairy-plate')) return 'dairy';
  return null;
}

function categoriesMatch(source, target) {
  // Handle category name variations
  const categoryMap = {
    'veggies': 'vegetables',
    'vegetables': 'vegetables',
    'fruits': 'fruits',
    'protein': 'protein',
    'grains': 'grains',
    'dairy': 'dairy'
  };

  const normalizedSource = categoryMap[source] || source;
  const normalizedTarget = categoryMap[target] || target;
  
  return normalizedSource === normalizedTarget;
}

function addFoodToPlate(item, category, plateSection) {
  // Check if this is the first food item added to this section
  let foodList = plateSection.querySelector('.food-list');
  if (!foodList) {
    foodList = document.createElement('div');
    foodList.className = 'food-list';
    plateSection.appendChild(foodList);
  }

  // Create a persistent food item indicator
  const foodItem = document.createElement('div');
  foodItem.className = 'plate-food-item';
  foodItem.textContent = item.name;
  foodItem.title = `${item.name} - ${item.serving || ''}`;
  foodItem.setAttribute('data-food-item', JSON.stringify(item));
  foodItem.setAttribute('data-category', category);

  // Add remove functionality
  foodItem.addEventListener('click', (e) => {
    e.stopPropagation();
    if (confirm(`Remove ${item.name}?`)) {
      // Remove from current plate items
      removeFromCurrentPlate(item, category);
      foodItem.remove();
      // If no more items, remove the food list
      if (foodList.children.length === 0) {
        foodList.remove();
      }
      updateSaveMealButton();
    }
  });

  foodList.appendChild(foodItem);

  // Add to current plate tracking
  addToCurrentPlate(item, category);

  // Show temporary success animation
  const successIndicator = document.createElement('div');
  successIndicator.className = 'drop-success';
  successIndicator.textContent = '✓ Added!';
  plateSection.appendChild(successIndicator);

  setTimeout(() => {
    if (successIndicator.parentNode) {
      successIndicator.parentNode.removeChild(successIndicator);
    }
  }, 1500);

  // Update save button state
  updateSaveMealButton();
}

function showSuccessMessage(message) {
  showMessage(message, 'success');
}

function showErrorMessage(message) {
  showMessage(message, 'error');
}

function showMessage(message, type) {
  // Create message element
  const messageElement = document.createElement('div');
  messageElement.className = `message ${type}`;
  messageElement.textContent = message;

  // Add to page
  document.body.appendChild(messageElement);

  // Remove after 3 seconds
  setTimeout(() => {
    if (messageElement.parentNode) {
      messageElement.parentNode.removeChild(messageElement);
    }
  }, 3000);
}

// Sample data for development/testing (remove when backend is ready)
function displaySampleFoodItems(category) {
  const sampleData = {
    fruits: [
      { name: 'Apple Slices', serving: '1 medium', calories: 80 },
      { name: 'Banana', serving: '1 medium', calories: 105 },
      { name: 'Orange Segments', serving: '1 medium', calories: 60 },
      { name: 'Strawberries', serving: '1/2 cup', calories: 25 },
      { name: 'Grapes', serving: '1/2 cup', calories: 30 },
      { name: 'Watermelon Cubes', serving: '1/2 cup', calories: 25 }
    ],
    veggies: [
      { name: 'Baby Carrots', serving: '1/2 cup', calories: 20 },
      { name: 'Broccoli Trees', serving: '1/2 cup', calories: 15 },
      { name: 'Spinach', serving: '1 cup', calories: 7 },
      { name: 'Cherry Tomatoes', serving: '1/2 cup', calories: 15 },
      { name: 'Cucumber Wheels', serving: '1/2 cup', calories: 8 },
      { name: 'Bell Pepper Strips', serving: '1/2 cup', calories: 15 }
    ],
    protein: [
      { name: 'Chicken Nuggets', serving: '3 oz', calories: 200 },
      { name: 'Fish Sticks', serving: '3 oz', calories: 180 },
      { name: 'Turkey Slices', serving: '2 oz', calories: 60 },
      { name: 'Mini Meatballs', serving: '3 pieces', calories: 150 },
      { name: 'Grilled Chicken', serving: '3 oz', calories: 140 },
      { name: 'Beef Strips', serving: '3 oz', calories: 180 },
      { name: 'Ham Slices', serving: '2 oz', calories: 70 },
      { name: 'Salmon Pieces', serving: '3 oz', calories: 175 },
    ],
    grains: [
      { name: 'Brown Rice', serving: '1/2 cup', calories: 110 },
      { name: 'Whole Wheat Bread', serving: '1 slice', calories: 80 },
      { name: 'Oatmeal', serving: '1/2 cup', calories: 150 },
      { name: 'Whole Grain Cereal', serving: '3/4 cup', calories: 100 },
      { name: 'Whole Wheat Pasta', serving: '1/2 cup', calories: 90 },
      { name: 'Quinoa', serving: '1/3 cup', calories: 80 }
    ],
    dairy: [
      { name: 'Milk', serving: '1 cup', calories: 150 },
      { name: 'Greek Yogurt', serving: '3/4 cup', calories: 100 },
      { name: 'Cheese', serving: '1 oz', calories: 110 },
      { name: 'String Cheese', serving: '1 stick', calories: 80 },
      { name: 'Chocolate Milk', serving: '1 cup', calories: 190 },
      { name: 'Yogurt Tubes', serving: '1 tube', calories: 60 }
    ]
  };

  const items = sampleData[category] || [];
  displayFoodItems(items, category);
}

// Initialize drag and drop on plate sections
function initializeDragAndDrop() {
  const plateSection = document.querySelectorAll('.plate-section, .dairy-plate');

  plateSection.forEach(section => {
    section.addEventListener('dragover', handleDragOver);
    section.addEventListener('dragleave', handleDragLeave);
    section.addEventListener('drop', handleDrop);
  });
}

// Meal tracking data
let savedMeals = JSON.parse(localStorage.getItem('savedMeals') || '[]');
let currentPlateItems = [];

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  initializeDragAndDrop();
  initializeMealTracking();
  updateMealTrackingDisplay();
});

backBtn.addEventListener("click", () => {
  window.location.href = "page4.html";
});

nextBtn.addEventListener("click", () => {
  // For now, just show an alert
  alert("This is the final page!");
});

// Recipe button functionality
const recipeBtn = document.getElementById("recipeBtn");
if (recipeBtn) {
  recipeBtn.addEventListener("click", () => {
    window.location.href = "page6.html";
  });
}

function hideFoodItemsContainer() {
  const foodItemsContainer = document.getElementById('food-items-container');
  if (foodItemsContainer) {
    foodItemsContainer.style.display = 'none';
    document.removeEventListener('click', clickOutsideHandler); // Remove the click outside listener when hiding
  }
}

function showFoodCategoryTabs() {
  // Food category tabs should always be visible
  const foodCategoryTabs = document.querySelector('.food-category-tabs');
  if (foodCategoryTabs) {
    foodCategoryTabs.style.display = 'flex';
  }
}

// Ensure food category tabs are always visible
document.addEventListener('DOMContentLoaded', () => {
  showFoodCategoryTabs();
});

// Event listener function for click outside
function clickOutsideHandler(event) {
    const foodItemsContainer = document.getElementById('food-items-container');

    if(foodItemsContainer && foodItemsContainer.style.display !== 'none'){
        // Check if click is on a food tab button
        const isClickOnFoodTab = event.target.closest('.food-tab');
        const isClickInside = foodItemsContainer.contains(event.target) || isClickOnFoodTab;

        if (!isClickInside) {
            hideFoodItemsContainer();
            document.removeEventListener('click', clickOutsideHandler); // Remove the listener after it's used once
        }
    }
}

// Meal tracking functions
function initializeMealTracking() {
  const saveMealBtn = document.getElementById('saveMealBtn');
  const clearPlateBtn = document.getElementById('clearPlateBtn');

  if (saveMealBtn) {
    saveMealBtn.addEventListener('click', saveMealToTracker);
  }

  if (clearPlateBtn) {
    clearPlateBtn.addEventListener('click', clearCurrentPlate);
  }

  updateSaveMealButton();
}

function addToCurrentPlate(item, category) {
  currentPlateItems.push({
    name: item.name,
    serving: item.serving || '',
    calories: item.calories || 0,
    category: category,
    meal: currentMeal
  });
}

function removeFromCurrentPlate(item, category) {
  const index = currentPlateItems.findIndex(plateItem => 
    plateItem.name === item.name && plateItem.category === category
  );
  if (index > -1) {
    currentPlateItems.splice(index, 1);
  }
}

function updateSaveMealButton() {
  const saveMealBtn = document.getElementById('saveMealBtn');
  if (saveMealBtn) {
    saveMealBtn.disabled = currentPlateItems.length === 0;
    
    // Update button text to show current meal
    const mealName = currentMeal.charAt(0).toUpperCase() + currentMeal.slice(1);
    if (currentPlateItems.length === 0) {
      saveMealBtn.textContent = `Add foods for ${mealName}`;
    } else {
      saveMealBtn.textContent = `Save ${mealName} Meal`;
    }
  }
}

function saveMealToTracker() {
  if (currentPlateItems.length === 0) {
    showErrorMessage('No items on plate to save!');
    return;
  }

  // Check if this meal already exists
  const existingMealIndex = savedMeals.findIndex(meal => meal.mealType === currentMeal);
  
  const mealData = {
    mealType: currentMeal,
    items: [...currentPlateItems],
    timestamp: new Date().toISOString(),
    id: Date.now()
  };

  const mealName = currentMeal.charAt(0).toUpperCase() + currentMeal.slice(1);

  // ⭐ API INTEGRATION POINT #3: SAVE COMPLETE MEALS
  // 🔥 BACKEND TEAM: Add API call here to save complete meals to your database
  // saveMealToBackend(mealData);

  if (existingMealIndex > -1) {
    // Update existing meal
    savedMeals[existingMealIndex] = mealData;
    showSuccessMessage(`✅ Updated ${mealName} meal with ${currentPlateItems.length} items!`);
  } else {
    // Add new meal
    savedMeals.push(mealData);
    showSuccessMessage(`✅ Saved ${mealName} meal with ${currentPlateItems.length} items!`);
  }

  // Save to localStorage (temporary - replace with API call)
  localStorage.setItem('savedMeals', JSON.stringify(savedMeals));

  // Clear current plate
  clearCurrentPlate();
  
  // Update display
  updateMealTrackingDisplay();

  // Highlight the meal tab briefly to show it was saved
  const activeTab = document.querySelector(`.meal-tab[data-meal="${currentMeal}"]`);
  if (activeTab) {
    activeTab.style.background = '#4CAF50';
    activeTab.style.color = 'white';
    setTimeout(() => {
      activeTab.style.background = '';
      activeTab.style.color = '';
    }, 1000);
  }
}

function clearCurrentPlate() {
  // Clear visual plate
  const foodLists = document.querySelectorAll('.food-list');
  foodLists.forEach(list => list.remove());

  // Clear tracking data
  currentPlateItems = [];
  
  // Update save button
  updateSaveMealButton();
  
  showSuccessMessage('Plate cleared!');
}

function updateMealTrackingDisplay() {
  const tableBody = document.getElementById('mealTrackingBody');
  const noMealsMessage = document.getElementById('noMealsMessage');
  
  if (!tableBody || !noMealsMessage) return;

  if (savedMeals.length === 0) {
    tableBody.innerHTML = '';
    noMealsMessage.style.display = 'block';
    return;
  }

  noMealsMessage.style.display = 'none';
  
  tableBody.innerHTML = savedMeals.map(meal => {
    const totalCalories = meal.items.reduce((sum, item) => sum + (item.calories || 0), 0);
    return `
    <tr>
      <td>
        <div class="meal-name">${meal.mealType}</div>
        <small>${new Date(meal.timestamp).toLocaleTimeString()}</small>
      </td>
      <td class="meal-foods">
        ${meal.items.map(item => 
          `<span class="food-item-tag">${item.name}</span>`
        ).join('')}
      </td>
      <td class="meal-calories">
        <div class="calorie-count">${totalCalories}</div>
        <small>calories</small>
      </td>
      <td class="meal-actions">
        <button class="edit-meal-btn" onclick="editMeal(${meal.id})">Edit</button>
        <button class="delete-meal-btn" onclick="deleteMeal(${meal.id})">Delete</button>
      </td>
    </tr>
  `;
  }).join('');
}

function editMeal(mealId) {
  const meal = savedMeals.find(m => m.id === mealId);
  if (!meal) return;

  // Switch to the meal's tab
  const mealTab = document.querySelector(`[data-meal="${meal.mealType}"]`);
  if (mealTab) {
    mealTab.click();
  }

  // Clear current plate first
  clearCurrentPlate();

  // Load meal items back onto plate
  meal.items.forEach(item => {
    const plateSection = document.querySelector(`.plate-section.${item.category}, .dairy-plate`);
    if (plateSection) {
      addFoodToPlate(
        { name: item.name, serving: item.serving }, 
        item.category, 
        plateSection
      );
    }
  });

  showSuccessMessage(`Loaded ${meal.mealType} for editing!`);
}

function deleteMeal(mealId) {
  const meal = savedMeals.find(m => m.id === mealId);
  if (!meal) return;

  if (confirm(`Delete ${meal.mealType} meal?`)) {
    savedMeals = savedMeals.filter(m => m.id !== mealId);
    localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
    updateMealTrackingDisplay();
    showSuccessMessage(`Deleted ${meal.mealType} meal!`);
  }
}