import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {
    activeUser: '',
    searchForm: {
        searchCriteria: 'streamer',
        placeholder: 'Enter streamer',
        isSearching: false,
        searchText: '',
        searchResults: [],
        currentResultsPosition: 0,
        totalResults: 0,
        showSearchResults: false,
        error: false
    },
    activeChannelsList: {
        items: [],
        activeAudioChannel: null
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
    ui
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