import React, { useState } from "react";
import { RefreshCcw } from "lucide-react";
import { useDailyQuestions } from "./hooks/useDailyQuestions";
import "./App.css";
import "./Modal.css";

function App() {
  const { questions, isLoading, refreshQuestions } = useDailyQuestions();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRefreshClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const confirmRefresh = () => {
    refreshQuestions(); // Refresh questions and update localStorage
    setIsModalOpen(false); // Close the modal
  };

  const cancelRefresh = () => {
    setIsModalOpen(false); // Close the modal without refreshing
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>; // Show a loading state
  }

  return (
    <div className="container">
      <h2 className="title">LeetCode Daily Questions</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Submitted Count</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>
                <a
                  href={`https://leetcode.com/problems/${question.titleSlug}/description/`}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {question.title}
                </a>
              </td>
              <td>{question.difficulty}</td>
              <td>{question.numSubmitted}</td>
              <td>
                {question.topicTags.map((tag, index) => (
                  <span key={index} className="tag-chip">
                    {tag.name}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleRefreshClick} className="button">
        <RefreshCcw className="button-icon" /> Update Daily Questions
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to <strong>Change Daily LeetCode Questions</strong>?</p>
            <div className="modal-buttons">
              <button onClick={confirmRefresh} className="button confirm-button">
                Yes
              </button>
              <button onClick={cancelRefresh} className="button cancel-button">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;