import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
function App() {
  const [questions, setQuestions] = useState(
    data.map((q) => {
      return { ...q, showInfo: false };
    })
  );

  const handleQuestionClick = (id) => {
    const temp = questions.map((question) => {
      return question.id === id
        ? { ...question, showInfo: !question.showInfo }
        : { ...question, showInfo: false };
    });

    setQuestions(temp);
  };

  const content = (
    <main>
      <section className="container">
        <h1>questions</h1>

        {questions.map((question) => (
          <Question
            key={question.id}
            {...question}
            handleQuestionClick={handleQuestionClick}
          />
        ))}
      </section>
    </main>
  );
  return content;
}

export default App;
