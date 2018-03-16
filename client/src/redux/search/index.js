import { searchByGame, searchByStreamer } from '../../helpers/api/search';

// Actions

const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
const CHANGE_SEARCH_CRITERIA = 'CHANGE_SEARCH_CRITERIA';
const GET_SEARCHRESULTS_PENDING = 'GET_SEARCHRESULTS_PENDING';
const GET_SEARCHRESULTS_SUCCESS = 'GET_SEARCHRESULTS_SUCCESS';
const GET_SEARCHRESULTS_ERROR = 'GET_SEARCHRESULTS_ERROR';
const HIDE_SEARCHRESULTS = 'HIDE_SEARCHRESULTS';
const GET_PREV_SEARCHRESULTS = 'GET_PREV_SEARCHRESULTS';
const GET_NEXT_SEARCHRESULTS = 'GET_NEXT_SEARCHRESULTS';

// Action Creators

export const changeSearchText = text => ({
    type: CHANGE_SEARCH_TEXT,
    payload: text
});

export const changeSearchCriteria = (criteria) => ({
    type: CHANGE_SEARCH_CRITERIA,
    payload: criteria
});

const hideSearchResults = () => ({
    type: HIDE_SEARCHRESULTS
});

const getSearchResultsPending = () => ({
    type: GET_SEARCHRESULTS_PENDING
});

const getSearchResultsSuccess = results => ({
    type: GET_SEARCHRESULTS_SUCCESS,
    payload: results
});

const getSearchResultsError = error => ({
    type: GET_SEARCHRESULTS_ERROR,
    payload: error
});

export const fetchStreamsByGame = (cursorPosition, searchText) =>
    dispatch => {
        dispatch(getSearchResultsPending());
        return searchByGame(cursorPosition, searchText)
            .then(res => dispatch(getSearchResultsSuccess(res.streams)))
            .catch(err => dispatch(getSearchResultsError(err)))
    };

export const fetchStreamsByStreamer = (cursorPosition, searchText) =>
    dispatch => {
        dispatch(getSearchResultsPending());
        return searchByStreamer(cursorPosition, searchText)
            .then(res => dispatch(getSearchResultsSuccess(res.streams)))
            .catch(err => dispatch(getSearchResultsError(err)));
    };

const getNextSearchResults = cursorPosition => ({
    type: GET_NEXT_SEARCHRESULTS,
    payload: cursorPosition
});

const getPrevSearchResults = cursorPosition => ({
    type: GET_PREV_SEARCHRESULTS,
    payload: cursorPosition
});

export const fetchNextSearchResults = (criteria, searchText, cursorPosition) =>
    dispatch => {
        dispatch(getNextSearchResults());
        dispatch(getSearchResultsPending());
        const newCursorPosition = cursorPosition + 10;        

        switch (criteria) {
            case 'game':                
                return searchByGame(newCursorPosition)
                    .then(res => dispatch(getSearchResultsSuccess(res.data)))
                    .catch(err => dispatch(getSearchResultsError(err)));
            
            case 'streamer':
                return searchByStreamer(newCursorPosition)
                    .then(res => dispatch(getSearchResultsSuccess(res.data)))
                    .catch(err => dispatch(getSearchResultsError(err)));
        }
    }

export const fetchPrevSearchResults = (criteria, searchText, cursorPosition) =>
    dispatch => {
        dispatch(getPrevSearchResults());
        dispatch(getSearchResultsPending());
        const newCursorPosition = cursorPosition - 10;        

        switch (criteria) {
            case 'game':                
                return searchByGame(newCursorPosition)
                    .then(res => dispatch(getSearchResultsSuccess(res.data)))
                    .catch(err => dispatch(getSearchResultsError(err)));
            
            case 'streamer':
                return searchByStreamer(newCursorPosition)
                    .then(res => dispatch(getSearchResultsSuccess(res.data)))
                    .catch(err => dispatch(getSearchResultsError(err)));
        }
    }

// Reducer

const initialState = {
    searchCriteria: 'game',
    isSearching: false,
    searchText: '',
    searchResults: [],
    cursorPosition: 0,
    totalResults: 0,
    showSearchResults: false,
    error: false,
    errorMessage: null
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
                error: true,
                errorMessage: action.payload
            };

        case HIDE_SEARCHRESULTS:
            return {
                ...state,
                showSearchResults: false
            };

        case GET_PREV_SEARCHRESULTS:
            return {
                ...state,
                cursorPosition: action.payload - 10
            }    

        case GET_NEXT_SEARCHRESULTS:
            return {
                ...state,
                cursorPosition: action.payload + 10
            }

        default:
            return state;

    }

}

export default reducer;
