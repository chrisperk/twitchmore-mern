import { connect } from 'react-redux';
import ChannelDisplay from './ChannelDisplay';
import {
    unselectChannel
} from '../../redux/activeChannels';

const mapStateToProps = state => ({
    activeChannels: state.activeChannels.items,
    isSearchShown: state.search.showSearchForm
});

const mapDispatchToProps = dispatch => ({
    unselectChannel: (targetChannel, activeChannels) => {
        dispatch(unselectChannel(targetChannel, activeChannels));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelDisplay);