const arrGroceryList = ['cotone', 'marmellata'];
const eleButton = document.getElementById('.button');
const inputGroceryItem = document.getElementById('.inserisci');
const eleGroceryList = document.getElementById('.grocery-list');




eleButton.addEventListener('click', function() {
let i = 0
while (i < arrGroceryList.length){
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;

}
}
