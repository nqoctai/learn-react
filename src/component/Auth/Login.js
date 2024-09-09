import "./Login.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { ImSpinner10 } from 'react-icons/im';
import { doLogin } from "../../redux/action/userAction";
import Language from "../Header/Languae";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async () => {
        // validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Email is invalid');
            return;
        }

        if (!password) {
            toast.error('Password is required');
            return;
        }
        setIsLoading(true);
        // submit api
        let res = await postLogin(email, password);
        if (res && res.EC === 0) {
            dispatch(doLogin(res));
            toast.success(res.EM);
            setIsLoading(false);
            navigate('/')
        }

        if (res && res.EC !== 0) {
            toast.error(res.EM);
            setIsLoading(false);
        }
    }

    const handleKeyDown = (event) => {
        if (event && event.key === 'Enter') {
            handleLogin();
        }
    }

    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button onClick={() => navigate('/register')}>Sign up</button>
                <Language></Language>
            </div>
            <div className="title col-4 mx-auto">
                Quizz
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, Who's this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                </div>
                <span className="forgot-password">Forgot password</span>
                <div>
                    <button className="btn-submit" onClick={() => handleLogin()}
                        disabled={isLoading}
                    >
                        {isLoading === true && <ImSpinner10 className="loader-icon" />}
                        <span>Login</span>
                    </button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate('/') }}> &#60;&#60;  Go to Homepage</span>
                </div>

            </div>

        </div>
    )
}

export default Login;