import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './HtmlCssPractice.css';
import htmlCssQuestions from '../data/html_css_01_100.json';

// Custom components for ReactMarkdown
const components = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        const language = match ? match[1] : 'html';
        const codeString = String(children).replace(/\n$/, '');

        // Inline code: either explicitly marked as inline OR no language class and short/single line
        if (inline || (!className && !codeString.includes('\n') && codeString.length < 50)) {
            return (
                <code className="inline-code" {...props}>
                    {children}
                </code>
            );
        }

        // Copy to clipboard function
        const copyToClipboard = async (text) => {
            try {
                await navigator.clipboard.writeText(text);
                // Show temporary feedback
                const button = document.activeElement;
                const originalText = button.textContent;
                button.textContent = '✅ Copied!';
                button.style.background = '#10b981';
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '#6366f1';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        };

        // Code blocks: either has language class OR multiline/long content
        return (
            <div className="code-block-container">
                <div className="code-block-header">
                    <span className="code-language">{language.toUpperCase()}</span>
                    <div className="code-actions">
                        <button
                            className="copy-code-btn"
                            onClick={() => copyToClipboard(codeString)}
                            title="Copy code to clipboard"
                        >
                            📋 Copy
                        </button>
                    </div>
                </div>
                <SyntaxHighlighter
                    style={tomorrow}
                    language={language}
                    PreTag="div"
                    customStyle={{
                        margin: '0',
                        borderRadius: '0 0 8px 8px',
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        background: '#1a1a1a'
                    }}
                    {...props}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        );
    }
};

