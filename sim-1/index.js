const express = require("express");
const bodyParser = require('body-parser');
const massive  = require('massive');
const cors = require('cors');
require('dotenv').config()
const controller = require('./controller/Controller')

const app = express();
app.use( bodyParser.json());
app.use( cors());
massive( process.env.CONNECTION_STRING).then(db => app.set('db' , db ) );

app.get( '/api/shelf/:id', controller.getAllBins);
app.get( '/api/bin/:id', controller.getBin);
app.put( '/api/bin/:id', controller.updateBin);
app.put( '/api/bin/:id', controller.deleteBin);


const port = 3000
app.listen(port, () => {console.log( `listening on port ${port}`);});






