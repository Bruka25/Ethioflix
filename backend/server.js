const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Parse JSON request bodies
//app.use(bodyParser.json());

// MySQL connection configuration
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'ethioflix',
  password: 'Bruka-25',
  database: 'ethioflix'
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as id', connection.threadId);
});

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/signup', (req, res) => {
  // Extract user data from JSON request body
  console.log(req.body); // <--- Add this line
  const { name, email, password } = req.body;

  
  if (!name ||!email ||!password) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  // Insert user data into 'users' table
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  connection.query(query, [name, email, password], (error, results, fields) => {
    if (error) {
      console.error('Error inserting user data:', error);
      // Handle error - e.g., display error message to user
      res.status(500).json({ error: 'Error signing up. Please try again later.' });
      return;
    }
    // User signed up successfully
    res.status(200).json({ message: 'Sign-up successful!' });
  });
});

app.post('/login', (req, res) => {
    const { name, password } = req.body;
  
    // Query the database to find the user with the provided email and password
    const query = 'SELECT * FROM users WHERE name = ? AND password = ?';
    connection.query(query, [name, password], (error, results, fields) => {
      if (error) {
        console.error('Error querying the database:', error);
        res.status(500).json({ error: 'Error logging in. Please try again later.' });
        return;
      }
  
      // If the user is not found, return an error message
      if (!results.length) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      // If the user is found, return a success message
      res.status(200).json({ message: 'Login successful' });
    });
  });



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`);
});
