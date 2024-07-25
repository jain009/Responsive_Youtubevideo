import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import QuizPlayer from './QuizPlayer';
import quizData from './quizData';
import { QuestionCircleOutlined } from '@ant-design/icons';
import QuizComponent from './QuizComponent';

const T20Quiz = ({ageGroup}) => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('kids');

  return (
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <Row gutter={[16, 16]}>
          <Col>
            <Button
              className="custom-button"
              type="default"
              icon={<QuestionCircleOutlined />}
              onClick={() => setSelectedAgeGroup('kids')}
            >
              Kids-{ageGroup}
            </Button>
          </Col>
          <Col>
            <Button
              className="custom-button"
              type="default"
              icon={<QuestionCircleOutlined />}
              onClick={() => setSelectedAgeGroup('teens')}
            >
              Teens-{ageGroup}
            </Button>
          </Col>
          {/* Add more buttons for other age groups */}
        </Row>
      </div>

      <div className="quiz-container">
        <h2>Quiz for {selectedAgeGroup}</h2>
       <QuizComponent/>
      </div>
    </div>
  );
};

export default T20Quiz;
