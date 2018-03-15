import { get, requestOptions } from '../';

export const searchByGame = (cursorPosition, searchText) => {
    get(`https://api.twitch.tv/kraken/search/streams?limit=10&offset=${cursorPosition}&query=${searchText}`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(`error: ${err}`));
};

export const searchByStreamer = (cursorPosition, searchText) => {
    get(`https://api.twitch.tv/kraken/search/channels?limit=10&offset=${cursorPosition}&query=${searchText}`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(`error: ${err}`));
};