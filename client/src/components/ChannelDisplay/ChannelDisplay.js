import React from 'react';
import PropTypes from 'prop-types';
import './ChannelDisplay.css';

const ChannelDisplay = props => {
    return (
        <div id="mobile-display-space">
            {props.activeChannels.map(channel => {
                return (
                    <div className="channel-wrapper" style={{ height: (() => {
                        switch (props.activeChannels.length) {
                            case 1:
                                return '100%';
                            case 2:
                                return '50%';
                            case 3:
                                return '33.333%';
                            case 4:
                                return '25%';
                            default:
                                return '100%';
                        }
                    })()}}>
                        <div className="close-channel-button" onClick={() =>
                            props.unselectChannel(channel, props.activeChannels)
                        }>
                            <i className="fa fa-times" />
                        </div>
                        <iframe
                            src={`https://player.twitch.tv/?channel=${channel.channel ? channel.channel.display_name : channel.display_name}&muted=true&autoplay=true&playsinline=true`}
                            title={channel.name}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true"
                        />
                    </div>
                );
            })}
        </div>
    );
};

ChannelDisplay.propType = {
    activeChannels: PropTypes.array.isRequired,
    unselectChannel: PropTypes.func.isRequired
}

export default ChannelDisplay;
