//Prints Breads To Dom

const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
};

export default { printToDom };

//Now, export this to let other files know about it :)