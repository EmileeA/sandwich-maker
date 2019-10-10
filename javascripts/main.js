import bread from './components/bread.js';
import cheese from './components/cheese.js';
import condiments from './components/condiments.js';
import veggies from './components/veggies.js';
import meat from './components/meat.js';
import order from './components/order.js';

const init = () => {
    //do stuff
        cheese.makeOptions();
        condiments.makeOptions();
        veggies.makeOptions();
        bread.makeOptions();
        meat.makeOptions();
        order.printOrderButton();
        // orderListener();

    // 7- making the order btn that will print out the items I check off. I also
    // imported above and made this file in the components folder
    
};  

init();