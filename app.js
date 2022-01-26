import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';

const app  = express();

const PORT = process.env.PORT || 3000

// Middlewares
app.use(bodyParser.json({
	extended: false
}));
app.use(bodyParser.urlencoded({
	extended: false
}));
// Middleware to serve Static Files
app.use(express.static('public'));
app.use('/auth', express.static('public'))
app.use('/user', express.static('public'))
app.use('/booking', express.static('public'))

app.use(session({
	secret: 'cdm',
	cookie: {
		maxAge: 60000
	},
	resave: true,
	saveUninitialized: true
}))

// Custom middleware to access session data in EJS
app.use(function(req, res, next) {
	req.session.user = {
		id: 1,
    name: 'Admin User',
    email: 'admin@admin.pt',
    rgpd: true,
    role: 'CLIENT'
  }
  res.locals.session = req.session;
  next();
});

// Set Views
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routes
import authRouter from './src/routes/auth.js';
import homeRouter from './src/routes/home.js';
import userRouter from './src/routes/user.js';

app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/auth/*', authRouter);
app.use('/user', userRouter);

app.get('*', (req, res) => {
	res.send("Not Found");
});

app.listen(PORT, () => {
	console.info(`Listening on port ${PORT}`);
});