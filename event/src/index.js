const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');

const StartServer = async() => {
    
    const app = express();
    app.use(express.json());
    
    await databaseConnection();

    
    app.use('/', (req, res) =>{
    return res.status(200).json({"msg":"hello from event"})
    });

    app.listen(PORT, () => console.log(`Event is Listening on port ${PORT}...`));

}

StartServer();