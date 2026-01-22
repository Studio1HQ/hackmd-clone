import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Power, Heart, Bookmark, Bell, Pencil, Book } from 'lucide-react';

interface PreviewProps {
    content: string;
}

const Preview: React.FC<PreviewProps> = ({ content }) => {
    return (
        <div style={{ 
            flex: 1, 
            backgroundColor: '#1e1e1e', 
            color: '#c9d1d9',
            padding: '20px 40px',
            position: 'relative',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
            overflowY: 'auto'
        }}>
           <div style={{ 
               display: 'flex', 
               alignItems: 'center', 
               gap: '8px', 
               fontSize: '12px', 
               color: '#8b8b8b',
               marginBottom: '20px'
           }}>
                <div style={{ 
                    width: '16px', 
                    height: '16px', 
                    background: '#3370b7', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Power size={10} color="white" />
                </div>
                <span>Created a few seconds ago</span>

                <div style={{ flex: 1 }} />
                
                <div style={{ display: 'flex', gap: '16px', opacity: 0.7 }}>
                     <Heart size={16} />
                     <Bookmark size={16} />
                     <Bell size={16} />
                     <Pencil size={16} />
                     <Book size={16} />
                </div>
           </div>

           <div className="markdown-body" style={{ fontSize: '16px', lineHeight: '1.6' }}>
               <ReactMarkdown remarkPlugins={[remarkGfm]}>
                   {content}
               </ReactMarkdown>
           </div>
        </div>
    );
};

export default Preview;
