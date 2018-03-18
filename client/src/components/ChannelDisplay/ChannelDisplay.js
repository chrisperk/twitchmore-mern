import React from 'react';
import PropTypes from 'prop-types';
import './ChannelDisplay.css';

const ChannelDisplay = props => {
    return (
        <div id="mobile-display-space">
            {props.activeChannels.map(channel => {
                if (props.activeChannels.length === 1) {
                    return (
                        <iframe
                            src={`https://player.twitch.tv/?channel=${channel.channel.display_name}&muted=true&autoplay=true&playsinline=true`}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true"
                        />
                    );
                }
                if (props.activeChannels.length === 2) {
                    return (
                        <iframe
                            src={`https://player.twitch.tv/?channel=${channel.channel.display_name}&muted=true&autoplay=true&playsinline=true`}
                            height="50%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true"
                        />
                    );
                } 
                if (props.activeChannels.length === 3) {
                    return (
                        <iframe
                            src={`https://player.twitch.tv/?channel=${channel.channel.display_name}&muted=true&autoplay=true&playsinline=true`}
                            height="33.333%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true"
                        />
                    );
                }
                if (props.activeChannels.length === 4) {
                    return (
                        <iframe
                            src={`https://player.twitch.tv/?channel=${channel.channel.display_name}&muted=true&autoplay=true&playsinline=true`}
                            height="25%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true"
                        />
                    );
                }
            })}
        </div>
    );
};

ChannelDisplay.propType = {
    activeChannels: PropTypes.array.isRequired,
    unselectChannel: PropTypes.func.isRequired
}

export default ChannelDisplay;
