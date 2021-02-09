
let searchValue = document.getElementById('search-food');
let i = 0; //counter for the nodelist of the same css class
let containerMain = document.getElementById('container-main');
let noSuchFoodMessage = document.getElementById('hidden'); //message to show if there is no search result
function addItems() { //function to run when the 'search' button is clicked
    // containerMain.innerHTML = ""; 
    // the line above was added to empty the main div at every search 
    // but is not working as expected
    // rather the new search result are added to the bottom of previous search results
    // HOW DO I FIX IT??

    let inputValue = document.getElementById('search-food').value; //get the value form the search box
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            noSuchFoodMessage.style.display = 'none'; // hide the 'no search result' message if it is already there
            if (data.meals === null) { //show the message if there is no search result
                noSuchFoodMessage.style.display = 'block';
            }
            data.meals.forEach(item => {
                let parentDiv = document.createElement('div');
                parentDiv.className = 'container';
                containerMain.appendChild(parentDiv);
                let div = document.createElement('div');
                div.className = 'individual';
                div.innerHTML = `<h2>${item.strMeal}</h2>
                            <img class="food-img" src="${item.strMealThumb}" alt="">
                            <ul class="ingredients"><b>Ingredients needed</b><br><br>
                            </ul>`;

                parentDiv.appendChild(div);

                let ingredientsToShow = document.getElementsByClassName('ingredients')[i];
                for (let prop in item) { //add the recipe ingredients
                    if (`${prop}`.includes('strIngredient')) {
                        if (item[prop] !== "" && item[prop] !== null && item[prop] !== undefined) { //filtering in the recipe ingredients
                            let li = document.createElement('li');
                            li.innerText = item[prop];
                            ingredientsToShow.appendChild(li);
                        }
                    }
                }
                ingredientsToShow.style.display = 'none'; 

                let clicked = document.getElementsByClassName('container')[i];
                clicked.addEventListener('click', function () { //show the ingredients when the food item is clicked
                    ingredientsToShow.style.display = 'block';
                });
                i++; //increase the counter by 1
            });
            searchValue.value = ''; //empty the search box after the search
        });
}

