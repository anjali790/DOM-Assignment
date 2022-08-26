var input = document.querySelector('.input');
var btn = document.querySelector('.btn');
var display = document.querySelector('.display');


btn.addEventListener('click', function (event) {
    display.innerHTML = ""
    event.preventDefault();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)

        .then(result => result.json())
        .then(data => {
          
            console.log(data)

            // for(let i=0; i<meals.length; i++){
            //   let food = meals[i]
            //     let html = `<div><h1>${food.strMeal}</h1>
            //     <p>${food.strInstructions}</p>
            //     </div>`
            // }
         data['meals'].forEach(element =>{
                console.log(element)

                let {strMeal,strMealThumb, strInstructions,strYoutube} = element

                let html = `<div><h1>${strMeal}</h1>
                <p>${strInstructions}</p>
                <a href="${strYoutube}">Link for full preparation</a>
                </div>`

            })
            display.innerHTML+=html
        })
        .catch(err => alert("error"))
})