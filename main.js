const addBtn = document.getElementById('addBtn');
const inputIngredient = document.getElementById('inputIngredient');

const init = () => {
    eventListeners();
};

const eventListeners = () => {
    addBtn.addEventListener('click', addIngredient);
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

const addIngredient = (e) => {
    e.preventDefault();
    const inputText= inputIngredient.value;
    printToDom('ingredientCon', inputText);
    inputIngredient.value = null;
};

init();