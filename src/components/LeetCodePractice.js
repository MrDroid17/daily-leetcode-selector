import React, { useState } from "react";
import { RefreshCcw } from "lucide-react";
import { useDailyQuestions } from "../hooks/useDailyQuestions";
import "./LeetCodePractice.css";
import "../Modal.css";

const LeetCodePractice = () => {
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
        <div className="leetcode-practice">
            <h2 className="title">DSA Practice</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Difficulty</th>
                        {/* <th>Submitted Count</th> */}
                        <th>Status</th>
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
                            <td className={`difficulty ${question.difficulty.toLowerCase()}`}>
                                {question.difficulty}
                            </td>
                            {/* <td>{question.numSubmitted ? question.numSubmitted : '-'}</td> */}
                            <td className={(question.questionStatus === 'SOLVED' || question.status === 'SOLVED') ? 'green' : 'red'}>{question.questionStatus || question.status}</td>
                            <td>
                                {(question.topicTags || []).map((tag, index) => (
                                    <span key={question.questionFrontendId + index} className="tag-chip">
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

            {
                isModalOpen && (
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
                )
            }
        </div>
    );
};

export default LeetCodePractice;