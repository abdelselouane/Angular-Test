
function sum(a, b) {
    return a + b;
}
function sumObj(a, b){

    return {id: sum(a, b) , quantity:1}
}

module.exports = {
    add: sum,
    getSumObj: sumObj
};