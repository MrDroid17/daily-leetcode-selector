import React from 'react';
import './MeanMernPractice.css';

const MeanMernPractice = () => {
    return (
        <div className="mean-mern-practice">
            <div className="practice-header">
                <h2>MEAN/MERN Stack Practice</h2>
                <p className="practice-subtitle">Full-Stack Development Practice Questions</p>
            </div>

            <div className="coming-soon-container">
                <div className="coming-soon-content">
                    <div className="coming-soon-icon">🚧</div>
                    <h3>Coming Soon!</h3>
                    <p>
                        This section will include comprehensive practice questions for:
                    </p>
                    <div className="stack-info">
                        <div className="stack-section">
                            <h4>🟢 MEAN Stack</h4>
                            <ul>
                                <li>MongoDB - NoSQL Database</li>
                                <li>Express.js - Backend Framework</li>
                                <li>Angular - Frontend Framework</li>
                                <li>Node.js - Runtime Environment</li>
                            </ul>
                        </div>
                        <div className="stack-section">
                            <h4>⚛️ MERN Stack</h4>
                            <ul>
                                <li>MongoDB - NoSQL Database</li>
                                <li>Express.js - Backend Framework</li>
                                <li>React.js - Frontend Library</li>
                                <li>Node.js - Runtime Environment</li>
                            </ul>
                        </div>
                    </div>
                    <div className="features-preview">
                        <h4>📚 What to Expect:</h4>
                        <div className="features-grid">
                            <div className="feature-item">
                                <span className="feature-icon">🔧</span>
                                <span>API Development</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🗃️</span>
                                <span>Database Design</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🎨</span>
                                <span>Frontend Components</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🔐</span>
                                <span>Authentication</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🚀</span>
                                <span>Deployment</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🧪</span>
                                <span>Testing</span>
                            </div>
                        </div>
                    </div>
                    <p className="stay-tuned">
                        Stay tuned for hands-on practice questions, real-world scenarios,
                        and complete project-based learning exercises!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MeanMernPractice;