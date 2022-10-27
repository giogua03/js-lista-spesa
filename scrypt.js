const arrGroceryList = [];
const eleInserisci = document.querySelector('.inserisci');
const eleButton = document.querySelector('.button');
const inputGroceryItem = document.querySelector('#inserisci');
const eleGroceryList = document.querySelector('.grocery-list');

eleButton.addEventListener('click', function(event) {
	event.preventDefault();

	if (inputGroceryItem.value) {
		
		arrGroceryList.push(inputGroceryItem.value);

		eleGroceryList.innerHTML += `<li>${inputGroceryItem.value}</li>`;

		inputGroceryItem.value = '';
	}
});


let i = 0 
while (i < arrGroceryList.length){
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;

}

