import React, { useState } from 'react';

const QuizPlayer = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-player">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quiz.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quiz.length}
            </div>
            <div className="question-text">{quiz[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {quiz[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() =>
                  handleAnswerOptionClick(option === quiz[currentQuestion].answer)
                }
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPlayer;
