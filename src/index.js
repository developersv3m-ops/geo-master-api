require('dotenv').config();

const app = require('./app');

const connectDB = require('./config/db');


// Connect MongoDB

connectDB();


// Start server

app.listen(process.env.PORT, () => {

    console.log(
        `Server Running On Port ${process.env.PORT}`
    );

});
