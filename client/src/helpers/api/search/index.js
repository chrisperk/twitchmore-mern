import { get, requestOptions } from '../';

export const searchByGame = (cursorPosition, searchInput) => {
    get(`https://api.twitch.tv/kraken/search/streams?limit=10&offset=${cursorPosition}&query=${searchInput}`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(`error: ${err}`));
};

export const searchByStreamer = (cursorPosition, searchInput) => {
    get(`https://api.twitch.tv/kraken/search/channels?limit=10&offset=${cursorPosition}&query=${searchText}`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(`error: ${err}`));
};