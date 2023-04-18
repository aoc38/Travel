import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // import Axios library for making HTTP requests
var questionsJsonData = require('./questions.json');
const QuestionPage = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Set questions from imported JSON data
    setQuestions(questionsJsonData.questions);
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <form>
        {questions.map((question, index) => (
          <div key={index}>
            <h3>{question.city}</h3>
            {question.options.map((option, index) => (
              <div key={index}>
                <input type="radio" name={`question_${index}`} value={option} />
                <label htmlFor={`question_${index}`}>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );



};

export default QuestionPage;
