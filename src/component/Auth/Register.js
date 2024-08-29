import "./Register.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiService";
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
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
        // submit api
        let res = await postRegister(email, password, username);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            navigate('/login')
        }

        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    }
    return (
        <div className="register-container">
            <div className="header">
                <span>Already have an account?</span>
                <button onClick={() => navigate('/login')}>Sign in</button>
            </div>
            <div className="title col-4 mx-auto">
                Quizz
            </div>
            <div className="welcome col-4 mx-auto">
                Start your journey
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email (*)</label>
                    <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group pass-group">
                    <label>Password (*)</label>
                    <input type={isShowPassword ? "text" : "password"} className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                    {
                        isShowPassword ?
                            <span className="icons-eye" onClick={() => setIsShowPassword(false)}>
                                <VscEye></VscEye>
                            </span>
                            :
                            <span className="icons-eye" onClick={() => setIsShowPassword(true)}>
                                <VscEyeClosed></VscEyeClosed>
                            </span>
                    }
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <button className="btn-submit" onClick={() => handleRegister()}>Create my free account</button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate('/') }}> &#60;&#60;  Go to Homepage</span>
                </div>

            </div>

        </div>
    )
}

export default Register;
