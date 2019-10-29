import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

const Login = (props) => (<LoginForm handler={props.loginHandler}/>);

export default Login;