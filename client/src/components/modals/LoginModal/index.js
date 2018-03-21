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
    handleToggleModal: () => {
        dispatch(toggleLoginModal());
    },
    handleChangeUsername: text => {
        dispatch(changeLoginUsername(text));
    },
    handleChangePassword: text => {
        dispatch(changeLoginPassword(text));
    },
    handlePostCredentials: requestOptions => {
        dispatch(postLoginCredentials(requestOptions));
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Login);