
let searchValue = document.getElementById('search-food');
let i = 0; //counter for the nodelist of the same css class
let containerMain = document.getElementById('container-main');
let noSuchFoodMessage = document.getElementById('hidden'); //message to show if there is no search result
function addItems() { //function to run when the 'search' button is clicked
    // containerMain.innerHTML = "";

    let inputValue = document.getElementById('search-food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            noSuchFoodMessage.style.display = 'none';
            if (data.meals === null) {
                noSuchFoodMessage.style.display = 'block';
            }
            data.meals.forEach(item => {
                let parentDiv = document.createElement('div');
                parentDiv.className = 'container';
                containerMain.appendChild(parentDiv); //******** */
                let div = document.createElement('div');
                div.className = 'individual';
                div.innerHTML = `<h2>${item.strMeal}</h2>
                            <img class="food-img" src="${item.strMealThumb}" alt="">
                            <ul class="ingredients"><b>Ingredients needed</b><br><br>
                            </ul>`;

                parentDiv.appendChild(div);

                let ingredientsToShow = document.getElementsByClassName('ingredients')[i];
                for (let prop in item) {
                    if (`${prop}`.includes('strIngredient')) {
                        if (item[prop] !== "" && item[prop] !== null && item[prop] !== undefined) {
                            let li = document.createElement('li');
                            li.innerText = item[prop];
                            ingredientsToShow.appendChild(li);
                        }
                    }

                }
                ingredientsToShow.style.display = 'none';

                let clicked = document.getElementsByClassName('container')[i];
                clicked.addEventListener('click', function () {
                    ingredientsToShow.style.display = 'block';
                });
                i++;
            });
            searchValue.value = '';
        });
}

