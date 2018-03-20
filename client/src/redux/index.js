import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import search from './search';
import activeChannels from './activeChannels';

const initialState = {
    auth: {
        activeUser: {
            username: '',
            token: ''
        },
        login: {
            isShown: false,
            username: '',
            password: '',
            isSubmitting: false,
            error: null
        },
        signup: {
            isShown: false,
            username: '',
            password: '',
            isSubmitting: false,
            error: null
        }
    },
    search: {
        searchCriteria: 'game',
        isSearching: false,
        searchText: '',
        searchResults: [],
        cursorPosition: 0,
        totalResults: 0,
        showSearchResults: false,
        error: null
    },
    activeChannels: {
        items: [],
        // activeAudioChannel: null
    }
};

const INIT = 'twitchmore/INIT';

const ui = (state = initialState, action) => {

    switch (action.type) {

        case INIT:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;

    }

};

const reducer = combineReducers({
    ui,
    auth,
    search,
    activeChannels
});
  
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
);
  
export default store;