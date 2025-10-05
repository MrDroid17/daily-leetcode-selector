import React, { useState, useEffect } from "react";
import { LeetCodePractice, JavaScriptPractice } from "./components";
import CodingPlayground from "./components/CodingPlayground";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState('dsa'); // 'dsa' or 'javascript'
  const [showPlayground, setShowPlayground] = useState(false);

  // Set up global toggle function for JavaScript Practice component
  useEffect(() => {
    window.toggleCodingPlayground = () => {
      setShowPlayground(prev => !prev);
    };

    // Also expose the playground state
    window.getPlaygroundState = () => showPlayground;

    return () => {
      delete window.toggleCodingPlayground;
      delete window.getPlaygroundState;
    };
  }, [showPlayground]);

  return (
    <div className="app-container">
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'dsa' ? 'active' : ''}`}
          onClick={() => setActiveTab('dsa')}
        >
          DSA Practice
        </button>
        <button
          className={`tab-button ${activeTab === 'javascript' ? 'active' : ''}`}
          onClick={() => setActiveTab('javascript')}
        >
          JavaScript Practice
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'dsa' && (
          <div className="single-component-wrapper">
            <LeetCodePractice />
          </div>
        )}

        {activeTab === 'javascript' && (
          <div className={`dual-component-container ${showPlayground ? 'playground-active' : ''}`}>
            <div className="component-wrapper">
              <JavaScriptPractice />
            </div>
            {showPlayground && (
              <div className="component-wrapper">
                <CodingPlayground />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;