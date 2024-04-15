const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');

const events = require('./routes/events');

const StartServer = async() => {
    
    const app = express();
   

    await databaseConnection();


    app.use(express.json());
    app.use('/api/events',events);


    app.listen(PORT, () => console.log(`Event is Listening on port ${PORT}...`));

}

StartServer();