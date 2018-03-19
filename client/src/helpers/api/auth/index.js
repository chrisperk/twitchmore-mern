import { post } from '../';

export const login = (requestOptions) => 
    post('/api/login', requestOptions);

export const signup = (requestOptions) =>
    post('/api/signup', requestOptions)
        .then(login(requestOptions));