const express = require('express');
const bodyParser = require('body-parser');

const app  = express();

const PORT = process.env.PORT || 3000

app.use(bodyParser.json({
    extended: false
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
// Middleware to serve Static Files
app.use(express.static('public'));

// Set Views
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routes
const homeRouter = require('./src/routes/home');
const authRouter = require('./src/routes/auth');

app.use('/', homeRouter);
app.use('/auth', authRouter);

app.get('*', (req, res) => {
    res.send("Not Found");
});

app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}`);
});