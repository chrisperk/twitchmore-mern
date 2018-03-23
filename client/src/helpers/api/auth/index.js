import { post } from '../';

export const login = body => 
    post('/api/login', body, null);

export const signup = body =>
    post('/api/signup', body, null);