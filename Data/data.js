const con = require('./conexion');

async function getOrders(){
    const pool = await con.getConnection();
    const orders = await pool
                        .request()
                        .query("SELECT * FROM Orders");
    console.log(orders.recordset);
    
    return orders;
}

async function getOrderbyId(id){
    const pool = await con.getConnection();
    const order = await pool
                        .request()
                        .input("OrderId", con.sql.Int, id)
                        .execute('DetailsYCuenta');
                        
                       
    console.log(order); 
      
  
   
    return order.recordset;
}

module.exports = {getOrders, getOrderbyId} 