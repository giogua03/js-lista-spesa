const arrGroceryList = ['cotone', 'marmellata', 'frutta'];
const eleButton = document.getElementById('button');
const inputGroceryItem = document.getElementById('inserisci');
const eleGroceryList = document.getElementById('grocery-list');

let i = 0
while (i < arrGroceryList.length){
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;

}


eleButton.addEventListener('click', function() {

})
