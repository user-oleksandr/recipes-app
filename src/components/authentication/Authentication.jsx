import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Authentication({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'true'
    );

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: '',
    });

    const [isRegistering, setIsRegistering] = useState(false);

    const handleRegistration = (event) => {
        event.preventDefault();

        localStorage.setItem('username', registrationData.username);
        localStorage.setItem('password', registrationData.password);

        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    const handleLogin = (event) => {
        event.preventDefault();

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (
            loginData.username === storedUsername &&
            loginData.password === storedPassword
        ) {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
    };

    const username = localStorage.getItem('username');

    return (
        <>
            {isAuthenticated ? (
                <div className='container-fluid mt-5'>
                    <div className='row pt-3 pb-3' style={{backgroundColor:'#A3AFB9'}}>
                        <div className='col d-flex justify-content-between align-items-center'>
                            <h5>Welcome dear: {username}</h5>
                            <button className="btn btn-primary" onClick={handleLogout}>
                                Exit
                            </button>
                        </div>
                    </div>
                    <div className='container mt-5'>{children}</div>
                </div>
            ) : (
                <div className='container mt-5 pb-5 rounded' style={{backgroundColor:'#A3AFB9'}}>
                    <div className='row text-center'>
                        <h3 className='text-primary mt-5'>Log in or register</h3>
                    </div>

                    <form onSubmit={isRegistering ? handleRegistration : handleLogin}>
                        <div className="row justify-content-center mt-5">
                            <div className='col-5'>
                                <input className="form-control form-control-sm" type="text"
                                       placeholder="Enter your username"
                                       value={isRegistering ? registrationData.username : loginData.username}
                                       onChange={(event) =>
                                           isRegistering
                                               ? setRegistrationData({
                                                   ...registrationData,
                                                   username: event.target.value,
                                               })
                                               : setLoginData({
                                                   ...loginData,
                                                   username: event.target.value,
                                               })
                                       }
                                       required
                                />

                                <input
                                    className="form-control form-control-sm mt-2" type="password"
                                    placeholder="Enter your password"
                                    value={isRegistering ? registrationData.password : loginData.password}
                                    onChange={(event) =>
                                        isRegistering
                                            ? setRegistrationData({
                                                ...registrationData,
                                                password: event.target.value,
                                            })
                                            : setLoginData({
                                                ...loginData,
                                                password: event.target.value,
                                            })
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className='col mt-3 text-center'>
                            <button type="submit" className="btn btn-primary btn-sm">
                                {isRegistering ? 'Sign up' : 'Enter'}
                            </button>
                        </div>

                        <div className='row mt-3 text-center' style={{color: 'white'}}>
                            {isRegistering ? (
                                <p>
                                    Already have an account?{' '}
                                    <span className="text-primary" onClick={() => setIsRegistering(false)}
                                          style={{cursor: 'pointer'}}>
                                    Login here.
                                </span>
                                </p>
                            ) : (
                                <p>
                                    Don't have an account?{' '}
                                    <span className="text-primary" onClick={() => setIsRegistering(true)}
                                          style={{cursor: 'pointer'}}>
                                    Register here.
                                </span>
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default Authentication;
