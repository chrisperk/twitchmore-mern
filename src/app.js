import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import AuthRouter from './routes/AuthRoutes';
import './services/passport';
import path from 'path';
import envVars from './config';

mongoose.Promise = global.Promise;
mongoose
    .connect(envVars.MONGODB_URI || 'mongodb://localhost/twitchmore')
    .then(() => console.log('[mongoose] Connected to MongoDB'))
    .catch(() => console.log('[mongoose] Error connecting to MongoDB'));

const app = express();

const authStrategy = passport.authenticate('authStrategy', { session: false });

app.use(express.static('client/build'));

app.use(bodyParser.json());
app.use(AuthRouter);

app.get('/api/secret', authStrategy, (req, res) => res.send(`The current user is ${req.user.username}`));

app.get('*', (req, res) => res.sendFile('./client/build/index.html'));

const port = envVars.PORT;

app.listen(port, () => console.log(`Listening on port: ${port}`));