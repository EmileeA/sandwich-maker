import bread.js from './bread.js';
import cheese.js from './cheese.js';
import condiments.js from './condiments.js';
import veggies.js from './condiments.js';
import meat.jsimport utilities from "../helpers/utilities";
 from './condiments.js';

const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i = 0; i < items.length; i++) {
        domString2 += `<h2>${items[i].name}</h2>`;
    }
    utilities.printToDom('final-order', domString2);
}