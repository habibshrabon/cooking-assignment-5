
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=A`)
    .then(res => res.json())
    .then(data => mealList(data.meals))

const mealList = meals => {
    const foodContainer = document.getElementById("idMeal");
//    console.log(strMeal.name);
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        const singleFood = document.createElement("div");
        singleFood.className = "col-md-3";

        const foodInfo = `
        <div class="food-info">  
            <div>
                <img src="${meal.strMealThumb}">
            </div>

            <div>
                <h3> ${meal.strMeal}</h3>
            </div> 
        </div>    
        `
               
                foodContainer.appendChild(singleFood);
                singleFood.innerHTML = foodInfo;
    }
}

