import utilities from "../helpers/utilities.js";

const veggieOptions = [
  { id: "lettuce", name: "Lettuce", price: 0.5 },
  { id: "tomato", name: "Tomato", price: 0.5 },
  { id: "onion", name: "Onion", price: 0.5 }
];

const getVeggieOptions = () => {
  return veggieOptions;
};

const getSelectedVeggies = () => {
  const veggieCheckboxes = document.getElementsByClassName('veggies');
  const selectedVeggie = [];
  // you select an empty array because it's creating a bucket (if you will) for them all to go. 
  console.log(veggieCheckboxes);
  for(let j = 0; j < veggieCheckboxes.length; j++) {
      //look through to see what's checked
      console.log(veggieCheckboxes [j].checked);
      for(let k = 0; k < veggieCheckboxes.length; k++) {
          // look through to see what's checked against my cheese array
          if(veggieCheckboxes[j].checked && veggieCheckboxes [j].id === veggieOptions [k].id) {
              //if it's checked and it matches an id in my cheese array by id
              veggieOptions.push(veggieCheckboxes[k]);
              // then push those selected cheese options into the empty array ("bucket") I created above.
          }
      }
  }
  return selectedVeggie;
};

//function for options
const makeOptions = () => {
  console.log("building Veggie options");
  let domString = "<h3>Veggies</h3>";
  for (let i = 0; i < veggieOptions.length; i++) {
    domString += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="${veggieOptions[i].id}">
        <label class="form-check-label" for="${veggieOptions[i].name}">
        ${veggieOptions[i].name} $ ${veggieOptions[i].price}
        </label>
    </div>`;
  }
  //after domstring is built then we can "call" it -- we can print to the dom.
  utilities.printToDom("veggies", domString);
};

export default { getVeggieOptions, makeOptions, getSelectedVeggies };
