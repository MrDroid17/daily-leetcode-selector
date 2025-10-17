import React, { useState, useEffect } from "react";
import { LeetCodePractice, JavaScriptPractice, DBPractice, MeanMernPractice } from "./components";
import CodingPlayground from "./components/CodingPlayground";
import QueryEditor from "./components/QueryEditor";
import HtmlCssPractice from "./components/HtmlCssPractice";
import MarkedForRevision from "./components/MarkedForRevision";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState('javascript'); // Start with HTML & CSS as default
  const [showPlayground, setShowPlayground] = useState(false);
  const [showQueryEditor, setShowQueryEditor] = useState(false);
  const [showMarkedForRevision, setShowMarkedForRevision] = useState(false);

  // Set up global toggle function for MarkedForRevision component
  useEffect(() => {
    window.openMarkedForRevision = () => {
      setShowMarkedForRevision(true);
    };

    return () => {
      delete window.openMarkedForRevision;
    };
  }, []);

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
      {/* MarkedForRevision Overlay */}
      {showMarkedForRevision && (
        <MarkedForRevision onClose={() => setShowMarkedForRevision(false)} />
      )}

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'htmlcss' ? 'active' : ''}`}
          onClick={() => setActiveTab('htmlcss')}
        >
          HTML & CSS Practice
        </button>
        <button
          className={`tab-button ${activeTab === 'javascript' ? 'active' : ''}`}
          onClick={() => setActiveTab('javascript')}
        >
          JavaScript Practice
        </button>
        <button
          className={`tab-button ${activeTab === 'meanmern' ? 'active' : ''}`}
          onClick={() => setActiveTab('meanmern')}
        >
          MEAN/MERN Practice
        </button>
        <button
          className={`tab-button ${activeTab === 'database' ? 'active' : ''}`}
          onClick={() => setActiveTab('database')}
        >
          Database Practice
        </button>
        <button
          className={`tab-button ${activeTab === 'dsa' ? 'active' : ''}`}
          onClick={() => setActiveTab('dsa')}
        >
          LeetCode Practice
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'htmlcss' && (
          <div className="single-component-wrapper">
            <HtmlCssPractice />
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

        {activeTab === 'meanmern' && (
          <div className="single-component-wrapper">
            <MeanMernPractice />
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

        {activeTab === 'dsa' && (
          <div className="single-component-wrapper">
            <LeetCodePractice />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;