import { connect } from 'react-redux';
import Login from './Login';
import {
    toggleLoginModal,
    changeLoginUsername,
    changeLoginPassword,
    postLoginCredentials,
    logout
} from '../../../redux/auth';

const mapStateToProps = state => ({
    isShown: state.auth.login.isShown,
    usernameInput: state.auth.login.username,
    passwordInput: state.auth.login.password,
    isSubmitting: state.auth.login.isSubmitting,
    error: state.auth.login.error,
    activeUsername: state.auth.activeUser.username
});

const mapDispatchToProps = dispatch => ({

    handleToggleModal: e => {
        e.stopPropagation();

        const modalWrappers = Array.from(document.querySelectorAll('.modal-wrapper'));
        const closeButtons = Array.from(document.querySelectorAll('.close-button'));
        
        if (modalWrappers.includes(e.target) || closeButtons.includes(e.target)) {
            dispatch(toggleLoginModal());
        }
    },

    handleChangeUsername: text => {
        dispatch(changeLoginUsername(text));
    },

    handleChangePassword: text => {
        dispatch(changeLoginPassword(text));
    },

    handlePostCredentials: (event, body) => {
        event.preventDefault();
        dispatch(postLoginCredentials(body));
    },

    handleLogout: () => {
        dispatch(logout());
    }
    
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Login);