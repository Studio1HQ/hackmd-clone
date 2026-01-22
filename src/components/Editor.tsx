import React, { useRef } from 'react';
import { Bold, Italic, Strikethrough, Heading, Quote, Code, List, ListOrdered, CheckSquare, Image, Link, Table, Minus, MessageSquare, ArrowDown, ArrowUp } from 'lucide-react';

interface EditorProps {
    value: string;
    onChange: (val: string) => void;
}

interface EditorToolbarProps {
    onAction: (action: string) => void;
}

const EditorToolbar: React.FC<EditorToolbarProps> = ({ onAction }) => {
    const iconStyle = { padding: '6px', color: '#b9bbbe', opacity: 0.8 };
    const separatorStyle = { width: '1px', height: '16px', background: '#4f545c', margin: '0 4px' };
    
    return (
        <div style={{
            height: '40px',
            backgroundColor: '#2f3136',
            borderBottom: '1px solid #111',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            gap: '2px'
        }}>
           <button style={iconStyle} onClick={() => onAction('undo')}><div style={{ transform: 'rotate(90deg)' }}>↩</div></button>
           <button style={iconStyle} onClick={() => onAction('redo')}><div style={{ transform: 'rotate(-90deg)' }}>↪</div></button>
           <div style={separatorStyle} />
           <button style={iconStyle} onClick={() => onAction('bold')}><Bold size={16} /></button>
           <button style={iconStyle} onClick={() => onAction('italic')}><Italic size={16} /></button>
           <button style={iconStyle} onClick={() => onAction('strikethrough')}><Strikethrough size={16} /></button>
           <button style={iconStyle} onClick={() => onAction('heading')}><Heading size={16} /></button>
           <div style={separatorStyle} />
           <button style={iconStyle} onClick={() => onAction('code')}><Code size={16} /></button>
           <button style={iconStyle} onClick={() => onAction('quote')}><Quote size={16} /></button>
           <div style={separatorStyle} />
           <button style={iconStyle} onClick={() => onAction('list-ul')}><List size={16} /></button>
           <button style={iconStyle} onClick={() => onAction('list-ol')}><ListOrdered size={16} /></button>
           <button style={iconStyle} onClick={() => onAction('task')}><CheckSquare size={16} /></button>
           <div style={separatorStyle} />
           <button style={iconStyle} onClick={() => onAction('link')}><Link size={16} /></button>
           <button style={iconStyle} onClick={() => onAction('image')}><Image size={16} /></button>
           <button style={iconStyle} onClick={() => onAction('table')}><Table size={16} /></button>
           <div style={separatorStyle} />
           <button style={iconStyle} onClick={() => onAction('hr')}><Minus size={16} /></button>
           <div style={separatorStyle} />
           <button style={iconStyle} onClick={() => onAction('comment')}><MessageSquare size={16} /></button>
        </div>
    );
};

