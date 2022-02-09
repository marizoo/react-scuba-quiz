import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/login/Login';
import QuizAcronym from './components/quizAcronym/QuizAcronym';
import QuizEmergency from './components/quizEmergency/QuizEmergency';
import QuizRefresher from './components/quizRefresher/QuizRefresher';
import Welcome from './components/welcome/Welcome';
import { colDark, colWhite } from './globalStyle';

const ScApp = styled.div`
background: ${colDark};
min-height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
color: ${colWhite};
`

const App = () => {
  const [playerName, setPlayerName] = useState('');

  const newPlayer = (name) => {
    setPlayerName(name);
  }

  return (
    <ScApp>
      <Routes>
        <Route path="/" element={<Login onNewPlayer={newPlayer}/>}/>
        <Route path="/welcome" element={<Welcome onPlayerName={playerName}/>} />
        <Route path="/refresher" element={<QuizRefresher/>} />
        <Route path="/acronym" element={<QuizAcronym/>} />
        <Route path="/emergency" element={<QuizEmergency/>} />
      </Routes>
      
    </ScApp>
  )};

  export default App;

  
  