require('dotenv').config();
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const routes = require('./routes');
const helpers = require('./utils/helpers');

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + 'public'));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('--- connected to mongoose ---'));

app.use(routes);

app.listen(PORT);
