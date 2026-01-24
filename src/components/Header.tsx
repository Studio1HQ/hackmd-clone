import React, { useState } from 'react';
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
import { VeltPresence } from '@veltdev/react';
import type { VeltUser } from '../types/veltUser';

interface HeaderProps {
    currentUser: VeltUser;
    staticUsers: VeltUser[];
    onSwitchUser: (user: VeltUser) => void;
}

const Header: React.FC<HeaderProps> = ({ currentUser, staticUsers, onSwitchUser }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);
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
                 {/* Velt Presence Component */}
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                     <VeltPresence />
                 </div>

                 {/* User Switcher */}
                 <div style={{ position: 'relative' }}>
                     <div
                         onClick={() => setShowUserMenu(!showUserMenu)}
                         style={{
                             display: 'flex',
                             alignItems: 'center',
                             gap: '4px',
                             cursor: 'pointer'
                         }}
                     >
                         <img
                             src={currentUser.photoUrl}
                             alt={currentUser.name}
                             style={{
                                 width: '28px',
                                 height: '28px',
                                 borderRadius: '50%',
                                 objectFit: 'cover',
                                 border: '2px solid #5865f2'
                             }}
                         />
                         <ChevronDown size={14} />
                     </div>

                     {showUserMenu && (
                         <div style={{
                             position: 'absolute',
                             top: '100%',
                             right: 0,
                             marginTop: '8px',
                             background: '#2f3136',
                             border: '1px solid #202225',
                             borderRadius: '8px',
                             padding: '8px',
                             minWidth: '200px',
                             boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                             zIndex: 1000
                         }}>
                             <div style={{
                                 fontSize: '11px',
                                 color: '#72767d',
                                 textTransform: 'uppercase',
                                 fontWeight: 600,
                                 marginBottom: '8px',
                                 padding: '0 8px'
                             }}>
                                 Switch User
                             </div>
                             {staticUsers.map((user) => (
                                 <div
                                     key={user.userId}
                                     onClick={() => {
                                         onSwitchUser(user);
                                         setShowUserMenu(false);
                                     }}
                                     style={{
                                         display: 'flex',
                                         alignItems: 'center',
                                         gap: '10px',
                                         padding: '8px',
                                         borderRadius: '4px',
                                         cursor: 'pointer',
                                         background: currentUser.userId === user.userId ? '#5865f2' : 'transparent',
                                         transition: 'background 0.2s'
                                     }}
                                     onMouseEnter={(e) => {
                                         if (currentUser.userId !== user.userId) {
                                             e.currentTarget.style.background = '#3f4147';
                                         }
                                     }}
                                     onMouseLeave={(e) => {
                                         if (currentUser.userId !== user.userId) {
                                             e.currentTarget.style.background = 'transparent';
                                         }
                                     }}
                                 >
                                     <img
                                         src={user.photoUrl}
                                         alt={user.name}
                                         style={{
                                             width: '32px',
                                             height: '32px',
                                             borderRadius: '50%',
                                             objectFit: 'cover'
                                         }}
                                     />
                                     <div style={{ flex: 1 }}>
                                         <div style={{
                                             color: '#fff',
                                             fontWeight: 500,
                                             fontSize: '14px'
                                         }}>
                                             {user.name}
                                         </div>
                                         <div style={{
                                             color: '#b9bbbe',
                                             fontSize: '12px'
                                         }}>
                                             {user.email}
                                         </div>
                                     </div>
                                     {currentUser.userId === user.userId && (
                                         <div style={{
                                             width: '8px',
                                             height: '8px',
                                             borderRadius: '50%',
                                             background: '#43b581'
                                         }} />
                                     )}
                                 </div>
                             ))}
                         </div>
                     )}
                 </div>

                 <button><Clock size={18} /></button>

                 <button style={{
                     background: '#5865f2',
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
