const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require("multer");
const bcrypt = require('bcrypt');

const app = express();


// This middleware is used to enable Cross Origin Resource Sharing This sets Headers to allow access to our client application
app.use(cors());

// Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./files"); //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

//const upload = multer({ storage: fileStorageEngine });

const upload = multer();

// Set up body parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(cors()); // add this line


// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'patients'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Define a route for handling POST requests to /users
app.post('/patients', (req, res) => {
  const { name, email, age, height, weight, prevmedicalhistory, prevsurgicalid, lifestylehistory, alcoholconsumption, drinksperweek, diagnosis, yearofdiagnosis, currentmedicines, priormedicines } = req.body;
  const gender = req.body.gender;

  console.log(gender);
  // Insert new user into the database
  connection.query(
    'INSERT INTO `patient`(`Demographic_id`, `Name`, `Email`, `Gender`, `Age`, `Height`,`Weight`, `Prev_medical_history`, `Prev_surgical_id`, `Lifestyle_history`, `Alchohol_consumtion`, `drinks_per_week`, `diagnosis`, `year_of_diagnosis`, `current_medicines`, `prior_medicines`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [email, name,email,gender, age, height, weight, prevmedicalhistory, prevsurgicalid, lifestylehistory, alcoholconsumption, drinksperweek, diagnosis, yearofdiagnosis, currentmedicines, priormedicines],
    (err, result) => {
      if (err) {
        console.error('Error inserting new user: ', err);
        res.status(500).send('Error inserting new user');
      } else {
        console.log('New user inserted into database');
        const user = { id: result.insertId, name, email };
        res.status(201).json(user);
      }
    }
  );
});

app.post('/register', async (req, res) => { 
  const { email, password } = req.body;
  
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Store the hashed password in your database
    // ...
    connection.query(
      'INSERT INTO users (email,password) VALUES (?,?)',
      [email, hashedPassword],
      (err,result) => {
        if (err) {
          console.error('Error creating user: ', err);
          res.status(500).send('Error creating user');
        } else if (result.length === 0) {
          console.log('Incorrect email or password', email);
          res.status(401).send('Incorrect email or password');
        } else {
          console.log('User created in database', email);
        }
      }
    );
    res.status(200).send('Registration successful!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
})

app.post('/login', async (req, res) => { 
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';
  const password_form = password;
  console.log(password_form);

  // Execute the query, passing the email value as a parameter
  connection.query(sql, [email], function (error, results, fields) {    
    if (error) throw error;

    // Check if any results were returned
    if (results.length > 0) {
      // Extract the password column from the query result
      const password = results[0].password;
      const user = { id: results[0].id, email };
      console.log(`The password for email ${email} is ${password}`);
      
      // Compare the hashed password from the form with the hashed password from the database
      bcrypt.compare(password_form, password, function(err, result) {
        if (err) {
          // Handle error
          console.error(err);
        } else if (result) {
          // Passwords match
          console.log('Passwords match');
          // Do something with the user variable here
          res.status(200).json("test");
        } else {
          // Passwords do not match
          console.log('Passwords do not match')
          res.status(500).send("Password Error");
        }
      });
    } else {
      console.log(`No password found for email ${email}`);
    }
  });
});


app.post('/uploadpdf', upload.single('pdfFile'), (req, res) => {
  const fileBuffer = req.file.buffer;
  const patientName = req.body.patientName;
  const patientId = req.body.patientId;
  const formName = req.body.formName;

  const sql = 'INSERT INTO pdf_files (patient_id, form_name, file_data, patient_name, date_uploaded) VALUES (?,?,?,?,NOW())';

  connection.query(sql, [patientId, formName, fileBuffer, patientName], (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error uploading file');
    } else {
      res.json({ insertId: results.insertId });
    }
  });
});

// Returns all information about a patient - passed ID
app.post('/query', (req, res) => {
  console.log("Query endpoint accessed");
  const { queryParam } = req.body;

  connection.query('SELECT * FROM `patient` WHERE Demographic_id = ?', [queryParam], (err, result) => {
    if (err) {
      console.error('Error retrieving patient: ', err);
      res.status(500).send('Error retrieving patient');
    } else if (result.length === 0) {
      console.log('Patient not found with corresponding demographic id', queryParam);
      res.status(401).send('Incorrect demographic id');
    } else {
      console.log('patient found in database', queryParam);
      // const user = { id: result[0].id, email };
      res.status(200).json(result);
    }
  }
)});

// Query patient forms
app.post('/queryForms', (req, res) => {
  console.log('query forms endpoint reached');
  const { queryParam } = req.body;

  connection.query('SELECT * FROM `pdf_files` WHERE patient_id = ?', [queryParam], (err, result) => {
    if (err) {
      console.error('Error retrieving patient forms: ', err);
      res.status(500).send('Error retrieving patient forms');
    } else if (result.length === 0) {
      console.log('Patient forms not found with corresponding demographic id', queryParam);
      res.status(401).send('Incorrect demographic id');
    } else {
      console.log('patient forms found in database', queryParam);
      // const user = { id: result[0].id, email };
      res.status(200).json(result);
    }
  }
)});

// Delete a form with the given ID
app.delete('/api/forms/:id', (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM pdf_files WHERE id = ?', id, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Form not found');
    } else {
      res.sendStatus(204);
    }
  });
});

// Update a patient Record
app.put('/api/patients/:id', (req, res) => {
  const id = req.params.id;
  const updatedPatient = req.body;

  connection.query("UPDATE patient SET Name = ?, Email = ?, Gender = ?, Age = ?, Height = ?, Weight = ?, Prev_medical_history = ?, Prev_surgical_id = ?, Lifestyle_history = ?, Alchohol_consumtion = ?, drinks_per_week = ?, diagnosis = ?, year_of_diagnosis = ?, current_medicines = ?, prior_medicines = ? WHERE Demographic_id = ?", [updatedPatient.Name, updatedPatient.Email, updatedPatient.Gender, updatedPatient.Age, updatedPatient.Height, updatedPatient.Weight, updatedPatient.Prev_medical_history, updatedPatient.Prev_surgical_id, updatedPatient.Lifestyle_history, updatedPatient.Alchohol_consumtion, updatedPatient.drinks_per_week, updatedPatient.diagnosis, updatedPatient.year_of_diagnosis, updatedPatient.current_medicines, updatedPatient.prior_medicines, id], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    } else if (result.affectedRows === 0) {
      res.status(401).send('Patient not found');
    } else {
      res.sendStatus(200);
    }
  });
});


// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

