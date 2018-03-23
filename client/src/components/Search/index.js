import { connect } from 'react-redux';
import Search from './Search';
import {
    changeSearchText,
    changeSearchCriteria,
    fetchStreamsByGame,
    fetchStreamsByStreamer,
    selectChannel,
    hideSearchResults,
    toggleSearchForm
} from '../../redux/search';
import { 
    toggleLoginModal,
    toggleSignupModal,
    logout
} from '../../redux/auth';

const mapStateToProps = state => ({
    searchText: state.search.searchText,
    searchPlaceholder: state.search.searchPlaceholder,
    searchCriteria: state.search.searchCriteria,
    searchResults: state.search.searchResults,
    cursorPosition: state.search.cursorPosition,
    showSearchForm: state.search.showSearchForm,
    showSearchResults: state.search.showSearchResults,
    activeUsername: state.auth.activeUser.username
});

const mapDispatchToProps = dispatch => ({

    handleTextChange: text => {
        dispatch(changeSearchText(text));
    },

    handleCriteriaChange: criteria => {
        dispatch(changeSearchCriteria(criteria));
    },

    handleSearchSubmit: (criteria, cursorPosition, searchText) => {

        switch (criteria) {

            case 'game':
                dispatch(fetchStreamsByGame(cursorPosition, searchText));
                break;

            case 'streamer':
                dispatch(fetchStreamsByStreamer(cursorPosition, searchText));
                break;

            default:
                return;        
        }
    },

    handleSelectChannel: channel => {
        dispatch(selectChannel(channel));
    },

    hideSearchResults: () => {
        dispatch(hideSearchResults());
    },

    toggleSearchForm: () => {
        dispatch(toggleSearchForm());
    },

    toggleLoginModal: () => {
        dispatch(toggleLoginModal());
    },

    toggleSignupModal: () => {
        dispatch(toggleSignupModal());
    },

    handleLogout: () => {
        dispatch(logout());
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Search);