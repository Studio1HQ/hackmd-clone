import React from 'react';
import { useLiveState } from '@veltdev/react';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';
import StatusBar from './StatusBar';
import type { VeltUser } from '../types/veltUser';
import { defaultMarkdown } from '../constants/defaultTemplate';

interface LayoutProps {
    currentUser: VeltUser;
    staticUsers: VeltUser[];
    onSwitchUser: (user: VeltUser) => void;
}

const Layout: React.FC<LayoutProps> = ({ currentUser, staticUsers, onSwitchUser }) => {
    const [markdown, setMarkdown] = useLiveState<string>('hackmd-clone-markdown', defaultMarkdown);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'
        }}>
            <Header currentUser={currentUser} staticUsers={staticUsers} onSwitchUser={onSwitchUser} />
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
