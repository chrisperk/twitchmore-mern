import { post } from '../';

export const saveActiveChannel = body => 
    post('/api/saveActiveChannel', body, null);

export const saveFavoriteChannel = body =>
    post('/api/saveFavoriteChannel', body, null);