

let i = 0;
let container = document.getElementById('container');
function addItems() {
    container.innerHTML = "";
    let inputValue = document.getElementById('search-food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals);
        });
}
























// function createIngredients() {
                            //     let i = 0;
                            //     while(item[`strIngredient${i}`]) {
                            //         let ul = document.getElementById('un-list');
                            //         let li = document.createElement('li');
                            //         ul.appendChild(li);
                            //         if(item[`strIngredient${i}`] !== "" && item[`strIngredient${i}`] !== undefined && item[`strIngredient${i}`] !== null) {
                            //             li.innerText = item[`strIngredient${i}`]

                            //         }
                            //         if(item[`strIngredient${i}`] === "") {
                            //             break;
                            //         }
                            //         i++;
                            //     }
                            // }
                            // createIngredients();