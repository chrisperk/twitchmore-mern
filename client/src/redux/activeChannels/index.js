import { SELECT_CHANNEL } from '../search';

// Actions

const UNSELECT_CHANNEL = "UNSELECT_CHANNEL";
const HIDE_CHANNELLIST = "HIDE_CHANNELLIST";
const SHOW_CHANNELLIST = "SHOW_CHANNELLIST";

// Action Creators

export const unselectChannel = (targetChannel, activeChannels) => ({
    type: UNSELECT_CHANNEL,
    payload: {
        targetChannel: targetChannel,
        activeChannels: activeChannels
    }
});

export const hideChannelList = () => ({
    type: HIDE_CHANNELLIST
});

export const showChannelList = () => ({
    type: SHOW_CHANNELLIST
});

// Reducer

const initialState = {
    items: [],
    isShown: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SELECT_CHANNEL:
            const newChannel = action.payload;
            let duplicateCheck = false;

            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i]._id === newChannel._id) {
                    duplicateCheck = true;
                }
            }

            if (!duplicateCheck) {
                if (state.length < 4) {
                    return {
                        ...state,
                        items: state.items.concat([newChannel])
                    };
                } else {
                    return {
                        ...state,
                        items: state.items.filter(channel => state.items.indexOf(channel) !== 3).concat([newChannel])
                    }
                }
            }

            return { ...state };
        
        case UNSELECT_CHANNEL:
            return {
                ...state,
                items: action.payload.activeChannels.filter(active => active._id !== action.payload.targetChannel._id)
            };

        case HIDE_CHANNELLIST:
            return {
                ...state,
                isShown: false
            };

        case SHOW_CHANNELLIST:
            return {
                ...state,
                isShown: true
            };

        default:
            return state;

    }

}

export default reducer;
