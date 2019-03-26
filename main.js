const addBtn = document.getElementById('addBtn');
const inputIngredient = document.getElementById('inputIngredient');

const ingredients = [];
let ingredientCounter = 1;

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
    arrayToPrint.forEach((ingredient) => {
        domString +=`<div class="card col-3">
                        <div class="card-body">
                            <h5 class="card-title">${ingredient.item}</h5>
                            <a href="#" class="btn btn-primary deleteBtn" id="${ingredient.id}">Delete Ingredient</a> 
                        </div>
                    </div>`;
    });
    printToDom('ingredientCon', domString);
};

const addIngredient = (e) => {
    e.preventDefault();
    const inputText= inputIngredient.value;
    const newIngredient = {
        item: inputText,
        id: `ingredient${ingredientCounter}`
    };
    ingredients.push(newIngredient);
    ingredientCounter++;
    domStringBuilder(ingredients);
    addDeleteEvents();
    inputIngredient.value = null;
};

const deleteFunction = (e) => {
    const buttonId = e.target.id;
    ingredients.forEach((ingredient, index) => {
        if(ingredient.id === buttonId){
            ingredients.splice(index, 1);
        };
    });
    domStringBuilder(ingredients);
    addDeleteEvents();
};

const addDeleteEvents = () => {
    const deleteBtn = document.getElementsByClassName('deleteBtn');
    for(let i = 0; i<deleteBtn.length; i++){
        deleteBtn[i].addEventListener('click', deleteFunction);
    };
};


////////////////////////////////////~~~!!!!!---INIT---!!!!~~~///////////////////////////////////////////
init();