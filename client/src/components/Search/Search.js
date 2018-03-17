import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
    return (
        <div>
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
            <ul style={{ display: props.searchResults.length > 0 ? 'block' : 'none' }}>
                {props.searchResults.map(channel =>
                    <li onClick={event => props.handleSelectChannel(channel, event)}>  
                        {props.searchCriteria === 'game' ? channel.channel.name : channel.name}
                    </li>
                )}
            </ul>
        </div>
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
    // handleRevealChannelsList: PropTypes.func,
    // hideChannelsList: PropTypes.bool,
    // activeChannels: PropTypes.array
};

export default Search;