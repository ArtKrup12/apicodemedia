const express = require('express')
const { sequelize } = require('./model');
const app = express() ;
const cors = require('cors')
app.use(express.json())
sequelize.sync({ alter: true }).then(() => {
    console.log('Database & tables created!');
}).catch((err) => {
    console.error('Error syncing database:', err);
});


app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }));

//authen
const user = require('./routes/userRoutes')
const lession = require('./routes/lessionRoutes')

app.use('/user',user)
app.use('/lession',lession)

// require('./cronjob/main');

module.exports = app

