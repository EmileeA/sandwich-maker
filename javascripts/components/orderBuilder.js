import breadInfo from './bread.js';
// import cheese.js from './cheese.js';
// import condiments.js from './components.js';
// import veggies.js from './components.js';
// import meat.js from './components.js';
// import utilities.js from '..helpers/utilities';
import orderString from '../helpers/orderString.js'

 


const buildOrder = (e) => {
    e.preventDefault();
    //Making my variables
const breads = breadOptions.getBreadOptions();
const order = [];
    let checkBoxes = Array.from(document.getElementsByClassName('form-check-input'));
    checkBoxes.forEach((box) => {
        if (box.checked) {
            console.log(`${box.id} is checked`);
            console.log(`bread.${box.id} returns ${breads[box.id]}`);
            order.push([box.id, breads[box.id]]);
        }
    });
    console.log(order);
    util.printToDom('orderDiv', orderString.orderStringBuilder(order));
};

export default { buildOrder }; 