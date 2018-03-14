import { searchByGame, searchByStreamer } from '../../helpers/api/search';

// Actions

const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
const CHANGE_SEARCH_CRITERIA = 'CHANGE_SEARCH_CRITERIA';
const GET_SEARCHRESULTS_PENDING = 'GET_SEARCHRESULTS_PENDING';
const GET_SEARCHRESULTS_SUCCESS = 'GET_SEARCHRESULTS_SUCCESS';
const GET_SEARCHRESULTS_ERROR = 'GET_SEARCHRESULTS_ERROR';
const HIDE_SEARCHRESULTS = 'HIDE_SEARCH_RESULTS';
const GET_PREV_TEN = 'GET_PREV_TEN';
const GET_NEXT_TEN = 'GET_NEXT_TEN';

// Action Creators

const changeSearchText = text => ({
    type: CHANGE_SEARCH_TEXT,
    payload: text
});

const changeSearchCriteria = critera => ({
    type: CHANGE_SEARCH_CRITERIA,
    payload: criteria
});

const getSearchResultsPending = () => ({
    type: GET_SEARCHRESULTS_PENDING
});

// Reducer

const initialState = {
    searchCriteria: 'streamer',
    isSearching: false,
    searchText: '',
    searchResults: [],
    currentResultsPosition: 0,
    totalResults: 0,
    showSearchResults: false,
    error: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case CHANGE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            };

        case CHANGE_SEARCH_CRITERIA:
            return {
                ...state,
                searchCriteria: action.payload
            };

        case GET_SEARCHRESULTS_PENDING:
            return {
                ...state,
                isSearching: true
            };
        
        case GET_SEARCHRESULTS_SUCCESS:
            return {
                ...state,
                isSearching: false,
                searchResults: action.payload,
                totalResults: action.payload.length,
                showSearchResults: true
            };

        case GET_SEARCHRESULTS_ERROR:
            return {
                ...state,
                isSearching: false,
                error: true
            };

        case HIDE_SEARCHRESULTS:
            return {
                ...state,
                showSearchResults: false
            };

        case GET_PREV_TEN:
            return {
                ...state,
                currentResultsPosition: action.currentResultsPosition - 10
            }    

        case GET_NEXT_TEN:
            return {
                ...state,
                currentResultsPosition: action.currentResultsPosition + 10
            }

        default:
            return state;

    }

}
