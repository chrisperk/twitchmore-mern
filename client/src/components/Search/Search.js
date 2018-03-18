import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = props => {
    return (
        <header>
            <nav className="mobile-nav">
                <span className="brand">TwitchMore</span>
                <span 
                    className="menu-button"
                    onClick={() => props.toggleSearchForm()}>
                    <i class="fas fa-search"></i>
                </span>
            </nav>
            <div className={props.showSearchForm ? "mobile-search-container visible" : "mobile-search-container" }>
                <form 
                    onSubmit={
                        event => {
                            event.preventDefault();
                            props.handleSearchSubmit(props.searchCriteria, props.cursorPosition, props.searchText);
                        }
                    }>
                    <select
                        placeholder="Game"
                        value={props.searchCriteria}
                        onChange={event => props.handleCriteriaChange(event.target.value)}>
                        <option value="game">Game</option>
                        <option value="streamer">Streamer</option>
                    </select>
                    <input 
                        type="text" 
                        value={props.searchText}
                        placeholder={`Enter ${props.searchCriteria}...`}
                        onChange={event => props.handleTextChange(event.target.value)} />
                    <input type="submit" />
                </form>
                <div 
                    className="results-wrapper"
                    style={{ display: props.searchResults.length > 0 ? 'flex' : 'none' }}>
                    <div className="results-scroll">
                        <div>Prev</div>
                        <div className="search-results">
                            {props.searchResults.map(channel =>
                                <div 
                                    key={channel._id}
                                    className="search-result"
                                    onClick={event => props.handleSelectChannel(channel, event)}>  
                                    <span>{channel.channel ? channel.channel.name : channel.name}</span>
                                    <span>{channel.game}</span>
                                </div>
                            )}
                        </div>
                        <div>Next</div>
                    </div>
                    <div className="hide-results-button">Hide</div>
                </div>
            </div>
        </header>
    );
};

Search.propTypes = {
    searchCriteria: PropTypes.string.isRequired,
    searchText: PropTypes.string.isRequired,
    searchResults: PropTypes.array,
    // lastSearchCriteria: PropTypes.string,
    handleCriteriaChange: PropTypes.func.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    handleSearchSubmit: PropTypes.func.isRequired,
    handleSelectChannel: PropTypes.func.isRequired,
    cursorPosition: PropTypes.number,
    showSearchForm: PropTypes.bool.isRequired,
    toggleSearchForm: PropTypes.func.isRequired
    // handleRevealChannelsList: PropTypes.func,
    // hideChannelsList: PropTypes.bool,
    // activeChannels: PropTypes.array
};

export default Search;