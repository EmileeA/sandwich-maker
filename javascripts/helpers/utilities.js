//Prints Breads To Dom

const printToDom = (divID, toPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = toPrint;
}

export default {printToDom};

//Now, export this to let other files know about it :)