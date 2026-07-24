import React from 'react';
import Button from './button';
import NeoThemeWrapper from './neo.theme';
import styled from 'styled-components';


const StyledLoginPage = styled.div`
display: flex;
justify-content: center;

.login-container{
    width: 100%;
    min-width: 320px;
    padding: 15px;
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border-color);
    box-shadow: var(--shadow-md-4);
    background: var(--color-accent-4);
    position: relative;
}
    .heading{
    font-weight: 1000;
    font-size: 60px;
    justify-content: center;
    color: var(--color-text-black);
    padding: 7px;
    font-family: var(--font-lexend);
    margin-bottom: 20px;
    cursor: pointer;
    line-height: 1.2;

    }
    .heading-2{
    font-weight:600;
    color: var(--color-text-black);
    padding: 7px;
    font-family: var(--font-lexend);
    }
    .input{
    width:100%;
    padding: 0.75rem;
    background: var(--color-accent-2);
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    color: var(--color-text-black);
    font-family: var(--font-lexend);
    }
    .signup{
    padding: 20px 5px 5px 5px;
    color: var(--color-text-black);
    }
`;


const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (<NeoThemeWrapper>
        <StyledLoginPage>
            <div className="login-container">
                <h2 className="heading">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="heading-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="heading-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                        />
                    </div>
                    <Button type="submit">Login</Button>
                </form>
                <div className="signup">
                    Dont Have An Account?<a href="../neo-brutalism/signup-page"> Sign Up</a>  
                </div>
            </div>

        </StyledLoginPage>
        </NeoThemeWrapper>
    );
};

export default LoginPage;

