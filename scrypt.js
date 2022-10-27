const arrGroceryList = [];
const eleButton = document.querySelector('.button');
const inputGroceryItem = document.querySelector('#inserisci');
const eleGroceryList = document.querySelector('.grocery-list');



eleButton.addEventListener('click', function() {
	let i = 0 
while (i < arrGroceryList.length){
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;

}

	
});




