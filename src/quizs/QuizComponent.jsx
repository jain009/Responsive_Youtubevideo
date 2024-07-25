import React, { useState } from 'react';
import { Card, Button, Radio, Typography } from 'antd';
import { Howl } from 'howler';
import awesomeSound from './sounds/correct.mp3';
import ohhhoSound from './sounds/wrong.mp3';
import './quiz.css';
const { Title, Paragraph } = Typography;

const quizData = [
  {
    question: "What is the color of the sky?",
    options: ["Blue", "Green", "Red", "Yellow"],
    correctAnswer: "Blue"
  },
  {
    question: "Which animal barks?",
    options: ["Cat", "Dog", "Elephant", "Fish"],
    correctAnswer: "Dog"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  }
];

const awesome = new Howl({ src: [awesomeSound] });
const ohhho = new Howl({ src: [ohhhoSound] });

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
      awesome.play();
      setScore(score + 1);
    } else {
      ohhho.play();
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="result-container">
        <Title level={2}>Quiz Result</Title>
        <Paragraph>Your score: {score} / {quizData.length}</Paragraph>
        <Button type="primary" onClick={handleRestart}>Restart Quiz</Button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <Card className="quiz-card">
        <Title level={3}>{quizData[currentQuestionIndex].question}</Title>
        <Radio.Group onChange={handleAnswerChange} value={selectedAnswer}>
          {quizData[currentQuestionIndex].options.map((option, index) => (
            <Radio key={index} value={option} className="quiz-option">
              {option}
            </Radio>
          ))}
        </Radio.Group>
        <Button type="primary" onClick={handleSubmit} disabled={!selectedAnswer}>
          Submit Answer
        </Button>
      </Card>
    </div>
  );
};

export default QuizComponent;
