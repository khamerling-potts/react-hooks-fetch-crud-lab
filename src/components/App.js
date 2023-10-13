import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  function handleAddQuestion(newQuestion) {
    console.log("question state changing");
    setQuestions([...questions, newQuestion]);
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter(
      (question) => question.id !== deletedQuestion.id
    );
    setQuestions(updatedQuestions);
  }
  function handleEditQuestion(editedQuestion) {
    const updatedQuestions = questions.map((question) => {
      if (editedQuestion.id === question.id) {
        return editedQuestion;
      } else {
        return question;
      }
    });
    console.log("about to change app state");
    setQuestions(updatedQuestions);
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          onDeleteQuestion={handleDeleteQuestion}
          onEditQuestion={handleEditQuestion}
        />
      )}
    </main>
  );
}

export default App;
