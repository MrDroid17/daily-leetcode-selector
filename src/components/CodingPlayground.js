import React, { useState, useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodingPlayground.css';

const CodingPlayground = () => {
    const [userCode, setUserCode] = useState('// Write your JavaScript or TypeScript code here\nconsole.log("Hello, World!");');
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [language, setLanguage] = useState('javascript'); // 'javascript' or 'typescript'
    const textareaRef = useRef(null);
    const syntaxHighlighterRef = useRef(null);

    // Set up global function to receive code from other components
    useEffect(() => {
        window.setCodingPlaygroundCode = (code) => {
            console.log('Received code for playground:', code.substring(0, 50) + '...');
            setUserCode(code);
        };

        return () => {
            delete window.setCodingPlaygroundCode;
        };
    }, []);

    const handleFormatCode = () => {
        try {
            // Improved JavaScript/TypeScript formatter with proper indentation
            const lines = userCode.split('\n');
            let indentLevel = 0;
            const indentSize = 4; // 4 spaces per indent
            let formattedLines = [];

            for (let i = 0; i < lines.length; i++) {
                let line = lines[i].trim();

                // Skip empty lines but preserve them
                if (line === '') {
                    formattedLines.push('');
                    continue;
                }

                // Decrease indent for closing braces
                if (line.includes('}') && !line.includes('{')) {
                    indentLevel = Math.max(0, indentLevel - 1);
                }

                // Apply current indentation
                const indent = ' '.repeat(indentLevel * indentSize);

                // Format the line content
                let formattedLine = line
                    // Fix spacing around operators
                    .replace(/([a-zA-Z0-9_$])\s*=\s*([^=])/g, '$1 = $2')
                    .replace(/([a-zA-Z0-9_$])\s*(===|!==|==|!=|<=|>=|<|>)\s*([a-zA-Z0-9_$])/g, '$1 $2 $3')
                    .replace(/([a-zA-Z0-9_$])\s*(\+|\-|\*|\/)\s*([a-zA-Z0-9_$])/g, '$1 $2 $3')
                    // Fix spacing after keywords
                    .replace(/(if|else if|for|while|switch|catch|function)\s*\(/g, '$1 (')
                    // Fix spacing around braces
                    .replace(/\)\s*{/g, ') {')
                    .replace(/}\s*else/g, '} else')
                    .replace(/}\s*catch/g, '} catch')
                    // Fix comma spacing
                    .replace(/,([^\s])/g, ', $1')
                    // Fix semicolon spacing (remove space before semicolons)
                    .replace(/\s+;/g, ';')
                    // Fix object literal spacing
                    .replace(/:\s*([^\/])/g, ': $1');

                formattedLines.push(indent + formattedLine);

                // Increase indent for opening braces
                if (line.includes('{') && !line.includes('}')) {
                    indentLevel++;
                }
            }

            const formattedCode = formattedLines.join('\n');
            setUserCode(formattedCode);
        } catch (error) {
            console.warn('Formatting failed:', error.message);
        }
    };

    const handleCodeChange = (e) => {
        setUserCode(e.target.value);
    };

    const handleScroll = (e) => {
        if (syntaxHighlighterRef.current) {
            const textarea = e.target;
            const syntaxElement = syntaxHighlighterRef.current.querySelector('pre');
            if (syntaxElement) {
                syntaxElement.scrollTop = textarea.scrollTop;
                syntaxElement.scrollLeft = textarea.scrollLeft;
            }
        }
    };

    const handleKeyDown = (e) => {
        const textarea = e.target;
        const { selectionStart, selectionEnd, value } = textarea;

        // Handle Tab key for indentation
        if (e.key === 'Tab') {
            e.preventDefault();
            const newValue = value.substring(0, selectionStart) + '    ' + value.substring(selectionEnd);
            setUserCode(newValue);

            // Set cursor position after the inserted spaces
            setTimeout(() => {
                textarea.selectionStart = textarea.selectionEnd = selectionStart + 4;
            }, 0);
            return;
        }
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        setOutput('🔄 Running code...\n');

        try {
            // Create a custom console object to capture output
            const logs = [];
            const customConsole = {
                log: (...args) => {
                    logs.push('📝 ' + args.map(arg =>
                        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                    ).join(' '));
                },
                error: (...args) => {
                    logs.push('❌ Error: ' + args.map(arg => String(arg)).join(' '));
                },
                warn: (...args) => {
                    logs.push('⚠️ Warning: ' + args.map(arg => String(arg)).join(' '));
                },
                info: (...args) => {
                    logs.push('ℹ️ Info: ' + args.map(arg => String(arg)).join(' '));
                }
            };

            let codeToExecute = userCode;

            // If TypeScript, show a note and convert to JavaScript
            if (language === 'typescript') {
                logs.push('🔧 Converting TypeScript to JavaScript...');
                // Simple TypeScript to JavaScript conversion
                codeToExecute = userCode
                    .replace(/:\s*\w+(\[\])?(\s*[=,)}])/g, '$2') // Remove type annotations
                    .replace(/:\s*\w+(\[\])?$/gm, '') // Remove type annotations at end of line
                    .replace(/function\s+(\w+)\s*\([^)]*\)\s*:\s*\w+(\[\])?\s*{/g, 'function $1() {'); // Clean function return types
            }

            // Create a safe execution environment
            const func = new Function('console', codeToExecute);
            func(customConsole);

            if (logs.length === 0 || (logs.length === 1 && logs[0].includes('Converting TypeScript'))) {
                logs.push('✅ Code executed successfully (no output)');
            } else if (language === 'typescript' && logs.length > 1) {
                logs.push('✅ TypeScript code executed successfully');
            }

            setOutput(logs.join('\n'));
        } catch (error) {
            setOutput(`❌ Runtime Error: ${error.message}\n\n💡 Check your syntax and logic.`);
        } finally {
            setIsRunning(false);
        }
    };

    const handleResetCode = () => {
        const defaultCode = language === 'javascript'
            ? '// Write your JavaScript code here\nconsole.log("Hello, World!");'
            : '// Write your TypeScript code here\nconst message: string = "Hello, World!";\nconsole.log(message);';
        setUserCode(defaultCode);
        setOutput('');
    };

    const clearConsole = () => {
        setOutput('');
    };

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        const defaultCode = newLanguage === 'javascript'
            ? '// Write your JavaScript code here\nconsole.log("Hello, World!");'
            : '// Write your TypeScript code here\nconst message: string = "Hello, World!";\nconsole.log(message);';
        setUserCode(defaultCode);
        setOutput('');
    };

    return (
        <div className="coding-playground">
            <div className="playground-header">
                <h2>🚀 Coding Playground</h2>
                <div className="language-selector">
                    <label>Language:</label>
                    <select
                        value={language}
                        onChange={(e) => handleLanguageChange(e.target.value)}
                        className="language-select"
                    >
                        <option value="javascript">JavaScript</option>
                        <option value="typescript">TypeScript</option>
                    </select>
                </div>
            </div>

            <div className="code-panel">
                <div className="code-editor-section">
                    <div className="code-editor-header">
                        <h4>📝 Code Editor ({language.toUpperCase()})</h4>
                        <div className="editor-controls">
                            <button onClick={handleFormatCode} className="format-btn">
                                Format
                            </button>
                            <button onClick={handleResetCode} className="reset-btn">
                                Reset
                            </button>
                            <button
                                onClick={handleRunCode}
                                disabled={isRunning}
                                className="run-btn"
                            >
                                {isRunning ? 'Running...' : 'Run'}
                            </button>
                        </div>
                    </div>

                    <div className="editor-container">
                        <div className="syntax-editor">
                            <div ref={syntaxHighlighterRef}>
                                <SyntaxHighlighter
                                    language={language === 'typescript' ? 'typescript' : 'javascript'}
                                    style={tomorrow}
                                    customStyle={{
                                        background: '#1e1e1e',
                                        padding: '16px',
                                        margin: 0,
                                        fontSize: '14px',
                                        lineHeight: '1.5',
                                        fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
                                        borderRadius: 0,
                                        height: '100%',
                                        overflow: 'auto',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        zIndex: 1
                                    }}
                                    showLineNumbers={false}
                                    wrapLines={true}
                                >
                                    {userCode}
                                </SyntaxHighlighter>
                            </div>
                            <textarea
                                ref={textareaRef}
                                value={userCode}
                                onChange={handleCodeChange}
                                onKeyDown={handleKeyDown}
                                onScroll={handleScroll}
                                className="code-editor-overlay"
                                placeholder={`Write your ${language} code here...`}
                                spellCheck={false}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                </div>
                <div className="console-section">
                    <div className="console-header">
                        <h4>🖥️ Console Output</h4>
                        <button
                            onClick={clearConsole}
                            className="clear-console-btn"
                        >
                            🗑️ Clear
                        </button>
                    </div>
                    <pre className="console-output">
                        {output || '💭 Click "Run Code" to see output...'}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default CodingPlayground;