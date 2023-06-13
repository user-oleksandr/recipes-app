import React, {useState} from 'react';

function LoginForm({onLogin}) {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleLogin = (event) => {
        event.preventDefault();
        onLogin(loginData);
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="user name"
                value={loginData.username}
                onChange={(event) =>
                    setLoginData({
                        ...loginData,
                        username: event.target.value,
                    })
                }
            />
            <input
                type="password"
                placeholder="password"
                value={loginData.password}
                onChange={(event) =>
                    setLoginData({
                        ...loginData,
                        password: event.target.value,
                    })
                }
            />
            <button type="submit">Enter</button>
        </form>
    );
}

export default LoginForm;
