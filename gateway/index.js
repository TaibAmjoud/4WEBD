const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();


app.use(express.json());
app.use(cors());

app.use('/ticket', proxy('http://localhost:4002'))
app.use('/user', proxy('http://localhost:4003'))
app.use('/', proxy('http://localhost:4001')) // Events


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Gateway is Listening on port ${port}...`));