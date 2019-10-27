import bread from './bread.js';
import cheese from './cheese.js';
import condiments from './condiments.js';
import veggies from './veggies.js';
import meat from './meat.js';
import utilities from '../helpers/utilities.js';


const buildOrder = (selectedItems) => {
  let domString = '';
  let finalPrice = 0;
  for (let i = 0; i < selectedItems.length; i++) {
    domString += `<h1>${selectedItems[i].name} $${selectedItems[i].price}</h1>`
    finalPrice += selectedItems[i].price
  }
  domString += `<h1>Final Price: $${finalPrice}</h1>`
  //utilities is the object. printToDom is the method (we have imported our object "utilities from '../helpers etc.")
  utilities.printToDom('final-order', domString);
 };

const buildOrderEvent = () => {
  const selectedBread = bread.getSelectedBreads();
  const selectedCheese = cheese.getSelectedCheeses();
  const selectedCondiment = condiments.getSelectedCondiments();
  const selectedMeat = meat.getSelectedMeats();
  const selectedVeggie = veggies.getSelectedVeggies();
  const finalOrder = selectedBread.concat(selectedCheese, selectedCondiment, selectedMeat, selectedVeggie);
  buildOrder(finalOrder);
};

const printOrderButton = () => {
  document.getElementById('order').addEventListener('click', buildOrderEvent)
};

export default { printOrderButton };
