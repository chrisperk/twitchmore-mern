import { connect } from 'react-redux';
import Login from './Login';
import {
    toggleLoginModal,
    changeLoginUsername,
    changeLoginPassword,
    postLoginCredentials
} from '../../../redux/auth';

const mapStateToProps = state => ({
    isShown: state.auth.login.isShown,
    usernameInput: state.auth.login.username,
    passwordInput: state.auth.login.password,
    isSubmitting: state.auth.login.isSubmitting,
    error: state.auth.login.error
});

const mapDispatchToProps = dispatch => ({
    handleToggleModal: e => {
        e.stopPropagation();
        console.log(e.target);
        const modalWrappers = Array.from(document.querySelectorAll('.modal-wrapper'));
        const closeButtons = Array.from(document.querySelectorAll('.close-button'));
        console.log(closeButtons.includes(e.target));
        
        if (modalWrappers.includes(e.target) || closeButtons.includes(e.target)) {
            console.log('dispatch');
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
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Login);