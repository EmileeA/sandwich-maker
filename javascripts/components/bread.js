import utilities from "../helpers/utilities.js";

const breadOptions = [
  { id: "white", name: "White", price: 1.25 },
  { id: "wheat", name: "Wheat", price: 1.25 },
  { id: "sourdough", name: "Sourdough", price: 1.75 }
];

//function to return return out one single item
const getSelectedBreads = () => {
  //get all bread checkboxes (give domstring a class of bread)
  const breadCheckboxes = document.getElementsByClassName('bread');
  const selectedBread = [];
  // console.log(breadCheckboxes);
  //keep the checked ones in a new array (we are using "j" because we have another for loop using "i")
  for(let j = 0; j < breadCheckboxes.length; j++) {
    // console.log(breadCheckboxes[j].checked);
    for(let k = 0; k < breadOptions.length; k++) {
      if(breadCheckboxes[j].checked && breadCheckboxes[j].id === breadOptions [k].id){
              selectedBread.push(breadOptions[k]);
          }
      }
  }
  return selectedBread;
};

//function for options
const makeOptions = () => {
  // console.log("building bread options");
  let domString = "<h3>Bread</h3>";
  for (let i = 0; i < breadOptions.length; i++) {
    domString += `<div class="form-check">
    <input class="form-check-input bread" type="checkbox" value="" id="${breadOptions[i].id}">
    <label class="form-check-label" for="${breadOptions[i].name}">
    ${breadOptions[i].name} $ ${breadOptions[i].price}
    </label>
</div>`;
  }
  //after domstring is built then we can "call" it -- we can print to the dom.
  utilities.printToDom("breads", domString);
};

export default { makeOptions, getSelectedBreads};
