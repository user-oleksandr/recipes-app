import React, {useState} from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

function Authentication({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'true'
    );

    const handleRegistration = (registrationData) => {
        localStorage.setItem('username', registrationData.username);
        localStorage.setItem('password', registrationData.password);

        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    const handleLogin = (loginData) => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (
            loginData.username === storedUsername &&
            loginData.password === storedPassword
        ) {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
        } else {
            alert("Invalid username or password");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
    };

    const username = localStorage.getItem('username');

    return (
        <div className="Authentication">
            {isAuthenticated ? (
                <div>
                    <div className='box-aut'>
                        <h1>Welcome dear:{' '}{username}</h1>
                        <button onClick={handleLogout}>Exit</button>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            ) : (
                <div className='box-login'>
                    <h1>log in or register</h1>
                    <RegistrationForm onRegistration={handleRegistration}/>
                    <LoginForm onLogin={handleLogin}/>
                </div>
            )}
        </div>
    );
}

export default Authentication;
