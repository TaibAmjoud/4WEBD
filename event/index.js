const express = require('express');
const app = express();


app.use(express.json());
app.use('/', (req, res) =>{
    return res.status(200).json({"msg":"hello from event"})
} );


const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Event is Listening on port ${port}...`));