const HtmlCssPractice = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60 * 60); // Default 60 minutes in seconds
    const [timerDuration, setTimerDuration] = useState(60); // Timer duration in minutes
    const [questionCount, setQuestionCount] = useState(50); // Default question count
    const [isActive, setIsActive] = useState(false);
    const [revisionsQuestions, setRevisionsQuestions] = useState(new Set());

    // Timer options in minutes
    const timerOptions = [30, 60, 90, 120, 150, 180];
    // Question count options
    const questionCountOptions = [15, 25, 50, 75, 100];

    // Utility function to get current date string
    const getCurrentDateString = () => {
        return new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    };

    // Utility function to get storage key
    const getStorageKey = () => {
        return `htmlcss-practice-${getCurrentDateString()}-${questionCount}`;
    };

    // Clean up old session data
    const cleanupOldSessions = useCallback(() => {
        try {
            const currentDate = getCurrentDateString();
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith('htmlcss-practice-')) {
                    const dateMatch = key.match(/htmlcss-practice-(\d{4}-\d{2}-\d{2})-/);
                    if (dateMatch && dateMatch[1] !== currentDate) {
                        localStorage.removeItem(key);
                    }
                }
            });
        } catch (error) {
            console.warn('Failed to cleanup old sessions:', error);
        }
    }, []);

    // Function to update current question index in localStorage
    const updateCurrentQuestionIndex = useCallback((newIndex) => {
        setCurrentQuestionIndex(newIndex);
        try {
            const storageKey = getStorageKey();
            const savedSession = localStorage.getItem(storageKey);
            if (savedSession) {
                const sessionData = JSON.parse(savedSession);
                sessionData.currentQuestionIndex = newIndex;
                localStorage.setItem(storageKey, JSON.stringify(sessionData));
            }
        } catch (error) {
            console.warn('Failed to save current question index:', error);
        }
    }, []);

    // Initialize questions based on selected count with persistence
    const initializeQuestions = useCallback((forceNew = false) => {
        const storageKey = getStorageKey();

        // Try to load existing session if not forcing new
        if (!forceNew) {
            try {
                const savedSession = localStorage.getItem(storageKey);
                if (savedSession) {
                    const {
                        questions: savedQuestions,
                        revisionsQuestions: savedRevisions,
                        currentQuestionIndex: savedCurrentIndex
                    } = JSON.parse(savedSession);
                    if (savedQuestions && savedQuestions.length === questionCount) {
                        setQuestions(savedQuestions);
                        setCurrentQuestionIndex(savedCurrentIndex || 0);
                        setShowSolution(false);
                        setRevisionsQuestions(new Set(savedRevisions || []));
                        return;
                    }
                }
            } catch (error) {
                console.warn('Failed to load saved session:', error);
            }
        }

        // Generate new session if no saved session or forced new
        let filteredQuestions = [...htmlCssQuestions];

        // Shuffle and select questions
        const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffled.slice(0, Math.min(questionCount, filteredQuestions.length));

        setQuestions(selectedQuestions);
        setCurrentQuestionIndex(0);
        setShowSolution(false);
        setRevisionsQuestions(new Set());

        // Save new session to localStorage
        try {
            const sessionData = {
                questions: selectedQuestions,
                revisionsQuestions: [],
                currentQuestionIndex: 0,
                date: getCurrentDateString(),
                count: questionCount
            };
            localStorage.setItem(storageKey, JSON.stringify(sessionData));
        } catch (error) {
            console.warn('Failed to save session:', error);
        }
    }, [questionCount]);    // Start timer with selected duration
    const startTimer = () => {
        setIsActive(true);
        setTimeLeft(timerDuration * 60); // Convert minutes to seconds
    };

    // Reset timer with current duration
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(timerDuration * 60);
    };

    // Handle timer duration change
    const handleTimerDurationChange = (newDuration) => {
        setTimerDuration(newDuration);
        if (!isActive) {
            setTimeLeft(newDuration * 60);
        }
    };

    // Handle question count change
    const handleQuestionCountChange = (newCount) => {
        setQuestionCount(newCount);
        // Reset session when count changes
        setIsActive(false);
        setTimeLeft(timerDuration * 60);
    };

    // Timer effect
    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            alert('Time is up! Practice session completed.');
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    // Initialize questions on component mount or when dependencies change
    useEffect(() => {
        cleanupOldSessions(); // Clean up old session data first
        initializeQuestions();
    }, [initializeQuestions, cleanupOldSessions]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            updateCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowSolution(false);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            updateCurrentQuestionIndex(currentQuestionIndex - 1);
            setShowSolution(false);
        }
    };

    const handleMarkForRevision = () => {
        const newRevisions = new Set(revisionsQuestions);
        if (revisionsQuestions.has(currentQuestionIndex)) {
            newRevisions.delete(currentQuestionIndex);
        } else {
            newRevisions.add(currentQuestionIndex);
        }
        setRevisionsQuestions(newRevisions);

        // Update localStorage with new revision state
        try {
            const storageKey = getStorageKey();
            const savedSession = localStorage.getItem(storageKey);
            if (savedSession) {
                const sessionData = JSON.parse(savedSession);
                sessionData.revisionsQuestions = Array.from(newRevisions);
                sessionData.currentQuestionIndex = currentQuestionIndex; // Also save current index
                localStorage.setItem(storageKey, JSON.stringify(sessionData));
            }
        } catch (error) {
            console.warn('Failed to save revision state:', error);
        }
    };

    const handleNewSession = () => {
        initializeQuestions(true); // Force new session
        resetTimer();
    };

    const currentQuestion = questions[currentQuestionIndex];

    if (questions.length === 0) {
        return (
            <div className="htmlcss-practice">
                <div className="loading">Loading questions...</div>
            </div>
        );
    }

    return (
        <div className="htmlcss-practice">
            <div className="practice-header">
                <h2>HTML & CSS Practice Session</h2>
                <div className="session-controls">
                    <div className="timer-controls">
                        <label>Timer Duration:</label>
                        <select
                            value={timerDuration}
                            onChange={(e) => handleTimerDurationChange(Number(e.target.value))}
                            disabled={isActive}
                            className="timer-select"
                        >
                            {timerOptions.map(duration => (
                                <option key={duration} value={duration}>
                                    {duration} min
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="question-count-controls">
                        <label>Questions:</label>
                        <select
                            value={questionCount}
                            onChange={(e) => handleQuestionCountChange(Number(e.target.value))}
                            disabled={isActive}
                            className="question-count-select"
                        >
                            {questionCountOptions.map(count => (
                                <option key={count} value={count}>
                                    {count} questions
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="session-info">
                <div className="timer">
                    <span className={`time ${timeLeft < 300 ? 'warning' : ''}`}>
                        ⏱️ {formatTime(timeLeft)}
                    </span>
                    {!isActive && timeLeft === timerDuration * 60 && (
                        <button onClick={startTimer} className="start-timer-btn">
                            Start Timer
                        </button>
                    )}
                    {isActive && (
                        <button onClick={resetTimer} className="reset-timer-btn">
                            Reset
                        </button>
                    )}
                </div>
                <div className="progress-info">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </div>
            </div>

            <div className="question-container">
                <div className="question-content">
                    <div className="question-text-wrapper">
                        <button
                            onClick={handlePreviousQuestion}
                            disabled={currentQuestionIndex === 0}
                            className="nav-btn prev-btn side-nav"
                            title="Previous Question"
                        >
                            ←
                        </button>

                        <div className="question-text">
                            <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
                                {currentQuestion.question}
                            </ReactMarkdown>
                        </div>

                        <button
                            onClick={handleNextQuestion}
                            disabled={currentQuestionIndex === questions.length - 1}
                            className="nav-btn next-btn side-nav"
                            title="Next Question"
                        >
                            →
                        </button>
                    </div>

                    <div className="solution-section">
                        <div className="solution-controls">
                            <button
                                onClick={() => setShowSolution(!showSolution)}
                                className="toggle-solution-btn"
                            >
                                {showSolution ? 'Hide Solution' : 'Show Solution'}
                            </button>

                            <div className="question-meta-bottom">
                                <span className={`type-badge ${currentQuestion.type.toLowerCase()}`}>
                                    {currentQuestion.type}
                                </span>
                                <span className={`difficulty ${currentQuestion.difficulty.toLowerCase()}`}>
                                    {currentQuestion.difficulty}
                                </span>
                                <span className="category">{currentQuestion.category}</span>
                                <button
                                    onClick={handleMarkForRevision}
                                    className={`revision-btn ${revisionsQuestions.has(currentQuestionIndex) ? 'marked-for-revision' : ''}`}
                                >
                                    {revisionsQuestions.has(currentQuestionIndex) ? '🔄 Marked for Revision' : '☐ Mark for Revision'}
                                </button>
                            </div>
                        </div>

                        {showSolution && (
                            <div className="solution-content">
                                <h4>Solution:</h4>
                                <div className="solution-text">
                                    <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
                                        {currentQuestion.solution}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="navigation-controls">
                <div className="question-tracker">
                    {questions.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                updateCurrentQuestionIndex(index);
                                setShowSolution(false);
                            }}
                            className={`question-dot ${index === currentQuestionIndex ? 'active' : ''} ${revisionsQuestions.has(index) ? 'revision' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            <div className="session-stats">
                <div className="stat-item">
                    <span className="stat-label">Marked for Revision:</span>
                    <span className="stat-value">{revisionsQuestions.size}/{questions.length}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Remaining:</span>
                    <span className="stat-value">{questions.length - revisionsQuestions.size}</span>
                </div>
                <button onClick={handleNewSession} className="new-session-btn">
                    New Session ({questionCount} Random Questions)
                </button>
            </div>
        </div>
    );
};

export default HtmlCssPractice;