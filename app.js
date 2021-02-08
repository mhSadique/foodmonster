

let i = 0;
function addItems() {
    // let container = document.getElementById('container');
    let inputValue = document.getElementById('search-food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            data.meals.forEach(item => {
                console.log(item.strInstructions);
                let parentDiv = document.createElement('div');
                parentDiv.className = 'container';
                document.body.append(parentDiv);
                let div = document.createElement('div');
                div.className = 'individual';
                div.innerHTML = `<h2>${item.strMeal}</h2>
                            <img class="food-img" src="${item.strMealThumb}" alt="">
                            <p class="para">${item.strInstructions}</p>`;
                parentDiv.append(div);
                let paraToShow = document.getElementsByClassName('para')[i];
                paraToShow.style.display = 'none';
                let clicked = document.getElementsByClassName('container')[i];


                clicked.addEventListener('click', function () {
                    paraToShow.style.display = 'block';
                });
                i++;
            });

        });
}

