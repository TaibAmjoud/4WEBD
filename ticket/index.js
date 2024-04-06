const express = require('express');
const app = express();


app.use(express.json());
app.use('/', (req, res) =>{
    return res.status(200).json({"msg":"hello from ticket"})
} );


const port = process.env.PORT || 4002;
app.listen(port, () => console.log(`Ticket is Listening on port ${port}...`));