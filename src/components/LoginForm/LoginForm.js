import React from 'react';

const LoginForm = (props) => {
    return (
    <form onSubmit={(e)=>{e.preventDefault();console.log('submit')}}>
        <label>
            Имя:
            <input type='text'/>
        </label>
        <label>
            Пароль
            <input type='password'/>
        </label>
        <button type='submit'>Войти</button>
    </form>
    );
}

export default LoginForm;