import React, {useState} from 'react';

function RegistrationForm({onRegistration}) {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: '',
    });

    const handleRegistration = (event) => {
        event.preventDefault();
        onRegistration(registrationData);
    };

    return (
        <form onSubmit={handleRegistration}>
            <input
                type="text"
                placeholder="user name"
                value={registrationData.username}
                onChange={(event) =>
                    setRegistrationData({
                        ...registrationData,
                        username: event.target.value,
                    })
                }
            />
            <input
                type="password"
                placeholder="password"
                value={registrationData.password}
                onChange={(event) =>
                    setRegistrationData({
                        ...registrationData,
                        password: event.target.value,
                    })
                }
            />
            <button type="submit">Sign up</button>
        </form>
    );
}

export default RegistrationForm;
