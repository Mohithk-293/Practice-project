var express = require('express');
var router = express.Router();
const connect=require('../database')

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  connect.query("select * from Student",(err,results)=>{
    if (err) {
      console.log(err)
      res.status(500).send('Error fetching data');
      return;
    }else{
      res.status(200).json(results);
    }
  })
 
});

module.exports = router;
