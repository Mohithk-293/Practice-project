var mysql=require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.db_host, // Replace with Railway host
    user: process.env.db_user, // Replace with Railway user
    password: process.env.db_password, // Replace with Railway password
    database: process.env.db_database, // Replace with Railway database name
    port: process.env.db_port // Replace with Railway port
  });

module.exports=connection;
