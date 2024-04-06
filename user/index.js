const express = require('express');
const app = express();


app.use(express.json());
app.use('/', (req, res) =>{
    return res.status(200).json({"msg":"hello from user"})
} );


const port = process.env.PORT || 4003;
app.listen(port, () => console.log(`User is Listening on port ${port}...`));