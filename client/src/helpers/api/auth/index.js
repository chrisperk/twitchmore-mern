import { post } from '../';

export const login = body => 
    post('/api/login', body, null);

export const signup = (requestOptions) =>
    post('/api/signup', requestOptions)
        .then(login(requestOptions));