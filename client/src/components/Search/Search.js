import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = props => {
    return (
        <header>
            <nav className="mobile-nav">
                <span className="brand">TwitchMore</span>
                <div className="nav-buttons">
                    <span 
                        className="search-button"
                        onClick={() => props.toggleSearchForm()}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40%" width="40%" viewBox="0 0 512 512">
                            <path d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"/>
                        </svg>
                    </span>
                    {props.activeUsername ?
                        <span className="mobile-active-user"> 
                            <div>
                                {props.activeUsername}&nbsp;
                            </div>
                            <div
                                className="link-button"
                                onClick={() => props.handleLogout()}>
                                (Logout)
                            </div>
                        </span> : 
                        <span onClick={() => props.toggleLoginModal()}>Login</span>}
                </div>
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
    handleLogout: PropTypes.func.isRequired,
    cursorPosition: PropTypes.number,
    showSearchForm: PropTypes.bool.isRequired,
    toggleSearchForm: PropTypes.func.isRequired,
    toggleLoginModal: PropTypes.func.isRequired
    // handleRevealChannelsList: PropTypes.func,
    // hideChannelsList: PropTypes.bool,
    // activeChannels: PropTypes.array
};

export default Search;