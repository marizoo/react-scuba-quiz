import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../UI/Button.styled';
import { Container } from '../../UI/Container.styled';
import { ScWelcome } from './welcomeStyle';

const Welcome = ({onPlayerName}) => {
  const navigate = useNavigate();

  return (
      <ScWelcome>
        <Container>
          <h2>Welcome, {onPlayerName}!</h2>
          <h3>Pick a category</h3>
          <Button onClick={()=>navigate('/refresher')} brand>Refresher</Button>
          <Button onClick={()=>navigate('/acronym')} brand>Acronym</Button>
          <Button onClick={()=>navigate('/emergency')} brand>Diving Emergency</Button>
          <Button onClick={()=>navigate('/')}>Log out</Button>
          </Container>
      </ScWelcome>
  )};

export default Welcome;
