import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MacWindow from './MacWindow';
import "./note.scss";

const Note = ({windowName,setWindowState}) => {
    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        fetch("./note.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
            .catch(err => console.error("Could not load note:", err));
    }, []);

    return (
        <MacWindow windowName = "note" setWindowState={setWindowState}>
            <div className='note-window'>
                {markdown ? (
                    <SyntaxHighlighter 
                        language='typescript' 
                        style={atelierDuneDark}
                        customStyle={{ background: 'transparent', padding: '0' }}
                    >
                        {markdown}
                    </SyntaxHighlighter>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </MacWindow>
    );
};

export default Note;