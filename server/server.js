require('dotenv').config();
const express= require('express');
const massive= require('massive');
const cors = require('cors');
const app = express();

// Database connection
const CONNECTION_STRING = process.env.CONNECTION_STRING
massive({connectionString: CONNECTION_STRING}).then((db)=>app.set('db', db))

// MiddleWare Imports
const session=require('express-session')
const bodyParser = require('body-parser');

// Top Level Middleware
app.use(bodyParser.json())

// Controller Imports
const test_controller = require('./controllers/test_controller')
const auth_controller = require('./controllers/auth_controller')
// EndPoints
//// Test
app.get('/api/test', test_controller.testGet)
app.get('/api/testDB', test_controller.testGetDB)
app.get('/api/testDB/age', test_controller.testGetAgeGreaterThan)
app.post('/api/testDB', test_controller.testGetUser)
//// Auth
app.post('/api/login', auth_controller.login)

// Set server to listen
const port = process.env.SERVER_PORT
app.listen(port, ()=>(console.log(`Rocking port: ${port}`)))
