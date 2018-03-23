import React from 'react';
import PropTypes from 'prop-types';
import './ChannelDisplay.css';

let content;

const ChannelDisplay = props => {
    props.activeChannels.length > 0 ?
        content = (
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
                                <span>&times;</span>
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
        ) :
        content = (
            <div>Click the search button!</div>
        );
    return <div>{content}</div>;
};

ChannelDisplay.propType = {
    activeChannels: PropTypes.array.isRequired,
    unselectChannel: PropTypes.func.isRequired
}

export default ChannelDisplay;
