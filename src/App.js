import React, { useState, useEffect } from "react";
import { LeetCodePractice, JavaScriptPractice, DBPractice } from "./components";
import CodingPlayground from "./components/CodingPlayground";
import QueryEditor from "./components/QueryEditor";
import HtmlCssPractice from "./components/HtmlCssPractice";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState('javascript'); // 'dsa', 'javascript', 'htmlcss', or 'database'
  const [showPlayground, setShowPlayground] = useState(false);
  const [showQueryEditor, setShowQueryEditor] = useState(false);

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

  // Set up global toggle function for DB Practice component
  useEffect(() => {
    window.toggleDBQueryEditor = () => {
      setShowQueryEditor(prev => !prev);
    };

    // Also expose the query editor state
    window.getDBQueryEditorState = () => showQueryEditor;

    return () => {
      delete window.toggleDBQueryEditor;
      delete window.getDBQueryEditorState;
    };
  }, [showQueryEditor]);

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
        <button
          className={`tab-button ${activeTab === 'htmlcss' ? 'active' : ''}`}
          onClick={() => setActiveTab('htmlcss')}
        >
          HTML & CSS Practice
        </button>
        <button
          className={`tab-button ${activeTab === 'database' ? 'active' : ''}`}
          onClick={() => setActiveTab('database')}
        >
          Database Practice
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

        {activeTab === 'htmlcss' && (
          <div className="single-component-wrapper">
            <HtmlCssPractice />
          </div>
        )}

        {activeTab === 'database' && (
          <div className={`dual-component-container ${showQueryEditor ? 'playground-active' : ''}`}>
            <div className="component-wrapper">
              <DBPractice />
            </div>
            {showQueryEditor && (
              <div className="component-wrapper">
                <QueryEditor />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;