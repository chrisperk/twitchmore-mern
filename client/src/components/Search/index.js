import { connect } from 'react-redux';
import Search from './Search';
import {
    changeSearchText,
    changeSearchCriteria,
    fetchStreamsByGame,
    fetchStreamsByStreamer,
    selectStream
} from '../../redux/search';

const mapStateToProps = state => ({
    searchText: state.search.searchText,
    searchPlaceholder: state.search.searchPlaceholder,
    searchCriteria: state.search.searchCriteria,
    searchResults: state.search.searchResults,
    cursorPosition: state.search.cursorPosition
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
        }
    },
    handleSelectStream: stream => {
        dispatch(selectStream(stream));
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Search);