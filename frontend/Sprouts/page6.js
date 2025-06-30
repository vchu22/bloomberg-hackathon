// 🚀 BACKEND TEAM: Update API_CONFIG.BASE_URL below, then implement recipe endpoints
// 🔥 SEARCH FOR: "⭐ API INTEGRATION POINT" to find all integration locations

const recipesContainer = document.getElementById("recipesContainer");
const recipesGrid = document.getElementById("recipesGrid");
const loadingState = document.getElementById("loadingState");
const errorState = document.getElementById("errorState");
const retryBtn = document.getElementById("retryBtn");
const backBtn = document.getElementById("backBtn");

// ⭐ API INTEGRATION POINT #4: RECIPE RECOMMENDATIONS
// 🔥 BACKEND TEAM: UPDATE THESE VALUES FOR YOUR PYTHON API
const API_CONFIG = {
  // Replace with your Python Flask/FastAPI base URL
  BASE_URL: 'http://your-python-backend.com/api',
  // Add authentication headers if needed
  HEADERS: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer your-api-key', // Uncomment if using API keys
    // 'X-API-Key': 'your-api-key', // Alternative auth method
  }
};

// Get user data for API request
const userData = {
  gender: localStorage.getItem("gender"),
  age: parseInt(localStorage.getItem("age")),
  activity: localStorage.getItem("activity_level"),
  calorieGoal: localStorage.getItem("calorie_goal")
};

// DOM elements
const loadingState = document.getElementById("loadingState");
const recipesGrid = document.getElementById("recipesGrid");
const errorState = document.getElementById("errorState");
const retryBtn = document.getElementById("retryBtn");
const backBtn = document.getElementById("backBtn");

// Function to fetch recipes from your API
async function fetchRecipes() {
  try {
    showLoading();

    // TODO: Replace this URL with your actual API endpoint
    const response = await fetch(`${API_CONFIG.BASE_URL}/recipes`, {
      method: 'POST',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify({
        user_data: userData,
        count: 3 // Request 3 random recipes
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    displayRecipes(data.recipes || data); // Adjust based on your API response structure

// ⭐⭐⭐ RECIPE API INTEGRATION TEMPLATE ⭐⭐⭐
// 🔥 BACKEND TEAM: Implement these API endpoints in your Python backend

/*
// ⭐ API INTEGRATION POINT #11: GET RECIPE RECOMMENDATIONS
async function fetchRecipeRecommendations() {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/recipes/recommendations`, {
      method: 'POST',
      headers: {
        ...API_CONFIG.HEADERS,
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify({
        userId: localStorage.getItem('user_id'),
        age: localStorage.getItem('age'),
        gender: localStorage.getItem('gender'),
        activityLevel: localStorage.getItem('activity_level'),
        calorieGoal: localStorage.getItem('calorie_goal'),
        savedMeals: JSON.parse(localStorage.getItem('savedMeals') || '[]')
      })
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipe recommendations:', error);
    return null;
  }
}

// ⭐ API INTEGRATION POINT #12: GET RECIPE BY CATEGORY
async function fetchRecipesByCategory(category) {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/recipes/category/${category}`, {
      headers: API_CONFIG.HEADERS
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipes by category:', error);
  }
}

// ⭐ API INTEGRATION POINT #13: SAVE FAVORITE RECIPE
async function saveFavoriteRecipe(recipeId) {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/users/favorites`, {
      method: 'POST',
      headers: {
        ...API_CONFIG.HEADERS,
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify({
        userId: localStorage.getItem('user_id'),
        recipeId: recipeId
      })
    });
    return await response.json();
  } catch (error) {
    console.error('Error saving favorite recipe:', error);
  }
}
*/



  } catch (error) {
    console.error('Error fetching recipes:', error);
    showError();
  }
}

// Function to display recipes
function displayRecipes(recipes) {
  hideAllStates();
  recipesGrid.style.display = 'grid';

  recipesGrid.innerHTML = '';

  recipes.forEach(recipe => {
    const recipeCard = createRecipeCard(recipe);
    recipesGrid.appendChild(recipeCard);
  });
}

// Function to create a recipe card
function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';

  card.innerHTML = `
    <div class="recipe-image">
      ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.name}">` : '<div class="placeholder-image">📸</div>'}
    </div>
    <div class="recipe-content">
      <h3 class="recipe-name">${recipe.name || 'Delicious Recipe'}</h3>
      <p class="recipe-description">${recipe.description || 'A nutritious and tasty meal perfect for your goals.'}</p>
      <div class="recipe-nutrition">
        <span class="nutrition-item">Calories: ${recipe.calories || 'N/A'}</span>
        <span class="nutrition-item">Protein: ${recipe.protein || 'N/A'}g</span>
      </div>
      <button class="view-recipe-btn" onclick="viewRecipe('${recipe.id || recipe.name}')">View Recipe</button>
    </div>
  `;

  return card;
}

// Function to handle viewing a specific recipe
function viewRecipe(recipeId) {
  // TODO: Implement recipe detail view or link to recipe page
  console.log('Viewing recipe:', recipeId);
  alert(`Recipe details for ${recipeId} - implement this based on your needs!`);
}

// State management functions
function showLoading() {
  hideAllStates();
  loadingState.style.display = 'block';
}

function showError() {
  hideAllStates();
  errorState.style.display = 'block';
}

function hideAllStates() {
  loadingState.style.display = 'none';
  recipesGrid.style.display = 'none';
  errorState.style.display = 'none';
}

// Event listeners
retryBtn.addEventListener('click', fetchRecipes);

backBtn.addEventListener('click', () => {
  window.location.href = 'page5.html';
});

// Demo function - remove this when you have real API
function loadDemoRecipes() {
  setTimeout(() => {
    const demoRecipes = [
      {
        id: '1',
        name: 'Healthy Chicken Bowl',
        description: 'Grilled chicken with quinoa and vegetables',
        calories: 450,
        protein: 35,
        image: null
      },
      {
        id: '2',
        name: 'Veggie Pasta',
        description: 'Whole wheat pasta with colorful vegetables',
        calories: 380,
        protein: 12,
        image: null
      },
      {
        id: '3',
        name: 'Turkey Sandwich',
        description: 'Lean turkey with whole grain bread',
        calories: 320,
        protein: 28,
        image: null
      }
    ];
    displayRecipes(demoRecipes);
  }, 2000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  // For testing purposes, load demo recipes
  // Replace this with fetchRecipes() when your API is ready
  loadDemoRecipes();

  // Uncomment the line below when your API is ready:
  // fetchRecipes();
});