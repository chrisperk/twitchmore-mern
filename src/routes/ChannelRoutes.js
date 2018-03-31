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

    User.findOne({ username }).exec()
        .then(existingUser => {
            existingUser.activeChannels.push(channelName);
            existingUser.save()
                .then(updatedUser => 
                    res.json({ username, activeChannels: updatedUser.activeChannels })
                );
        })
        .catch(err => next(err));
});

router.post('/api/saveFavoriteStream', (req, res, next) => {
    const { username, channelName } = req.body;

    User.findOne( { username }).exec()
        .then(existingUser => {
            existingUser.favoriteChannels.push(channelName);
            existingUser.save()
                .then(updatedUser => 
                    res.json({ username, favoriteChannels: updatedUser.favoriteChannels }))
                ;
        })
        .catch(err => next(err));
});

export default router;