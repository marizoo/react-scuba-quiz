import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../UI/Button.styled';
import { Container } from '../../UI/Container.styled';
import { ScLogin } from './login.styled';

const Login = ({onNewPlayer}) => {
    const [loginName, setLoginName] = useState('');
    const navigate = useNavigate();

    const handleLogin = (ev) => {
        ev.preventDefault();

        const newLogin = loginName;
        onNewPlayer(newLogin);
        navigate('/welcome');
        setLoginName('');

    }


  return (
    <ScLogin>
        <Container>
            <h2 className='loginTitle'>Hi!</h2>
            <h3 className='loginTitle__small'>Enter your name to play!</h3>
            <form onSubmit={handleLogin}>
                <input onChange={(ev)=>setLoginName(ev.target.value)} value={loginName} className='loginInput' type="text" placeholder='Your Name...' />
                <Button type="submit" brand >Play</Button>
            </form>   
        </Container>
    </ScLogin>
    )};

export default Login;
