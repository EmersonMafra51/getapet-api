const express = require('express');
const cors = require('cors');

const app = express();

//CONFIG JSON RESPONSE
app.use(express.json())

//SOLVE CORS
app.use(cors({credentials:true, origin:'http://localhost:3000'}))

//PUBLIC FOLDER  FOR IMAGES
app.use(express.static('public'))

//ROUTES
const UserRoutes = require('./routes/UserRoutes')
const PetRoutes = require('./routes/PetRoutes')

app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)
app.listen(5000);
