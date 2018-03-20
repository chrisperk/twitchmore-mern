import { login, signup } from '../../helpers/api/auth';

// Actions

const TOGGLE_LOGIN_MODAL = "TOGGLE_LOGIN_MODAL";
const CHANGE_LOGIN_USERNAME = "CHANGE_LOGIN_USERNAME";
const CHANGE_LOGIN_PASSWORD = "CHANGE_LOGIN_USERNAME";
const SUBMIT_LOGIN_PENDING = "SUBMIT_LOGIN_CREDENTIALS";
const SUBMIT_LOGIN_SUCCESS = "SUBMIT_LOGIN_SUCCESS";
const SUBMIT_LOGIN_ERROR = "SUBMIT_LOGIN_ERROR";

const TOGGLE_SIGNUP_MODAL = "TOGGLE_SIGNUP_MODAL";
const CHANGE_SIGNUP_USERNAME = "CHANGE_SIGNUP_USERNAME";
const CHANGE_SIGNUP_PASSWORD = "CHANGE_SIGNUP_PASSWORD";
const SUBMIT_SIGNUP_CREDENTIALS = "CHANGE_SIGNUP_CREDENTIALS";

// Action Creators

export const toggleLoginModal = () => ({
    type: TOGGLE_LOGIN_MODAL
});

export const changeLoginUsername = text => ({
    type: CHANGE_LOGIN_USERNAME,
    payload: text
});

export const changeLoginPassword = text => ({
    type: CHANGE_LOGIN_PASSWORD,
    payload: text
});

export const submitLoginPending = () => ({
    type: SUBMIT_LOGIN_PENDING
});

export const submitLoginSuccess = result => ({
    type: SUBMIT_LOGIN_SUCCESS,
    payload: result
});

export const submitLoginError = error => ({
    type: SUBMIT_LOGIN_ERROR,
    payload: error
});

export const submitLoginCredentials = requestOptions => 
    dispatch => {
        dispatch(submitLoginSuccess());
        return login(requestOptions)
            .then(res => dispatch(submitLoginSuccess(res)))
            .catch(err => dispatch(submitLoginError(err)));
    };

export const toggleSignupModal = () => ({
    type: TOGGLE_SIGNUP_MODAL
});

export const changeSignupUsername = text => ({
    type: CHANGE_SIGNUP_USERNAME,
    payload: text
});

export const changeSignupPassword = text => ({
    type: CHANGE_SIGNUP_PASSWORD,
    payload: text
});

export const submitSignupPending = () => ({
    type: SUBMIT_SIGNUP_PENDING
});

export const submitSignupSuccess = result => ({
    type: SUBMIT_SIGNUP_SUCCESS,
    payload: result
});

export const submitSignupError = error => ({
    type: SUBMIT_SIGNUP_ERROR,
    payload: error
});

export const submitSignupCredentials = requestOptions => 
    dispatch => {
        dispatch(submitSignupSuccess());
        return signup(requestOptions)
            .then(res => dispatch(submitSignupSuccess(res)))
            .catch(err => dispatch(submitSignupError(err)));
    };

