"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var mysql = require('mysql');

var cors = require('cors');

var fs = require('fs');

var path = require('path');

var multer = require("multer");

var app = express(); // This middleware is used to enable Cross Origin Resource Sharing This sets Headers to allow access to our client application

app.use(cors()); // Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files

var fileStorageEngine = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "./images"); //important this is a direct path fron our current file to storage location
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  }
});
var upload = multer({
  storage: fileStorageEngine
}); // Set up body parser middleware to parse request bodies

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(cors()); // add this line
// Set up MySQL connection

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'patients'
}); // Connect to MySQL

connection.connect(function (err) {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
  } else {
    console.log('Connected to MySQL');
  }
}); // Define a route for handling POST requests to /users

app.post('/patients', function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      gender = _req$body.gender,
      age = _req$body.age,
      height = _req$body.height,
      weight = _req$body.weight,
      prevmedicalhistory = _req$body.prevmedicalhistory,
      prevsurgicalid = _req$body.prevsurgicalid,
      lifestylehistory = _req$body.lifestylehistory,
      alcoholconsumption = _req$body.alcoholconsumption,
      drinksperweek = _req$body.drinksperweek,
      diagnosis = _req$body.diagnosis,
      yearofdiagnosis = _req$body.yearofdiagnosis,
      currentmedicines = _req$body.currentmedicines,
      priormedicines = _req$body.priormedicines; // Insert new user into the database

  connection.query('INSERT INTO `patient`(`Demographic_id`, `Name`, `Email`, `Gender`, `Age`, `Height`, `Prev_medical_history`, `Prev_surgical_id`, `Lifestyle_history`, `Alchohol_consumtion`, `drinks_per_week`, `diagnosis`, `year_of_diagnosis`, `current_medicines`, `prior_medicines`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [name, email, gender, age, height, weight, prevmedicalhistory, prevsurgicalid, lifestylehistory, alcoholconsumption, drinksperweek, diagnosis, yearofdiagnosis, currentmedicines, priormedicines], function (err, result) {
    if (err) {
      console.error('Error inserting new user: ', err);
      res.status(500).send('Error inserting new user');
    } else {
      console.log('New user inserted into database');
      var user = {
        id: result.insertId,
        name: name,
        email: email
      };
      res.status(201).json(user);
    }
  });
}); // app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   connection.query(
//     'SELECT * FROM `users` WHERE email = `email` && password = `password`;',
//     [email, password],
//     (err,result) => {
//       if (err) {
//         console.error('Error retrieving user: ', err);
//         res.status(500).send('Error retrieving user');
//       } else {
//         console.log('User found in database', email); //remove email in future
//         const user = { id: result.insertId, email };
//         res.status(201).json(user);
//       }
//     }
//   );
// })

app.post('/login', function (req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;
  connection.query('SELECT * FROM `users` WHERE email = ? AND password = ?', [email, password], function (err, result) {
    if (err) {
      console.error('Error retrieving user: ', err);
      res.status(500).send('Error retrieving user');
    } else if (result.length === 0) {
      console.log('Incorrect email or password', email);
      res.status(401).send('Incorrect email or password');
    } else {
      console.log('User found in database', email);
      var user = {
        id: result[0].id,
        email: email
      };
      res.status(200).json(user);
    }
  });
}); // Single File Route Handler

app.post("/uploadpdf", upload.single("file"), function (req, res) {
  console.log(req.file);
  res.send("Single File upload success");
});
/*
app.post('/uploadpdf', (req, res) => {
  const file = req.formdata.title;
  console.log(file);
  connection.query('INSERT INTO `pdf_files`(filename, filedata) VALUES ("hi", ?)',
  [file],
    (err, result) => {
      if (err) {
        console.error('Error inserting new PDF: ', err);
        res.status(500).send('Error inserting new PDF');
      } else {
        console.log('New PDF inserted into database');
        const pdfUser = { id: result.insertId, fileName, file };
        res.status(201).json(pdfUser);
        console.log(file);
      }
    }
  );
})
*/

app.post('/query', function (req, res) {
  console.log("Query endpoint accessed");
  var queryParam = req.body.queryParam;
  connection.query('SELECT * FROM `patient` WHERE Demographic_id = ?', [queryParam], function (err, result) {
    if (err) {
      console.error('Error retrieving patient: ', err);
      res.status(500).send('Error retrieving patient');
    } else if (result.length === 0) {
      console.log('Patient not found with corresponding demographic id', queryParam);
      res.status(401).send('Incorrect demographic id');
    } else {
      console.log('patient found in database', queryParam); // const user = { id: result[0].id, email };

      res.status(200).json(result);
    }
  });
}); // Start the server

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Server listening on port ".concat(port));
});