const data = require('../Data/data'); 

async function getOrders(){
    return data.getOrders();
}

async function getOrderbyId(id){
    return data.getOrderbyId(id);
}

module.exports = {getOrders, getOrderbyId}