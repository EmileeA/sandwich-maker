import bread from './bread.js';
import cheese from './cheese.js';
import condiments from './condiments.js';
import veggies from './veggies.js';
import meat from './meat.js';
import utilities from '../helpers/utilities.js';

const buildOrder = (items) => {
  let domString = '';
  for (let i = 0; i < items.length; i++) {
    domString += `<h2>${items[i].name}</h2>`
  }

utilities.printToDom('order', domString);
}

const buildOrderEvent = () => {
  const selectedBread = bread.getBreadOptions();
  const selectedCheese = cheese.getSelectedCheeses();
  const selectedCondiment = condiments.getCondimentOptions();
  const selectedMeat = meat.getMeatOptions();
  const selectedVeggie = veggies.getVeggieOptions();
  buildOrder(selectedBread, selectedCheese, selectedCondiment, selectedMeat, selectedVeggie);
};

const printOrderButton = () => {
  document.getElementById('order').addEventListener('click', buildOrderEvent)
};

export default { printOrderButton, buildOrder };
