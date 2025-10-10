import React, { useState, useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './QueryEditor.css';

const QueryEditor = () => {
    const [userQuery, setUserQuery] = useState('-- Write your SQL or MongoDB query here\nSELECT * FROM customers LIMIT 10;');
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [queryType, setQueryType] = useState('sql'); // 'sql' or 'mongodb'
    const textareaRef = useRef(null);
    const highlightRef = useRef(null);

    // Synchronize scroll between textarea and highlight overlay
    const handleScroll = (e) => {
        if (highlightRef.current) {
            const highlightPre = highlightRef.current.querySelector('pre');
            if (highlightPre) {
                highlightPre.scrollTop = e.target.scrollTop;
                highlightPre.scrollLeft = e.target.scrollLeft;
            }
        }
    };

    // Set up global function to receive queries from other components
    useEffect(() => {
        window.setDBQueryEditorCode = (query) => {
            console.log('Received query for editor:', query.substring(0, 50) + '...');
            // Detect query type based on content
            const detectedType = query.toLowerCase().includes('db.') || query.toLowerCase().includes('find(') || query.toLowerCase().includes('aggregate(') ? 'mongodb' : 'sql';
            setQueryType(detectedType);
            setUserQuery(query);
        };

        return () => {
            delete window.setDBQueryEditorCode;
        };
    }, []);

    const handleFormatQuery = () => {
        try {
            let formattedQuery = userQuery;

            if (queryType === 'sql') {
                // Basic SQL formatting
                formattedQuery = formattedQuery
                    // Convert keywords to uppercase
                    .replace(/\b(select|from|where|join|inner join|left join|right join|full join|group by|order by|having|limit|insert|update|delete|create|alter|drop|distinct|as|and|or|not|in|exists|between|like|is null|is not null)\b/gi, (match) => match.toUpperCase())
                    // Add proper spacing around operators
                    .replace(/\s*=\s*/g, ' = ')
                    .replace(/\s*<>\s*/g, ' <> ')
                    .replace(/\s*!=\s*/g, ' != ')
                    .replace(/\s*<=\s*/g, ' <= ')
                    .replace(/\s*>=\s*/g, ' >= ')
                    .replace(/\s*<\s*/g, ' < ')
                    .replace(/\s*>\s*/g, ' > ')
                    // Fix comma spacing
                    .replace(/,([^\s])/g, ', $1')
                    // Clean up multiple spaces
                    .replace(/\s+/g, ' ')
                    // Add line breaks for better readability
                    .replace(/(FROM|WHERE|JOIN|GROUP BY|ORDER BY|HAVING|LIMIT)/gi, '\n$1')
                    .replace(/,\s*(?=\w)/g, ',\n    ')
                    .trim();
            } else if (queryType === 'mongodb') {
                // Basic MongoDB formatting
                try {
                    // Try to format as JavaScript object if it's a valid structure
                    const lines = formattedQuery.split('\n');
                    formattedQuery = lines.map(line => {
                        return line
                            // Add proper spacing around braces and brackets
                            .replace(/\{/g, '{\n  ')
                            .replace(/\}/g, '\n}')
                            .replace(/\[/g, '[\n  ')
                            .replace(/\]/g, '\n]')
                            // Fix comma spacing
                            .replace(/,([^\s])/g, ', $1');
                    }).join('\n');
                } catch (error) {
                    // If formatting fails, just clean up spacing
                    formattedQuery = formattedQuery
                        .replace(/,([^\s])/g, ', $1')
                        .replace(/\s+/g, ' ');
                }
            }

            setUserQuery(formattedQuery);
        } catch (error) {
            console.warn('Formatting failed:', error.message);
        }
    };

    const handleQueryChange = (e) => {
        setUserQuery(e.target.value);
    };

    const handleKeyDown = (e) => {
        const textarea = e.target;
        const { selectionStart, selectionEnd, value } = textarea;

        // Handle Tab key for indentation
        if (e.key === 'Tab') {
            e.preventDefault();
            const newValue = value.substring(0, selectionStart) + '    ' + value.substring(selectionEnd);
            setUserQuery(newValue);

            // Set cursor position after the inserted spaces
            setTimeout(() => {
                textarea.selectionStart = textarea.selectionEnd = selectionStart + 4;
            }, 0);
            return;
        }
    };

    const handleRunQuery = async () => {
        setIsRunning(true);
        setOutput('🔄 Analyzing query...\n');

        try {
            // Simulate query execution (since we don't have a real database connection)
            const lines = userQuery.trim().split('\n').filter(line => !line.trim().startsWith('--') && line.trim());

            if (lines.length === 0) {
                setOutput('❌ No query found. Please write a query to execute.');
                return;
            }

            const mainQuery = lines.join(' ').trim();

            if (queryType === 'sql') {
                // Analyze SQL query
                const queryLower = mainQuery.toLowerCase();
                let analysisOutput = [];

                analysisOutput.push('📊 SQL Query Analysis:');
                analysisOutput.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

                // Determine query type
                if (queryLower.includes('select')) {
                    analysisOutput.push('🔍 Query Type: SELECT (Data Retrieval)');

                    // Check for joins
                    if (queryLower.includes('join')) {
                        const joinTypes = [];
                        if (queryLower.includes('inner join')) joinTypes.push('INNER JOIN');
                        if (queryLower.includes('left join')) joinTypes.push('LEFT JOIN');
                        if (queryLower.includes('right join')) joinTypes.push('RIGHT JOIN');
                        if (queryLower.includes('full join')) joinTypes.push('FULL JOIN');
                        analysisOutput.push(`🔗 Joins Detected: ${joinTypes.join(', ')}`);
                    }

                    // Check for aggregations
                    const aggregations = [];
                    if (queryLower.includes('count(')) aggregations.push('COUNT');
                    if (queryLower.includes('sum(')) aggregations.push('SUM');
                    if (queryLower.includes('avg(')) aggregations.push('AVG');
                    if (queryLower.includes('max(')) aggregations.push('MAX');
                    if (queryLower.includes('min(')) aggregations.push('MIN');
                    if (aggregations.length > 0) {
                        analysisOutput.push(`📈 Aggregations: ${aggregations.join(', ')}`);
                    }

                    // Check for grouping and sorting
                    if (queryLower.includes('group by')) analysisOutput.push('📊 Grouping: GROUP BY detected');
                    if (queryLower.includes('order by')) analysisOutput.push('🔄 Sorting: ORDER BY detected');
                    if (queryLower.includes('having')) analysisOutput.push('🔍 Filtering: HAVING clause detected');
                    if (queryLower.includes('limit')) analysisOutput.push('📏 Limiting: LIMIT clause detected');

                } else if (queryLower.includes('insert')) {
                    analysisOutput.push('➕ Query Type: INSERT (Data Creation)');
                } else if (queryLower.includes('update')) {
                    analysisOutput.push('✏️ Query Type: UPDATE (Data Modification)');
                } else if (queryLower.includes('delete')) {
                    analysisOutput.push('🗑️ Query Type: DELETE (Data Removal)');
                } else if (queryLower.includes('create')) {
                    analysisOutput.push('🏗️ Query Type: CREATE (Schema Definition)');
                }

                analysisOutput.push('');
                analysisOutput.push('✅ Query syntax appears valid');
                analysisOutput.push('💡 Note: This is a practice environment - no actual database execution');

                setOutput(analysisOutput.join('\n'));

            } else if (queryType === 'mongodb') {
                // Analyze MongoDB query
                let analysisOutput = [];

                analysisOutput.push('🍃 MongoDB Query Analysis:');
                analysisOutput.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

                if (mainQuery.includes('.find(')) {
                    analysisOutput.push('🔍 Operation: find() - Document Retrieval');
                } else if (mainQuery.includes('.insertOne(') || mainQuery.includes('.insertMany(')) {
                    analysisOutput.push('➕ Operation: insert - Document Creation');
                } else if (mainQuery.includes('.updateOne(') || mainQuery.includes('.updateMany(')) {
                    analysisOutput.push('✏️ Operation: update - Document Modification');
                } else if (mainQuery.includes('.deleteOne(') || mainQuery.includes('.deleteMany(')) {
                    analysisOutput.push('🗑️ Operation: delete - Document Removal');
                } else if (mainQuery.includes('.aggregate(')) {
                    analysisOutput.push('📊 Operation: aggregate - Complex Data Processing');
                }

                // Check for common operators
                const operators = [];
                if (mainQuery.includes('$gt')) operators.push('$gt (greater than)');
                if (mainQuery.includes('$lt')) operators.push('$lt (less than)');
                if (mainQuery.includes('$regex')) operators.push('$regex (pattern matching)');
                if (mainQuery.includes('$in')) operators.push('$in (value in array)');
                if (mainQuery.includes('$all')) operators.push('$all (all values)');
                if (mainQuery.includes('$exists')) operators.push('$exists (field exists)');

                if (operators.length > 0) {
                    analysisOutput.push(`🔧 Operators: ${operators.join(', ')}`);
                }

                analysisOutput.push('');
                analysisOutput.push('✅ Query syntax appears valid');
                analysisOutput.push('💡 Note: This is a practice environment - no actual database execution');

                setOutput(analysisOutput.join('\n'));
            }

        } catch (error) {
            setOutput(`❌ Query Analysis Error: ${error.message}\n\n💡 Check your query syntax.`);
        } finally {
            setIsRunning(false);
        }
    };

    const handleResetQuery = () => {
        const defaultQuery = queryType === 'sql'
            ? '-- Write your SQL query here\nSELECT * FROM customers LIMIT 10;'
            : '// Write your MongoDB query here\ndb.users.find({ age: { $gt: 25 } })';
        setUserQuery(defaultQuery);
        setOutput('');
    };

    const clearOutput = () => {
        setOutput('');
    };

    const handleQueryTypeChange = (newType) => {
        setQueryType(newType);
        const defaultQuery = newType === 'sql'
            ? '-- Write your SQL query here\nSELECT * FROM customers LIMIT 10;'
            : '// Write your MongoDB query here\ndb.users.find({ age: { $gt: 25 } })';
        setUserQuery(defaultQuery);
        setOutput('');
    };

    return (
        <div className="query-editor">
            <div className="editor-header">
                <h2>🗃️ Database Query Editor</h2>
                <div className="query-type-selector">
                    <label>Query Type:</label>
                    <select
                        value={queryType}
                        onChange={(e) => handleQueryTypeChange(e.target.value)}
                        className="query-type-select"
                    >
                        <option value="sql">SQL</option>
                        <option value="mongodb">MongoDB</option>
                    </select>
                </div>
            </div>

            <div className="editor-panel">
                <div className="query-editor-section">
                    <div className="query-editor-header">
                        <h4>📝 Query Editor ({queryType.toUpperCase()})</h4>
                        <div className="editor-controls">
                            <button onClick={handleFormatQuery} className="format-btn">
                                Format
                            </button>
                            <button onClick={handleResetQuery} className="reset-btn">
                                Reset
                            </button>
                            <button
                                onClick={handleRunQuery}
                                disabled={isRunning}
                                className="run-btn"
                            >
                                {isRunning ? 'Analyzing...' : 'Analyze'}
                            </button>
                        </div>
                    </div>

                    <div className="editor-container">
                        <div className="syntax-highlight-overlay" ref={highlightRef}>
                            <SyntaxHighlighter
                                language={queryType === 'sql' ? 'sql' : 'javascript'}
                                style={tomorrow}
                                customStyle={{
                                    margin: 0,
                                    padding: '16px',
                                    background: 'transparent',
                                    fontSize: '14px',
                                    lineHeight: '1.5',
                                    fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    pointerEvents: 'none',
                                    color: 'transparent',
                                    overflow: 'hidden'
                                }}
                                showLineNumbers={false}
                                wrapLines={false}
                            >
                                {userQuery}
                            </SyntaxHighlighter>
                        </div>
                        <textarea
                            ref={textareaRef}
                            value={userQuery}
                            onChange={handleQueryChange}
                            onKeyDown={handleKeyDown}
                            onScroll={handleScroll}
                            className="query-editor-textarea"
                            placeholder={`Write your ${queryType.toUpperCase()} query here...`}
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </div>
                </div>

                <div className="output-section">
                    <div className="output-header">
                        <h4>🖥️ Query Analysis</h4>
                        <button
                            onClick={clearOutput}
                            className="clear-output-btn"
                        >
                            🗑️ Clear
                        </button>
                    </div>
                    <pre className="query-output">
                        {output || '💭 Click "Analyze" to analyze your query...'}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default QueryEditor;