import {useDispatch, useSelector} from 'react-redux';
import {
    setUsername,
    setEmail,
    setPassword,
    setConfirmPassword,
    setErrors,
} from './registerSlice';
import {handleRegisterSubmit} from './registerSlice';

const RegisterForm = () => {
    const {username, email, password, confirmPassword, errors} = useSelector(
        (state) => state.register
    );
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleRegisterSubmit());
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre de usuario:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => dispatch(setUsername(e.target.value))}/>
                {errors.username && <div>{errors.username}</div>}
            </div>
            <div>
                <label>Correo electrónico:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                />
                {errors.password && <div>{errors.password}</div>}
            </div>
            <div>
                <label>confirm Password :</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
                />
                {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
            </div>
            <button type="submit">Registrarse</button>
        </form>
    );
};

export default RegisterForm;