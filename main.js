const addBtn = document.getElementById('addBtn');
const inputIngredient = document.getElementById('inputIngredient');

const ingredients = [];

const init = () => {
    eventListeners();
};

const eventListeners = () => {
    addBtn.addEventListener('click', addIngredient);
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    arrayToPrint.forEach(ingredient => {
        domString +=`<div class="card col-3">
                        <div class="card-body">
                            <h5 class="card-title">${ingredient.item}</h5>
                        </div>
                    </div>`;
        // <a href="#" class="btn btn-primary">Delete Ingredient</a> 
    });
    printToDom('ingredientCon', domString)
};

const addIngredient = (e) => {
    e.preventDefault();
    const inputText= inputIngredient.value;
    const newIngredient = {
        item: inputText
    };
    ingredients.push(newIngredient);
    domStringBuilder(ingredients)
    inputIngredient.value = null;
};
////////////////////////////////////~~~!!!!!---INIT---!!!!~~~///////////////////////////////////////////
init();