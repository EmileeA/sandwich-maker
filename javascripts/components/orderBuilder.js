import bread.js from './bread.js';
import cheese.js from './cheese.js';
import condiments.js from './components.js';
import veggies.js from './components.js';
import meat.js from './components.js';
import utilities from './utilities';
import orderString from '../helpers/orderString.js'
 
//Making my variables
const breads = breadInfo.getBreadInfo();
const order = [];

const buildOrder = (e) => {
    e.preventDefault();
    let checkBoxes = Array.from(document.getElementsByClassName('form-check-input'));
    checkBoxes.forEach((box) => {
        if (box.checked) {
            console.log(`${box.id} is checked`);
            console.log(`bread.${box.id} returns ${breads[box.id]}`);
            order.push([box.id, breads[box.id]]);
        }
    });
    console.log(order);
    const selectedDiv = document.getElementById('orderDiv');
    selectedDiv.innerHTML = orderString.orderStringBuilder(order);
};

export default { buildOrder }; 