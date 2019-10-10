import utilities from "../helpers/utilities.js"

const condimentOptions = [
    {id: "mayo", name: "Mayo", price: .25}, 
    {id: "greyPoupon", name: "Grey Poupon", price: .25}, 
    {id: "hotsauce", name: "Hot Sauce", price: .25} 
];

const getCondimentOptions = () => {
    return condimentOptions;
}

const getSelectedCondiments = () => {
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    const selectedCondiment = [];
    // you select an empty array because it's creating a bucket (if you will) for them all to go. 
    console.log(condimentCheckboxes);
    for(let j = 0; j < condimentCheckboxes.length; j++) {
        //look through to see what's checked
        console.log(condimentCheckboxes [j].checked);
        for(let k = 0; k < condimentOptions.length; k++) {
            // look through to see what's checked against my cheese array
            if(condimentCheckboxes[j].checked && condimentCheckboxes [j].id === condiment [k].id) {
                //if it's checked and it matches an id in my cheese array by id
                condimentOptions.push(condimentCheckboxes[k]);
                // then push those selected cheese options into the empty array ("bucket") I created above.
            }
        }
    }
    return selectedCondiment;
};



const makeOptions = () => {
    console.log("building condiments options");
    let domString = '<h3>Condiments</h3>'
    for (let i = 0; i < condimentOptions.length; i++) {
        domString += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="${condimentOptions[i].id}">
        <label class="form-check-label" for="${condimentOptions[i].name}">
        ${condimentOptions[i].name} $ ${condimentOptions[i].price}
        </label>
    </div>`
    }
    //after domstring is built then we can "call" it -- we can print to the dom. 
    utilities.printToDom ("condiments", domString)
    };
export default { getCondimentOptions, makeOptions, getSelectedCondiments };
