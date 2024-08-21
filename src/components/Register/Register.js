import * as authService from '../../services/authService'
// import { AuthContext } from '../../contexts/AuthContext';
// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNotificationContext, types } from '../../contexts/NotificationContext';


import { useAuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext()
    const [errors, setErrors] = useState({email: false, password: false, confirmPass: false})
    const { addNotification } = useNotificationContext()
    const [pass, setPass] = useState('')


    const registerSubmitHandler = (e) => {
        e.preventDefault();

        // console.log(Object.fromEntries(new FormData(e.currentTarget)))

        let { email, password, confirmPass } = Object.fromEntries(new FormData(e.currentTarget));

        // console.log(password)
        // console.log(confirmPass)
        // console.log(formData)

        if(errors.email == false && password === confirmPass) {

            authService.register(email, password)
            .then(authData => {
    
                login(authData);
                navigate('/dashboard');
            })

            addNotification('Successfully registered', types.success) 
        }

        // authService.register(email, password)
        // .then(authData => {

        //     login(authData);
        //     navigate('/dashboard');
        // })
    }

    const emailChangeHandler = (e) => {
        let currentEmail = e.target.value;

        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(currentEmail) || currentEmail === '') {
            setErrors(state => ({...state, email: "Please enter a valid email address."}))
        } else {
            setErrors(state => ({...state, email: false}))
            
        }
    }


    const passwordChangeHandler = (e) => {
        let currentPassword = e.target.value;

        if(currentPassword !== undefined && currentPassword.length < 6) {
            setErrors(state => ({...state, password: "The password should be at least 6 characters."}))            
        } else {
            setErrors(state => ({...state, password: false}))  
            setPass(currentPassword) 
            
        }
    }

    const confirmPassChangeHandler = (e) => {
        
        let confirmPass = e.target.value;
       

        // console.log(pass)
        //  console.log(confirmPass)

        if(confirmPass.length < 6 || pass != confirmPass) {
            setErrors(state => ({...state, confirmPass: "The password should be at least 6 characters and match your password."}))            
        } else {
            setErrors(state => ({...state, confirmPass: false}))       
            
        }
    }


    return(        
        <section id="register-page" className="register">
            <form id="register-form" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input" style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                            <input type="text" name="email" id="email" placeholder="Email" onChange={emailChangeHandler}/>
                        </span>
                        <Alert variant='danger' show={errors.email}>{errors.email}</Alert>
                    </p>                    

                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input" style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                            <input type="password" name="password" id="password" placeholder="Password"  onChange={passwordChangeHandler}/>
                        </span>
                        <Alert variant='danger' show={errors.password}>{errors.password}</Alert>

                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input" style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                            <input type="password" name="confirmPass" id="repeat-pass" placeholder="Repeat Password" onChange={confirmPassChangeHandler}/>
                        </span>
                        <Alert variant='danger' show={errors.confirmPass}>{errors.confirmPass}</Alert>

                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    )
}

export default Register;