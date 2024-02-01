require('dotenv').config({ path: './config.env'})
const express = require('express');
const { connect_db, sequelize_orm } = require('./db_config/db');


const PORT = process.env.PORT;

const app = express();


// Middleware
app.use(express.json());

// -- routes
app.use('/api/auth', require('./routes/user'));


const server = app.listen(PORT, () => console.log(`Listening at http://127.0.0.1:${PORT}`));

process.on('unhandledRejection', (err, promise) => {
    console.error(`Server error: \n ${err}`);
    server.close(() => process.exit(1));
});