const printToDom = (divID, toPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = toPrint;
}


export default {printToDom};