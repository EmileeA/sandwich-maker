import bread from './components/bread.js';
import cheese from './components/cheese.js';
import condiments from './components/condiments.js';
import veggies from '.components/veggies.js';
import meats from '.components/meats.js';
import orderBuilder from './components/orderBuilder.js';


const orderListener = () => {
    document.getElementById('order').addEventListener('click', orderBuilder.buildOrder);
}
const init = () => {
    //do stuff
        orderListener();
    // 7- making the order btn that will print out the items I check off. I also
    //imported above and made this file in the components folder
    
};  

init();