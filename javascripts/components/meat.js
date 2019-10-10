import utilities from "../helpers/utilities.js";

const meatOptions = [
  { id: "ham", name: "Ham", price: 2.0 },
  { id: "turkey", name: "Turkey", price: 2.0 },
  { id: "tofurky", name: "Tofurky", price: 1.0 }
];

const getMeatOptions = () => {
  return meatOptions;
};

const getSelectedMeats = () => {
  const meatCheckboxes = document.getElementsByClassName('meats');
  const selectedMeat = [];
  // you select an empty array because it's creating a bucket (if you will) for them all to go. 
  console.log(meatCheckboxes);
  for(let j = 0; j < meatCheckboxes.length; j++) {
      //look through to see what's checked
      console.log(meatCheckboxes [j].checked);
      for(let k = 0; k < meatCheckboxes.length; k++) {
          // look through to see what's checked against my cheese array
          if(meatCheckboxes[j].checked && meatCheckboxes [j].id === meatOptions [k].id) {
              //if it's checked and it matches an id in my cheese array by id
              meatOptions.push(meatCheckboxes[k]);
              // then push those selected cheese options into the empty array ("bucket") I created above.
          }
      }
  }
  return selectedMeat;
};





//function for options
const makeOptions = () => {
  console.log("building meat options");
  let domString = "<h3>Meats</h3>";
  for (let i = 0; i < meatOptions.length; i++) {
    domString += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="${meatOptions[i].id}">
        <label class="form-check-label" for="${meatOptions[i].name}">
        ${meatOptions[i].name} $ ${meatOptions[i].price}
        </label>
    </div>`;
  }
  //after domstring is built then we can "call" it -- we can print to the dom.
  utilities.printToDom("meats", domString);
};

export default { getMeatOptions, makeOptions, getSelectedMeats };