const TemplateOverlay = () => {
     return (
        <div style={{
            marginTop: 'auto',
            marginBottom: '40px',
            marginLeft: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            color: '#8b8b8b',
             fontFamily: 'monospace',
             opacity: 1
        }}>
            <div>
                <div style={{ marginBottom: '8px', fontSize: '13px' }}>Link to GitHub:</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ 
                        background: '#2f3136', 
                        padding: '10px 16px', 
                        borderRadius: '4px',
                        color: '#b9bbbe',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13px',
                        width: '180px'
                    }}>
                        <ArrowDown size={14} /> Pull from GitHub
                    </button>
                    <button style={{ 
                        background: '#2f3136', 
                        padding: '10px 16px', 
                        borderRadius: '4px',
                        color: '#b9bbbe',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13px',
                        width: '180px'
                    }}>
                         <ArrowUp size={14} /> Push to GitHub
                    </button>
                </div>
            </div>

            <div>
                 <div style={{ marginBottom: '8px', fontSize: '13px' }}>Or start with a template:</div>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                         <button style={{ 
                            background: '#2f3136', 
                            padding: '12px 16px', 
                            borderRadius: '4px',
                            color: '#b9bbbe',
                            fontSize: '13px',
                            width: '180px',
                            textAlign: 'left',
                            justifyContent: 'flex-start'
                        }}>
                            [Layout] Two columns
                        </button>
                         <button style={{ 
                            background: '#2f3136', 
                            padding: '12px 16px', 
                            borderRadius: '4px',
                            color: '#b9bbbe',
                            fontSize: '13px',
                            width: '180px',
                             textAlign: 'left',
                              justifyContent: 'flex-start'
                        }}>
                            [Layout] Multiple c…
                        </button>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                         <button style={{ 
                            background: '#2f3136', 
                            padding: '12px 16px', 
                            borderRadius: '4px',
                            color: '#b9bbbe',
                            fontSize: '13px',
                            width: '180px',
                             textAlign: 'left',
                              justifyContent: 'flex-start'
                        }}>
                           [People] Onboarding…
                        </button>
                         <button style={{ 
                            background: '#242424', 
                            border: '1px solid #4f545c',
                            padding: '12px 16px', 
                            borderRadius: '4px',
                            color: '#fff',
                            fontSize: '13px',
                            width: '180px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                             gap: '8px'
                        }}>
                           More templates 
                           <span style={{ fontSize: '16px' }}>›</span>
                        </button>
                    </div>
                 </div>
            </div>
        </div>
    );
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
    const lineNumbers = value.split('\n').length;
    const lines = Array.from({ length: Math.max(1, lineNumbers) }, (_, i) => i + 1);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleAction = (action: string) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = value;
        
        const before = text.substring(0, start);
        const selected = text.substring(start, end);
        const after = text.substring(end);
        
        let newText = text;
        let newCursorPos = end;

        switch (action) {
            case 'bold':
                newText = `${before}**${selected || 'bold text'}**${after}`;
                newCursorPos = end + (selected ? 2 : 11);
                break;
            case 'italic':
                newText = `${before}*${selected || 'italic text'}*${after}`;
                newCursorPos = end + (selected ? 1 : 13);
                break;
            case 'strikethrough':
                newText = `${before}~~${selected || 'strikethrough text'}~~${after}`;
                newCursorPos = end + (selected ? 2 : 20);
                break;
            case 'heading':
                newText = `${before}# ${selected || 'Heading'}${after}`;
                newCursorPos = end + 2;
                break;
            case 'code':
                newText = `${before}\`${selected || 'code'}\`${after}`;
                break;
            case 'quote':
                newText = `${before}> ${selected || 'Blockquote'}${after}`;
                break;
            case 'list-ul':
                newText = `${before}- ${selected || 'List item'}${after}`;
                break;
            case 'list-ol':
                newText = `${before}1. ${selected || 'List item'}${after}`;
                break;
            case 'task':
                newText = `${before}- [ ] ${selected || 'Task item'}${after}`;
                break;
            case 'link':
                newText = `${before}[${selected || 'Link'}](url)${after}`;
                break;
            case 'image':
                newText = `${before}![${selected || 'Image'}](url)${after}`;
                break;
            case 'table':
                newText = `${before}\n| Header | Header |\n| --- | --- |\n| Cell | Cell |\n${after}`;
                break;
            case 'hr':
                newText = `${before}\n---\n${after}`;
                break;
             // undo/redo not implemented with history stack yet, can be done if requested
        }

        onChange(newText);
        
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(newCursorPos, newCursorPos);
        }, 0);
    };

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#1e1e1e' }}>
            <EditorToolbar onAction={handleAction} />
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
                {/* Line Numbers */}
                <div style={{ 
                    width: '40px', 
                    padding: '12px 0', 
                    textAlign: 'right', 
                    color: '#4f545c', 
                    backgroundColor: '#1e1e1e', 
                    fontSize: '14px',
                    fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
                    userSelect: 'none',
                    lineHeight: '1.5'
                }}>
                   {lines.map(line => (
                       <div key={line} style={{ paddingRight: '8px' }}>{line}</div>
                   ))}
                </div>
                
                {/* Content Container */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <textarea 
                        ref={textareaRef}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Jot down your ideas and grow them 💡"
                        autoFocus
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            color: '#d7d7d7',
                            border: 'none',
                            resize: 'none',
                            outline: 'none',
                            fontSize: '14px',
                            fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
                            lineHeight: '1.5',
                            padding: '12px',
                            whiteSpace: 'pre-wrap',
                            overflow: 'auto',
                            zIndex: 2, 
                            background: 'transparent'
                        }}
                    />
                    <TemplateOverlay />
                </div>
            </div>
        </div>
    );
};

export default Editor;
