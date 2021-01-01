const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors())


app.listen(3333);