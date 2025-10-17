import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';


// Custom components for ReactMarkdown
const components = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                {...props}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code
                style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '0.9em',
                    fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                    border: '1px solid #e2e8f0'
                }}
                {...props}
            >
                {children}
            </code>
        );
    }
};

const MarkedForRevision = ({ onClose }) => {
    const [markedQuestions, setMarkedQuestions] = useState([]);
    const [showConfirmClear, setShowConfirmClear] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    console.log('MarkedForRevision component rendered');

    // Get current date string
    const getCurrentDateString = () => {
        return new Date().toISOString().split('T')[0];
    };

    // Load all marked questions from localStorage
    const loadMarkedQuestions = () => {
        console.log('Loading marked questions...');
        setIsLoading(true);
        const currentDate = getCurrentDateString();
        const marked = [];

        try {
            // Get all localStorage keys
            const keys = Object.keys(localStorage);
            console.log('Available localStorage keys:', keys);

            // Process JavaScript practice sessions
            keys.forEach(key => {
                if (key.startsWith('javascript-practice-') && key.includes(currentDate)) {
                    console.log('Processing JavaScript session:', key);
                    try {
                        const sessionData = JSON.parse(localStorage.getItem(key));
                        if (sessionData.revisionsQuestions && sessionData.revisionsQuestions.length > 0) {
                            sessionData.revisionsQuestions.forEach(questionIndex => {
                                const question = sessionData.questions[questionIndex];
                                if (question) {
                                    marked.push({
                                        ...question,
                                        source: 'JavaScript Practice',
                                        sessionKey: key,
                                        questionIndex: questionIndex,
                                        type: 'javascript'
                                    });
                                }
                            });
                        }
                    } catch (error) {
                        console.warn('Error loading JavaScript session:', error);
                    }
                }
            });

            // Process HTML/CSS practice sessions
            keys.forEach(key => {
                if (key.startsWith('htmlcss-practice-') && key.includes(currentDate)) {
                    try {
                        const sessionData = JSON.parse(localStorage.getItem(key));
                        if (sessionData.revisionsQuestions && sessionData.revisionsQuestions.length > 0) {
                            sessionData.revisionsQuestions.forEach(questionIndex => {
                                const question = sessionData.questions[questionIndex];
                                if (question) {
                                    marked.push({
                                        ...question,
                                        source: 'HTML/CSS Practice',
                                        sessionKey: key,
                                        questionIndex: questionIndex,
                                        type: 'htmlcss'
                                    });
                                }
                            });
                        }
                    } catch (error) {
                        console.warn('Error loading HTML/CSS session:', error);
                    }
                }
            });

            // Process Database practice sessions
            keys.forEach(key => {
                if (key.startsWith('db-practice-') && key.includes(currentDate)) {
                    try {
                        const sessionData = JSON.parse(localStorage.getItem(key));
                        if (sessionData.revisionsQuestions && sessionData.revisionsQuestions.length > 0) {
                            sessionData.revisionsQuestions.forEach(questionIndex => {
                                const question = sessionData.questions[questionIndex];
                                if (question) {
                                    marked.push({
                                        ...question,
                                        source: `Database Practice (${question.database || 'Unknown'})`,
                                        sessionKey: key,
                                        questionIndex: questionIndex,
                                        type: 'database'
                                    });
                                }
                            });
                        }
                    } catch (error) {
                        console.warn('Error loading Database session:', error);
                    }
                }
            });

        } catch (error) {
            console.error('Error loading marked questions:', error);
        }

        console.log('Found marked questions:', marked);
        setMarkedQuestions(marked);
        setIsLoading(false);
    };

    // Clear all marked questions with confirmation
    const handleClearAllMarked = () => {
        setShowConfirmClear(true);
    };

    const confirmClearAll = () => {
        try {
            const currentDate = getCurrentDateString();
            const keys = Object.keys(localStorage);

            // Clear revision questions from all sessions
            keys.forEach(key => {
                if ((key.startsWith('javascript-practice-') ||
                    key.startsWith('htmlcss-practice-') ||
                    key.startsWith('db-practice-')) &&
                    key.includes(currentDate)) {
                    try {
                        const sessionData = JSON.parse(localStorage.getItem(key));
                        if (sessionData) {
                            sessionData.revisionsQuestions = [];
                            localStorage.setItem(key, JSON.stringify(sessionData));
                        }
                    } catch (error) {
                        console.warn('Error clearing session:', error);
                    }
                }
            });

            setMarkedQuestions([]);
            setShowConfirmClear(false);
            alert('All marked questions have been cleared successfully!');
        } catch (error) {
            console.error('Error clearing marked questions:', error);
            alert('Error clearing marked questions. Please try again.');
        }
    };

    const cancelClearAll = () => {
        setShowConfirmClear(false);
    };

    // Remove individual question from revision list
    const handleRemoveQuestion = (questionToRemove) => {
        try {
            const sessionData = JSON.parse(localStorage.getItem(questionToRemove.sessionKey));
            if (sessionData && sessionData.revisionsQuestions) {
                const updatedRevisions = sessionData.revisionsQuestions.filter(
                    index => index !== questionToRemove.questionIndex
                );
                sessionData.revisionsQuestions = updatedRevisions;
                localStorage.setItem(questionToRemove.sessionKey, JSON.stringify(sessionData));

                // Update local state
                setMarkedQuestions(prev => prev.filter(q =>
                    !(q.sessionKey === questionToRemove.sessionKey &&
                        q.questionIndex === questionToRemove.questionIndex)
                ));
            }
        } catch (error) {
            console.error('Error removing question:', error);
        }
    };

    // Load marked questions on component mount
    useEffect(() => {
        loadMarkedQuestions();
    }, []);

    // Get badge class based on source type
    const getBadgeColor = (type) => {
        switch (type) {
            case 'javascript':
                return '#f59e0b';
            case 'htmlcss':
                return '#10b981';
            case 'database':
                return '#3b82f6';
            default:
                return '#6b7280';
        }
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 1000,
                padding: '10px'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '0',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '15px 20px',
                    borderBottom: '1px solid #e2e8f0',
                    backgroundColor: '#f8fafc',
                    flexShrink: 0
                }}>
                    <div>
                        <h2 style={{ margin: 0, color: '#1e293b', fontSize: '1.5rem' }}>📚 Marked for Revision</h2>
                        {markedQuestions.length > 0 && (
                            <span style={{
                                fontSize: '0.85rem',
                                color: '#64748b',
                                background: '#e2e8f0',
                                padding: '2px 8px',
                                borderRadius: '12px',
                                marginTop: '5px',
                                display: 'inline-block'
                            }}>
                                {markedQuestions.length} question{markedQuestions.length !== 1 ? 's' : ''}
                            </span>
                        )}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        {markedQuestions.length > 0 && (
                            <button
                                onClick={handleClearAllMarked}
                                style={{
                                    background: '#ef4444',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '6px 12px',
                                    fontSize: '12px',
                                    cursor: 'pointer'
                                }}
                            >
                                🗑️ Clear All
                            </button>
                        )}
                        <button
                            onClick={onClose}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '20px',
                                cursor: 'pointer',
                                padding: '4px',
                                color: '#64748b'
                            }}
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div style={{
                    padding: '15px',
                    overflow: 'auto',
                    flex: 1,
                    backgroundColor: '#fff'
                }}>
                    {isLoading ? (
                        <div style={{ textAlign: 'center', padding: '40px 15px' }}>
                            <div style={{ fontSize: '36px', marginBottom: '15px' }}>🔄</div>
                            <p style={{ color: '#64748b', margin: 0 }}>Loading marked questions...</p>
                        </div>
                    ) : markedQuestions.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px 15px' }}>
                            <div style={{ fontSize: '36px', marginBottom: '15px' }}>📝</div>
                            <h3 style={{ color: '#1e293b', marginBottom: '8px', fontSize: '1.2rem' }}>No Questions Marked for Revision</h3>
                            <p style={{ color: '#64748b', lineHeight: 1.4, margin: 0 }}>
                                Start practicing and mark questions you want to review later!
                            </p>
                        </div>
                    ) : (
                        <div>
                            {markedQuestions.map((question, index) => (
                                <div key={`${question.sessionKey}-${question.questionIndex}`}
                                    style={{
                                        marginBottom: '15px',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                        overflow: 'hidden'
                                    }}>
                                    {/* Question Header */}
                                    <div style={{
                                        padding: '12px 15px',
                                        background: '#f8fafc',
                                        borderBottom: '1px solid #e2e8f0',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                                            <span style={{
                                                background: getBadgeColor(question.type),
                                                color: 'white',
                                                padding: '3px 8px',
                                                borderRadius: '10px',
                                                fontSize: '11px',
                                                fontWeight: 'bold'
                                            }}>
                                                {question.source}
                                            </span>
                                            {question.difficulty && (
                                                <span style={{
                                                    background: question.difficulty === 'Easy' ? '#10b981' :
                                                        question.difficulty === 'Medium' ? '#f59e0b' : '#ef4444',
                                                    color: 'white',
                                                    padding: '3px 8px',
                                                    borderRadius: '10px',
                                                    fontSize: '11px'
                                                }}>
                                                    {question.difficulty}
                                                </span>
                                            )}
                                            {question.category && (
                                                <span style={{
                                                    background: '#6b7280',
                                                    color: 'white',
                                                    padding: '3px 8px',
                                                    borderRadius: '10px',
                                                    fontSize: '11px'
                                                }}>
                                                    {question.category}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleRemoveQuestion(question)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                padding: '4px',
                                                color: '#64748b'
                                            }}
                                            title="Remove from revision list"
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    {/* Question Content */}
                                    <div style={{ padding: '15px' }}>
                                        {/* Question */}
                                        <h3 style={{
                                            margin: '0 0 8px 0',
                                            color: '#1e293b',
                                            fontSize: '1.1rem',
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            gap: '8px'
                                        }}>
                                            <span style={{
                                                color: '#64748b',
                                                fontSize: '0.9rem',
                                                fontWeight: 'normal'
                                            }}>
                                                {index + 1}.
                                            </span>
                                            <ReactMarkdown
                                                components={{
                                                    ...components,
                                                    p: ({ children }) => <span>{children}</span>
                                                }}
                                                remarkPlugins={[remarkGfm]}
                                            >
                                                {question.question}
                                            </ReactMarkdown>
                                        </h3>

                                        {/* Solution */}
                                        <div style={{ marginTop: '12px' }}>
                                            <h4 style={{
                                                margin: '0 0 8px 0',
                                                color: '#059669',
                                                fontSize: '0.95rem'
                                            }}>
                                                💡 Solution:
                                            </h4>
                                            <div style={{
                                                background: '#f0fdf4',
                                                padding: '12px',
                                                borderRadius: '6px',
                                                border: '1px solid #bbf7d0',
                                                fontSize: '0.95rem',
                                                lineHeight: '1.5'
                                            }}>
                                                <ReactMarkdown
                                                    components={{
                                                        ...components,
                                                        p: ({ children }) => <p style={{ margin: '0 0 8px 0' }}>{children}</p>,
                                                        ul: ({ children }) => <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>{children}</ul>,
                                                        ol: ({ children }) => <ol style={{ margin: '8px 0', paddingLeft: '20px' }}>{children}</ol>,
                                                        li: ({ children }) => <li style={{ margin: '2px 0' }}>{children}</li>,
                                                        h1: ({ children }) => <h1 style={{ fontSize: '1.2rem', margin: '12px 0 8px 0', color: '#1e293b' }}>{children}</h1>,
                                                        h2: ({ children }) => <h2 style={{ fontSize: '1.1rem', margin: '10px 0 6px 0', color: '#1e293b' }}>{children}</h2>,
                                                        h3: ({ children }) => <h3 style={{ fontSize: '1rem', margin: '8px 0 4px 0', color: '#1e293b' }}>{children}</h3>,
                                                        strong: ({ children }) => <strong style={{ color: '#059669', fontWeight: '600' }}>{children}</strong>,
                                                        em: ({ children }) => <em style={{ color: '#059669' }}>{children}</em>,
                                                        blockquote: ({ children }) => (
                                                            <blockquote style={{
                                                                borderLeft: '3px solid #059669',
                                                                paddingLeft: '12px',
                                                                margin: '8px 0',
                                                                fontStyle: 'italic',
                                                                color: '#374151'
                                                            }}>
                                                                {children}
                                                            </blockquote>
                                                        ),
                                                        a: ({ href, children }) => (
                                                            <a href={href} style={{ color: '#059669', textDecoration: 'underline' }}>
                                                                {children}
                                                            </a>
                                                        ),
                                                        code: ({ node, inline, className, children, ...props }) => {
                                                            const match = /language-(\w+)/.exec(className || '');
                                                            return !inline && match ? (
                                                                <SyntaxHighlighter
                                                                    style={tomorrow}
                                                                    language={match[1]}
                                                                    PreTag="div"
                                                                    {...props}
                                                                >
                                                                    {String(children).replace(/\n$/, '')}
                                                                </SyntaxHighlighter>
                                                            ) : (
                                                                <code
                                                                    style={{
                                                                        backgroundColor: '#dcfce7',
                                                                        color: '#166534',
                                                                        padding: '2px 6px',
                                                                        borderRadius: '4px',
                                                                        fontSize: '0.9em',
                                                                        fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                                                        border: '1px solid #bbf7d0',
                                                                        fontWeight: '500'
                                                                    }}
                                                                    {...props}
                                                                >
                                                                    {children}
                                                                </code>
                                                            );
                                                        }
                                                    }}
                                                    remarkPlugins={[remarkGfm]}
                                                >
                                                    {question.solution}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Confirmation Dialog */}
                {showConfirmClear && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '12px'
                    }}>
                        <div style={{
                            background: 'white',
                            padding: '30px',
                            borderRadius: '12px',
                            maxWidth: '400px',
                            width: '90%',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ margin: '0 0 15px 0', color: '#1e293b' }}>⚠️ Clear All Marked Questions?</h3>
                            <p style={{ margin: '0 0 25px 0', color: '#64748b', lineHeight: 1.5 }}>
                                This will remove all {markedQuestions.length} questions from your revision list.
                                This action cannot be undone.
                            </p>
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                <button
                                    onClick={cancelClearAll}
                                    style={{
                                        background: '#f3f4f6',
                                        color: '#374151',
                                        border: 'none',
                                        borderRadius: '6px',
                                        padding: '10px 20px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmClearAll}
                                    style={{
                                        background: '#ef4444',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        padding: '10px 20px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Yes, Clear All
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MarkedForRevision;