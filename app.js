

let i = 0;
let container = document.getElementById('container');
function addItems() {
    container.innerHTML = "";
    let inputValue = document.getElementById('search-food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            data.meals.forEach(item => {
                // console.log('#################', item.strInstructions);
                let parentDiv = document.createElement('div');
                parentDiv.className = 'container';
                container.appendChild(parentDiv);
                let div = document.createElement('div');
                div.className = 'individual';
                div.innerHTML = `<h2>${item.strMeal}</h2>
                            <img class="food-img" src="${item.strMealThumb}" alt="">
                            <ul class="ingredients"><b>Ingredients to make this food</b><br><br>
                            </ul>`;
                            
                parentDiv.appendChild(div);
               
                let ingredientsToShow = document.getElementsByClassName('ingredients')[i];
                for (let prop in item) {
                    if(`${prop}`.includes('strIngredient')) {
                        if(item[prop] !== "" && item[prop] !== null && item[prop] !== undefined) {
                            let li = document.createElement('li');
                            li.innerText = item[prop];
                            ingredientsToShow.appendChild(li);
                            
                            
                            
                            // console.log(item[prop]);
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

        });
}

