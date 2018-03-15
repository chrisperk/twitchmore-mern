import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import search from './search';

const initialState = {
    activeUser: '',
    search: {
        searchCriteria: 'game',
        isSearching: false,
        searchText: '',
        searchResults: [],
        cursorPosition: 0,
        totalResults: 0,
        showSearchResults: false,
        error: false,
        errorMessage: null
    },
    activeChannelsList: {
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
    search
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