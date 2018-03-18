import React from 'react';
import PropTypes from 'prop-types';

const ChannelDisplay = props => {
    return (
        <div>
            {props.activeChannels.map(channel => 
                <iframe
                    src={`https://player.twitch.tv/?channel=${channel.channel.display_name}&muted=true&autoplay=true&playsinline=true`}
                    height="800px"
                    width="600px"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true"
                />
            )}
        </div>
    );
};

ChannelDisplay.propType = {
    activeChannels: PropTypes.array.isRequired,
    unselectChannel: PropTypes.func.isRequired
}

export default ChannelDisplay;
