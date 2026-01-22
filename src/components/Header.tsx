import React from 'react';
import { 
  Pencil, 
  Columns, 
  Eye, 
  Plus, 
  HelpCircle, 
  Search, 
  Info, 
  Tag, 
  Clock, 
  MoreHorizontal, 
  ChevronDown, 
  Power 
} from 'lucide-react';

const Header: React.FC = () => {
    return (
        <div style={{
            height: 'var(--toolbar-height)',
            backgroundColor: '#2f3136', // Darker gray for toolbar
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            borderBottom: '1px solid #111',
            fontSize: '14px',
            color: '#b9bbbe'
        }}>
            {/* Left Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    color: '#fff', 
                    fontWeight: 600,
                    marginRight: '12px'
                }}>
                    <div style={{
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        background: '#3370b7', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}>
                        <Power size={14} color="white" />
                    </div>
                    <span>My workspace</span>
                </div>

                <div style={{ width: '1px', height: '20px', background: '#4f545c', margin: '0 4px' }}></div>

                {/* Editor Mode Buttons */}
                <div style={{ display: 'flex', background: '#202225', borderRadius: '4px', padding: '2px' }}>
                    <button style={{ padding: '4px 8px', background: '#3f4147', borderRadius: '3px', color: '#fff' }}>
                        <Pencil size={16} />
                    </button>
                    <button style={{ padding: '4px 8px' }}>
                        <Columns size={16} />
                    </button>
                    <button style={{ padding: '4px 8px' }}>
                        <Eye size={16} />
                    </button>
                </div>

                <button style={{ padding: '4px' }}><Plus size={18} /></button>
                <button style={{ padding: '4px' }}><HelpCircle size={18} /></button>
                <button style={{ padding: '4px' }}><Search size={18} /></button>
            </div>

            {/* Center Section (Title) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#dcddde' }}>
                <span>My workspace</span>
                <span style={{ color: '#72767d' }}>/</span>
                <span style={{ fontWeight: 600, color: '#fff' }}>Untitled</span>
                <Info size={14} style={{ marginLeft: '4px', opacity: 0.7 }} />
                <Tag size={14} style={{ opacity: 0.7 }} />
            </div>

            {/* Right Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{
                        width: '28px', 
                        height: '28px', 
                        borderRadius: '50%', 
                        background: '#3370b7', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}>
                         <Power size={16} color="white" />
                    </div>
                    <ChevronDown size={14} />
                 </div>
                 
                 <button><Clock size={18} /></button>
                 
                 <button style={{ 
                     background: '#5865f2', // Blurple branding
                     color: 'white', 
                     padding: '4px 12px', 
                     borderRadius: '4px',
                     fontWeight: 500,
                     display: 'flex',
                     alignItems: 'center',
                     gap: '6px',
                     fontSize: '13px'
                 }}>
                    <div style={{ transform: 'rotate(180deg)' }}>➜</div> Share
                 </button>
                 
                 <button><MoreHorizontal size={20} /></button>
            </div>
        </div>
    );
};

export default Header;
