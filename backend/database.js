var mysql=require('mysql2');

const connection = mysql.createConnection({
    host: 'autorack.proxy.rlwy.net', // Replace with Railway host
    user: 'root', // Replace with Railway user
    password: 'dYUGuPqVOFXjsFHtUrqqNpDrzCIsMLBB', // Replace with Railway password
    database: 'railway', // Replace with Railway database name
    port: 30882 // Replace with Railway port
  });

module.exports=connection;
