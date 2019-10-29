import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.allertSpanRef = React.createRef();
    }
    
    onSubmitHandler = (e) => {
        e.preventDefault();
        if (e.target[0].value !== 'admin' || e.target[1].value !== '12345') {
            this.allertSpanRef.current.innerText= 'Имя пользователя или пароль введены неверно';
            return false;
        }
        this.props.handler();
        localStorage.setItem('loggedIn', '1');
        window.location='./';
    }

    render() {
        return (
        <form onSubmit={this.onSubmitHandler} className='LoginForm'>
            <span ref={this.allertSpanRef}></span>
            <label>
                Имя:
                <input required type='text'/>
            </label>
            <label>
                Пароль:
                <input required type='password'/>
            </label>
            <button type='submit'>Войти</button>
        </form>
        )
    }
}

LoginForm.propTypes = {
    handler: PropTypes.func.isRequired
}

export default LoginForm;