// Actions

const UNSELECT_CHANNEL = "UNSELECT_CHANNEL";
const HIDE_CHANNELLIST = "HIDE_CHANNELLIST";
const SHOW_CHANNELLIST = "SHOW_CHANNELLIST";

// Action Creators

export const unselectStream = (targetChannel, activeChannels) => ({
    type: UNSELECT_STREAM,
    payload: {
        targetChannel: targetChannel,
        activeChannels: activeChannels
    }
});

export const HIDE_CHANNELLIST = () => ({
    type: HIDE_CHANNELLIST
});

export const SHOW_CHANNELLIST = () => ({
    type: SHOW_CHANNELLIST
});
