
var express = require('express');
var path = require('path');
const cors = require('cors');
const app = express();
const connection=require('./database')
const { spawn } = require('child_process');
const userRoute=require('./routes/users')
 
require('dotenv').config({path:'../.env'});


connection.connect((err) => {
  if (err) {
    console.log(err);
    console.error('Error connecting to the database:');
  } else {
    console.log('Connected to the database!');
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user',userRoute)

console.log("helllooo");

app.get('/',(req,res)=>{
  res.send("hiii babe");
});

app.get('/api/msg',(req,res)=>{
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error('Database query error:', err); // Log the error for debugging
      return res.status(500).json({ error: 'Failed to fetch data from database' });
    }
    console.log(results[0].Name);
    res.status(200).json(results); // Send the query results as JSON
  });
});

app.post("/predict",(req,res)=>{
  const { rooms } = req.body;  // Number of rooms from the front-end

  // Run the Python script to get prediction
  const python = spawn('python', ['models/predict.py', rooms]);

  console.log(process.env.API_KEY);

  python.stdout.on('data', (data) => {
    const prediction = data.toString();
    res.json({ predictedPrice: prediction });
  });

  python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
})

// app.get('/api/msg',(req,res)=>{
//   res.json({message:"hello Mohith"})
// })


app.listen(5000,()=>{
  console.log("running on port 5000");
})

module.exports = app;
