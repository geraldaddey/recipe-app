const meals = document.getElementById("meals");

getRandomMeal();

async function getRandomMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  const data = await response.json();

  const randomMeal = data.meals[0];

  console.log(randomMeal);

  addMeal(randomMeal, true);
}

addMeal(mealData, (random = false));
const meal = document.createElement("div");
meal.classList.add("meal");

// function getMealById(id) {
//   const meal = await fetch(
//     "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
//   );
// }

// function getMealBySearch(term) {
//   const meals = await fetch(
//     "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term
//   );
// }
