import { connect } from 'react-redux';
import Signup from './Signup';
import {
    toggleSignupModal,
    changeSignupUsername,
    changeSignupPassword,
    postSignupCredentials,
    logout
} from '../../../redux/auth';

const mapStateToProps = state => ({
    isShown: state.auth.signup.isShown,
    usernameInput: state.auth.signup.username,
    passwordInput: state.auth.signup.password,
    isSubmitting: state.auth.signup.isSubmitting,
    error: state.auth.signup.error,
    activeUsername: state.auth.activeUser.username
});

const mapDispatchToProps = dispatch => ({

    handleToggleModal: e => {
        e.stopPropagation();

        const modalWrappers = Array.from(document.querySelectorAll('.modal-wrapper'));
        const closeButtons = Array.from(document.querySelectorAll('.close-button'));
        
        if (modalWrappers.includes(e.target) || closeButtons.includes(e.target)) {
            dispatch(toggleSignupModal());
        }
    },

    handleChangeUsername: text => {
        dispatch(changeSignupUsername(text));
    },

    handleChangePassword: text => {
        dispatch(changeSignupPassword(text));
    },

    handlePostCredentials: (event, body) => {
        event.preventDefault();
        dispatch(postSignupCredentials(body));
    },

    handleLogout: () => {
        dispatch(logout());
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Signup);