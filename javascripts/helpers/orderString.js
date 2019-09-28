const orderStringBuilder = (orderArray) => {
    let orderString = '';

    orderArray.forEach(item => {
       orderString += `<p>${item[0]}: $${item[1]}</p>`; 
    });

    return orderString;
};

export default { orderStringBuilder };