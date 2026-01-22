import React, { useState } from 'react';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';
import StatusBar from './StatusBar';

const Layout: React.FC = () => {
    const [markdown, setMarkdown] = useState('');

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'
        }}>
            <Header />
            <div style={{
                display: 'flex',
                flex: 1,
                overflow: 'hidden',
                position: 'relative'
            }}>
                <Editor value={markdown} onChange={setMarkdown} />
                <div style={{
                    width: '1px',
                    backgroundColor: '#000',
                    opacity: 0.3,
                    zIndex: 10
                }} />
                <Preview content={markdown} />
            </div>
            <StatusBar />
        </div>
    );
};

export default Layout;
