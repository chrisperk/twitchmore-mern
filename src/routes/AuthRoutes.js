import express from 'express';
import jwt from 'jwt-simple';
import User from '../models/UserModel';
import bcrypt from 'bcrypt';
import passport from 'passport';
import '../services/passport';
import envVars from '../config';

const router = express.Router();

const signinStrategy = passport.authenticate('signinStrategy', { session: false });

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode( { userId: user.id, iat: timestamp }, envVars.SECRET);
}

router.post('/api/login', signinStrategy, (req, res) => {
    res.json({ username: req.user.username, token: tokenForUser(req.user) });
});

router.post('/api/signup', (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(422)
            .json({ error: 'You must provide a username and password' });
    }

    User.findOne( { username }).exec()
        .then(existingUser => {
            if (existingUser) return res.status(422).json( { error: 'Username is in use' });

            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) return next(err);

                const user = new User({ username, password: hashedPassword });

                user.save()
                    .then(newUser => res.json({ token: tokenForUser(newUser) }));
            });
        })
        .catch(err => next(err));
});

export default router;