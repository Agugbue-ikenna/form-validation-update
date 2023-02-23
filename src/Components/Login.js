/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react';
import Popup from '../Components/Popup';
import Timein from '../Components/Timein';
import logo from '../Assets/1.jpg';
import classes from './Login.module.css';


const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Login = (props) => {
    const [popUP, setPopUp] = useState(false);
    const [timedPopUP, setTimedPopUp] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopUp(true);
        }, 2000);
    }, []);

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        password: true,

    });
    const nameInputRef = useRef();
    const passwordInputRef = useRef();

    const loginHandler = (event) => {

        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredPasswordIsValid = !isFiveChars(enteredPassword);

        setFormInputValidity({
            name: enteredNameIsValid,
            password: enteredPasswordIsValid,
        });

        const formIsValid = enteredNameIsValid && enteredPasswordIsValid;
        if (!formIsValid) {
            return;
        }
    
    };
    const nameControlClasses = `${classes.textbox} ${formInputValidity.name ? '' : classes.invalid}`;
    const passwordControlClasses = `${classes.textbox} ${formInputValidity.password ? '' : classes.invalid}`;

    
    return (
        <div className={classes.login}>
            <div className={classes.avatar}>
                <img src={logo} alt="logo" />
            </div>
            <h2>Login</h2>
            <h3>Welcome to our page</h3>
            <form onSubmit={loginHandler} className={classes.loginform}>
                <div className={nameControlClasses}>
                    <input type="text" id='name' placeholder="username" ref={nameInputRef} />
                    {!formInputValidity.name && <p>please enter a valid name</p>}

                </div>
                <div className={passwordControlClasses}>
                    <input type="password" id='password' placeholder="password" ref={passwordInputRef} />
                    {!formInputValidity.password && <p>please enter a valid password(5 characters long)!</p>}

                </div>
                <button type="submit" onClick={() => setPopUp(true)}>LOGIN</button>

                <a href="#">Forgot your credentials?</a>
            </form>

            <Popup trigger={popUP} setTrigger={setPopUp}>
               <h1>Thank you!</h1>
            <p>Your submission was successful!</p>
            </Popup>
            <Timein trigger={timedPopUP} setTrigger={setTimedPopUp}>
                <h1>Welcome!</h1>
                <p>Please kindly fill in your details..</p>
            </Timein>
        </div>
    )
}

export default Login;
