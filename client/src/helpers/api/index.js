import fetchPonyfill from 'fetch-ponyfill';

const {
    fetch,
} = fetchPonyfill();

export const get = (url, options) => 
    fetch(url, { ...options })
        .then(res => res.json())
        .catch(err => console.log(`error: ${err}`));

export const post = (url, body, options) =>
    fetch(url, { ...options, body })
        .then(res => res.json())
        .catch(err => console.log(`error: ${err}`));
    
export const put = (url, body, options) =>
    fetch(url, { ...options, body })
        .then(res => res.json())
        .catch(err => console.log(`error: ${err}`));

export const requestOptions = {
    headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': process.env.REACT_APP_SECRET
    }
}