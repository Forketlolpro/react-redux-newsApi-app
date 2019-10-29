import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm/LoginForm';

const Login = (props) => (<LoginForm handler={props.loginHandler}/>);

Login.propTypes = {
    loginHandler: PropTypes.func.isRequired
}

export default Login;