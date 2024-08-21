import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService.js';

// import { AuthContext } from '../../contexts/AuthContext.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import { useNotificationContext, types } from '../../contexts/NotificationContext.js';

const Login = () => {
    const { login } = useAuthContext()
    const { addNotification } = useNotificationContext()

    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {          
                login(authData);          
                addNotification('You logged in successfully', types.success)                  
                navigate('/dashboard');
            })
            .catch(err => {
                //TODO show notification                
                console.log(err)
            });
    }

    

    return(
        <section id="login-page" className="login">
    <form id="login-form" onSubmit={onLogin} method='POST' >
        <fieldset>
            <legend>Login</legend>
            <p className="field">
                <label htmlFor="email">Email</label>
                <span className="input">
                    <input type="text" name="email" id="email" placeholder="Email" />
                </span>
            </p>
            <p className="field">
                <label htmlFor="password">Password</label>
                <span className="input">
                    <input type="password" name="password" id="password" placeholder="Password" />
                </span>
            </p>
            <input className="button submit" type="submit" value="Login" />
        </fieldset>
    </form>
</section>
    )
}

export default Login;