const sql = require('mssql');

dbSettings = {
    user : 'felis',
    password : 'feli1234',
    server : 'localhost',
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