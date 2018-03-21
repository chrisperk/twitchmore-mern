import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

const Search = props => {
    return (
        <div className={props.isShown ? 'login-modal visible' : 'login-modal'}>
            Login
        </div>
    );
};

Search.propTypes = {
    isShown: PropTypes.bool.isRequired,
    usernameInput: PropTypes.string,
    usernamePassword: PropTypes.string,
    isSubmitting: PropTypes.bool.isRequired,
    error: PropTypes.object,
    handleToggleModal: PropTypes.func,
    handleChangeUsername: PropTypes.func,
    handleChangePassword: PropTypes.func,
    handlePostCredentials: PropTypes.func    
};

export default Search;