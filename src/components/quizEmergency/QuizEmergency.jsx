import React, {useState, useEffect} from 'react';
import Button from '../../UI/Button.styled';
import { Container } from '../../UI/Container.styled';
import { ScQuiz } from '../quizStyled/quiz.styled';
import { useNavigate } from 'react-router-dom';


const QuizEmergency = () => {
  const [quizDatas, setQuizDatas] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  // GET DATAS
  const getDatas = async () => {
    const response = await fetch("https://scuba-diving-quiz-version-101.p.rapidapi.com/trivia/emergency", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "scuba-diving-quiz-version-101.p.rapidapi.com",
        "x-rapidapi-key": "e68d30ed21mshfde02d28a98d885p1a26f2jsn2f74509ac0d7"
      }
    })
      const quiz = await response.json();
      setQuizDatas(quiz);
  }

  useEffect(() => {
    getDatas()
  },[])


  // handle the answer button
  const handleAnswerButton = (isCorrect) => {
    if(isCorrect === true) { setScore(score + 1) }

    const nextQuestion = currentQuestion + 1
    if(nextQuestion < quizDatas.length) {
      setCurrentQuestion(nextQuestion)
    } else { setShowScore(true) }
  }

  // refresh page
  const refreshPage = () => {
    window.location.reload(false);
  }
 
  return (
      <ScQuiz>
           <Container>
            {!quizDatas && (<p className='loading'>Loading...</p>)}

            {quizDatas && !showScore && (
              <>
                <p className='quizQuestionNumber'>Question {currentQuestion + 1} / {quizDatas.length}.</p>
              <span className='quizLine'></span>
              <p className='quizQuestion'>{quizDatas[currentQuestion].questionText}</p>
              <div className='quizButtonContainer'>
                {quizDatas[currentQuestion].answerOptions.map(option => (
                  <Button onClick={()=>handleAnswerButton(option.isCorrect)}>{option.answerText}</Button>
                ))}
              </div>
              </>
            )}

            {showScore && (
             <>
              <div className='showScore'>You scored <span className='showScore__number'>{score}</span>/{quizDatas.length}</div>
              <Button outline onClick={refreshPage}>Play Again</Button>
              <Button brand onClick={() =>navigate('/welcome') }>Other Categories</Button>
              <Button onClick={() =>navigate('/') }>Stop Playing</Button>
             </>
          )}
           
          </Container>
      </ScQuiz>
  )};

export default QuizEmergency;
