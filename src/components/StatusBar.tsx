import React from 'react';
import { Settings, Check, Type, MoreVertical } from 'lucide-react';

const StatusBar: React.FC = () => {
    return (
        <div style={{
            height: 'var(--statusbar-height)',
            backgroundColor: '#2f3136',
            borderTop: '1px solid #111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 8px',
            fontSize: '12px',
            color: '#72767d',
            fontFamily: 'monospace' // Matches the tech-look
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span>Line 1, Columns 1 — 1 Lines</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                    <button><Settings size={14} /></button>
                    <button><Check size={14} /></button>
                    <button><Type size={14} /></button>
                </div>
                
                <span>Spaces: 4</span>
                <span style={{ background: '#202225', padding: '2px 4px', borderRadius: '2px' }}>Breaks</span>
                <span style={{ background: '#202225', padding: '2px 4px', borderRadius: '2px' }}>SUBLIME</span>
                <button><MoreVertical size={14} /></button>
                <span>Length: 0</span>
            </div>
        </div>
    );
};

export default StatusBar;
