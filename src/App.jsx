import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/login/Login';
import Welcome from './components/welcome/Welcome';
import { colDark, colWhite } from './globalStyle';

const ScApp = styled.div`
background: ${colDark};
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
color: ${colWhite};
`

const App = () => {
  return (
    <ScApp>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      
    </ScApp>
  )};

  export default App;

  
  