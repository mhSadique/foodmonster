


function addItems() {
    // let container = document.getElementById('container');
    let inputValue = document.getElementById('search-food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
    .then(res => res.json())
    .then(data => {
        data.meals.forEach(item => {
            console.log(item.strMeal);
            let parentDiv = document.createElement('div');
            parentDiv.className = 'container';
            document.body.append(parentDiv);
            let div = document.createElement('div');
            div.className = 'individual';
            div.innerText = item.strMeal;
            parentDiv.append(div);
        });
        
    });
}

