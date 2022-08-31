const sql = require('mssql');

dbSettings = {
    
    database : 'Northwind',
    dialect : 'mssql',
    dialectOptions : {
        instanceName : 'SQLEXPRESS'
    },
    options : {
        encrypt : true,
        trustServerCertificate : true
    }
}

async function getConnection(){
    const pool = await sql.connect(dbSettings);
        
    return pool; 
    

}

getConnection(); 


 module.exports = {getConnection, sql}