import { login, signup } from '../../helpers/api/auth';

// Actions

const TOGGLE_LOGIN_MODAL = "TOGGLE_LOGIN_MODAL";
const CHANGE_LOGIN_USERNAME = "CHANGE_LOGIN_USERNAME";
const CHANGE_LOGIN_PASSWORD = "CHANGE_LOGIN_PASSWORD";
const SUBMIT_LOGIN_PENDING = "SUBMIT_LOGIN_CREDENTIALS";
const SUBMIT_LOGIN_SUCCESS = "SUBMIT_LOGIN_SUCCESS";
const SUBMIT_LOGIN_ERROR = "SUBMIT_LOGIN_ERROR";

const TOGGLE_SIGNUP_MODAL = "TOGGLE_SIGNUP_MODAL";
const CHANGE_SIGNUP_USERNAME = "CHANGE_SIGNUP_USERNAME";
const CHANGE_SIGNUP_PASSWORD = "CHANGE_SIGNUP_PASSWORD";
const SUBMIT_SIGNUP_PENDING = "SUBMIT_SIGNUP_PENDING";
const SUBMIT_SIGNUP_SUCCESS = "SUBMIT_SIGNUP_SUCCESS";
const SUBMIT_SIGNUP_ERROR = "SUBMIT_SIGNUP_ERROR";

const LOGOUT = "LOGOUT";

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

export const postLoginCredentials = body => 
    dispatch => {
        dispatch(submitLoginPending());
        return login(body)
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

export const logout = () => ({
    type: LOGOUT
});

export const postSignupCredentials = body => 
    dispatch => {
        dispatch(submitSignupPending());
        return signup(body)
            .then(res => dispatch(submitSignupSuccess(res)))
            .catch(err => dispatch(submitSignupError(err)));
    };

// Reducer

const initialState = {
    activeUser: {
        username: '',
        token: ''
    },
    login: {
        isShown: false,
        username: '',
        password: '',
        isSubmitting: false,
        error: null
    },
    signup: {
        isShown: false,
        username: '',
        password: '',
        isSubmitting: false,
        error: null
    }
};

const reducer = (state = initialState, action) => {
    
    switch (action.type) {

        case TOGGLE_LOGIN_MODAL:
            return {
                ...state,
                login: {
                    ...state.login,
                    isShown: !state.login.isShown
                }
            };

        case CHANGE_LOGIN_USERNAME:
            return {
                ...state,
                login: {
                    ...state.login,
                    username: action.payload
                }
            };
        
        case CHANGE_LOGIN_PASSWORD:
            return {
                ...state,
                login: {
                    ...state.login,
                    password: action.payload
                }
            };

        case SUBMIT_LOGIN_PENDING:
            return {
                ...state,
                login: {
                    ...state.login,
                    isSubmitting: true,
                    error: null
                }
            };

        case SUBMIT_LOGIN_SUCCESS:
            return {
                ...state,
                activeUser: {
                    username: action.payload.username,
                    token: action.payload.token
                },
                login: {
                    ...state.login,
                    isSubmitting: false,
                    username: '',
                    password: ''
                }
            };

        case SUBMIT_LOGIN_ERROR:
            return {
                ...state,
                login: {
                    ...state.login,
                    isSubmitting: false,
                    error: action.payload
                }
            };

        case TOGGLE_SIGNUP_MODAL:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    isShown: !state.signup.isShown
                }
            };

        case CHANGE_SIGNUP_USERNAME:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    username: action.payload
                }
            };
        
        case CHANGE_SIGNUP_PASSWORD:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    password: action.payload
                }
            };

        case SUBMIT_SIGNUP_PENDING:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    isSubmitting: true,
                    error: null
                }
            };

        case SUBMIT_SIGNUP_SUCCESS:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    isSubmitting: false,
                    username: '',
                    password: ''
                },
                activeUser: {
                    username: action.payload.username,
                    token: action.payload.token
                }
            };

        case SUBMIT_SIGNUP_ERROR:
            return {
                ...state,
                signup: {
                    ...signup,
                    isSubmitting: false,
                    error: action.payload
                }
            };

        case LOGOUT:
            return {
                ...state,
                activeUser: {
                    username: '',
                    token: ''
                }
            };

        default:
            return state;

    }

}

export default reducer;
