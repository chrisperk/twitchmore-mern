import express from 'express';
import jwt from 'jwt-simple';
import User from '../models/UserModel';
import bcrypt from 'bcrypt';
import passport from 'passport';
import '../services/passport';
import envVars from '../config';

const router = express.Router();

router.post('/api/saveActiveStream', (req, res, next) => {
    const { username, channelName } = req.body;
    console.log(channelName);

    User.findOne({ username }).exec()
        .then(existingUser => {
            console.log(existingUser);
            const oldId = existingUser._id;
            console.log(oldId);
            existingUser.activeChannels.push(channelName);
            console.log(existingUser);
            existingUser.save()
                .then(newUser => {
                    console.log(newUser);
                    res.json({ username, activeChannels: newUser.activeChannels })
                });
        })
        .catch(err => next(err));
});

router.post('/api/saveFavoriteStream', (req, res, next) => {
    const { username, channelName } = req.body;

    User.findOne( { username }).exec()
        .then(existingUser => {
            existingUser.favoriteChannels.push(channelName);
            existingUser.update()
                .then(newUser => res.json({ username, favoriteChannels }));
        })
        .catch(err => next(err));
});

export default router;