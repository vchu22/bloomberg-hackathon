
# 🚀 API Integration Guide for Backend Team

## Overview
This document outlines all the API endpoints that need to be implemented in your Python backend to fully integrate with the Sprouts nutrition app frontend.

## Quick Start Checklist
- [ ] Set up your Python backend (Flask/FastAPI recommended)
- [ ] Update `API_CONFIG` in `page5.js` and `page6.js` with your base URL
- [ ] Implement the 13 API endpoints listed below
- [ ] Test each endpoint with the provided request/response formats
- [ ] Uncomment API calls in the frontend code

## 🔥 CRITICAL API ENDPOINTS TO IMPLEMENT

### 1. Food Categories (HIGH PRIORITY)
**Frontend Location:** `page5.js` - Line ~200
```
GET /api/foods/{category}
Categories: 'fruits', 'veggies', 'protein', 'grains', 'dairy'
Response: [{ name: "Apple", serving: "1 medium", calories: 80 }]
```

### 2. Meal Tracking (HIGH PRIORITY)
**Frontend Location:** `page5.js` - Line ~300
```
POST /api/meals/add-item
Body: { meal, foodItem, userId, timestamp }
```

### 3. Save Complete Meals (HIGH PRIORITY)
**Frontend Location:** `page5.js` - Line ~600
```
POST /api/meals/save
Body: { mealType, items, userId, timestamp }
```

### 4. Recipe Recommendations (MEDIUM PRIORITY)
**Frontend Location:** `page6.js` - Line ~50
```
POST /api/recipes/recommendations
Body: { userId, age, gender, activityLevel, calorieGoal }
```

### 5. User Authentication (LOW PRIORITY - Future)
```
POST /api/auth/login
POST /api/users/nutrition-goals
```

## 📁 Files to Focus On
1. **`page5.js`** - Main meal planning functionality (10 API integration points)
2. **`page6.js`** - Recipe recommendations (3 API integration points)

## 🔍 How to Find API Integration Points
- Search for "⭐ API INTEGRATION POINT" comments
- Look for "🔥 BACKEND TEAM" comments
- All API calls are marked with clear TODO comments

## 🧪 Testing Your APIs
Use the sample data provided in the frontend `displaySampleFoodItems()` function as reference for expected data formats.

## 📞 Frontend Integration
Once your APIs are ready:
1. Update the base URLs in `API_CONFIG` objects
2. Uncomment the API calls marked with TODO comments
3. Test with the existing frontend interface

## 🎯 Quick Reference for Backend Team

### Most Important Files to Check:
1. **`page5.js`** (Lines 200-800) - Main meal planning with 10 API points marked with ⭐
2. **`page6.js`** (Lines 50-150) - Recipe recommendations with 3 API points

### Search Keywords in Code:
- `⭐ API INTEGRATION POINT` - All integration locations
- `🔥 BACKEND TEAM` - Critical instructions
- `API_CONFIG` - Base URL configuration objects
- `TODO:` - Specific implementation tasks

### Sample Data Reference:
Look at the `displaySampleFoodItems()` function in `page5.js` for expected JSON formats.

### Testing Checklist:
- [ ] Update `API_CONFIG.BASE_URL` in both files
- [ ] Test food categories endpoint first (most visible to users)
- [ ] Verify meal tracking saves correctly
- [ ] Test calorie calculations match frontend expectations

Good luck! 🍎🥗
