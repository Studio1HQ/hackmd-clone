import React from 'react';
import { Bold, Italic, Strikethrough, Heading, Quote, Code, List, ListOrdered, CheckSquare, Image, Link, Table, Minus, MessageSquare, ArrowDown, ArrowUp } from 'lucide-react';

interface EditorProps {
    value: string;
    onChange: (val: string) => void;
}

const EditorToolbar = () => {
    const iconStyle = { padding: '6px', color: '#b9bbbe', opacity: 0.8 };
    const separatorStyle = { width: '1px', height: '16px', background: '#4f545c', margin: '0 4px' };
    
    return (
        <div style={{
            height: '40px', // Slightly taller
            backgroundColor: '#2f3136',
            borderBottom: '1px solid #111',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            gap: '2px'
        }}>
           <button style={iconStyle}><div style={{ transform: 'rotate(90deg)' }}>↩</div></button>
           <button style={iconStyle}><div style={{ transform: 'rotate(-90deg)' }}>↪</div></button>
           <div style={separatorStyle} />
           <button style={iconStyle}><Bold size={16} /></button>
           <button style={iconStyle}><Italic size={16} /></button>
           <button style={iconStyle}><Strikethrough size={16} /></button>
           <button style={iconStyle}><Heading size={16} /></button>
           <div style={separatorStyle} />
           <button style={iconStyle}><Code size={16} /></button>
           <button style={iconStyle}><Quote size={16} /></button>
           <div style={separatorStyle} />
           <button style={iconStyle}><List size={16} /></button>
           <button style={iconStyle}><ListOrdered size={16} /></button>
           <button style={iconStyle}><CheckSquare size={16} /></button>
           <div style={separatorStyle} />
           <button style={iconStyle}><Link size={16} /></button>
           <button style={iconStyle}><Image size={16} /></button>
           <button style={iconStyle}><Table size={16} /></button>
           <div style={separatorStyle} />
           <button style={iconStyle}><Minus size={16} /></button>
           <div style={separatorStyle} />
           <button style={iconStyle}><MessageSquare size={16} /></button>
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

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#1e1e1e' }}>
            <EditorToolbar />
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
                {/* Line Numbers */}
                <div style={{ 
                    width: '40px', 
                    padding: '12px 0', // Match textarea padding
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
                
                {/* Content Container to hold textarea and overlay */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <textarea 
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
                            zIndex: 2, // Above overlay if needed, but transparent bg?
                            background: 'transparent'
                        }}
                    />
                    
                    {/* Only show overlay if content is relatively short or empty? 
                        In the screenshot, there is text on line 1, but the overlay is still visible at the bottom.
                        So it stays there? Or maybe it's just content in the file?
                        "Link to GitHub:" text is NOT editable in the screenshot area?
                        Actually, looking closely at the screenshot, the "Link to GitHub" part is likely OUTSIDE the textarea flow or simply a bottom overlay.
                        I will make it a bottom overlay inside the flex container.
                    */}
                    <TemplateOverlay />
                </div>
            </div>
        </div>
    );
};

export default Editor;
