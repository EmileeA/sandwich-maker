
import utilities from '../helpers/utilities.js'

const cheeses = [
    {id: "cheese1", name:"swiss", price: 1}, 
    {id: "cheese2", name:"american", price: 1},
    {id: "cheese3", name:"provolone", price: 1},
];


const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++){
    domString +=` <div class="form-check">
    <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
    <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
  </div>`;
    }

