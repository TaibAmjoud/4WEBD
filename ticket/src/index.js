const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');

const StartServer = async() => {
    
    const app = express();
    app.use(express.json());
    
    await databaseConnection();
    
    await expressApp(app);

    app.listen(PORT, () => console.log(`Event is Listening on port ${PORT}...`));

}

StartServer();