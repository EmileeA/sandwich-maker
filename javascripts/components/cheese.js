
import utilities from "../helpers/utilities.js"

const cheeseOptions = [
    {id: "swiss", name: "Swiss", price: .75}, 
    {id: "american", name: "American", price: .75}, 
    {id: "provolone", name: "Provolone", price: .75} 
];


const getSelectedCheeses = () => {
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    const selectedCheese = [];
    // you select an empty array because it's creating a bucket (if you will) for them all to go. 
    // console.log(cheeseCheckboxes);
    for(let j = 0; j < cheeseCheckboxes.length; j++) {
        //look through to see what's checked
        // console.log(cheeseCheckboxes [j].checked);
        for(let k = 0; k < cheeseOptions.length; k++) {
            // look through to see what's checked against my cheese array
            if(cheeseCheckboxes[j].checked && cheeseCheckboxes [j].id === cheeseOptions [k].id) {
                //if it's checked and it matches an id in my cheese array by id
                selectedCheese.push(cheeseOptions[k]);
                // then push those selected cheese options into the empty array ("bucket") I created above.
            }
        }
    }
    return selectedCheese;
};


//function for options
const makeOptions = () => {
    // console.log("building cheese options");
    let domString = '<h3>Cheeses</h3>'
    for (let i = 0; i < cheeseOptions.length; i++) {
        domString += `<div class="form-check">
        <input class ="form-check-input cheese" type="checkbox" value="" id="${cheeseOptions[i].id}">
        <label class="form-check-label" for="${cheeseOptions[i].name}">
        ${cheeseOptions[i].name} $ ${cheeseOptions[i].price}
        </label>
    </div>`;
    }
    //after domstring is built then we can "call" it -- we can print to the dom. 
    utilities.printToDom ("cheeses", domString)
    };
    

export default { makeOptions, getSelectedCheeses };