import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onEditQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions
          ? questions.map((question) => (
              <QuestionItem
                key={question.id}
                question={question}
                onDeleteQuestion={onDeleteQuestion}
                onEditQuestion={onEditQuestion}
              />
            ))
          : "Loading..."}
      </ul>
    </section>
  );
}

export default QuestionList;
