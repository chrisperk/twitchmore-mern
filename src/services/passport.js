import bcrypt from 'bcrypt';
import passport from 'passport';
import User from '../models/UserModel';
import {
  Strategy as JwtStrategy,
  ExtractJwt
} from 'passport-jwt';
import LocalStrategy from 'passport-local';
import envVars from '../config';

const signinStrategy = new LocalStrategy((username, password, done) => {
    User.findOne({ username }).exec()
        .then(user => {
            if (!user) return done(null, false);

            bcrypt.compare(password, user.password, (error, isMatch) => {
                if (error) return done(error, false);
                if (!isMatch) return done(null, false);
            });

            return done(null, user);
        })
        .catch(error => done(error, false));
});

console.log(envVars);

const jwtOptions = {
    secretOrKey: envVars.SECRET,
    jwtFromRequest: ExtractJwt.fromHeader('authorization')
};

const authStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.userId, function (err, user) {
        if (err) return done(err, false);

        user ?
            done(null, user) :
            done(null, false);
    });
});

passport.use('signinStrategy', signinStrategy);
passport.use('authStrategy', authStrategy);