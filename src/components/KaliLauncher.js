import React from 'react';
import { Box, Typography, IconButton, List, ListItem, ListItemText } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import FolderIcon from '@mui/icons-material/Folder';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import WifiIcon from '@mui/icons-material/Wifi';
import SecurityIcon from '@mui/icons-material/Security';
import ReportIcon from '@mui/icons-material/Report';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';
import AssessmentIcon from '@mui/icons-material/Assessment';

const categories = [
    { 
        label: 'Favorites', 
        items: [
            { icon: <TerminalIcon />, label: 'Terminal Emulator', description: 'Access the command line' },
            { icon: <FolderIcon />, label: 'File Manager', description: 'Browse and manage files' },
            { icon: <WebIcon />, label: 'Web Browser', description: 'Browse the web' },
        ] 
    },
    { 
        label: 'Recently Used', 
        items: [
            { icon: <CodeIcon />, label: 'Kali Linux', description: 'Kali Linux settings and tools' },
            { icon: <BugReportIcon />, label: 'Kali Bugs', description: 'Report bugs and issues' },
            { icon: <FolderIcon />, label: 'Documents', description: 'Access your documents' },
        ] 
    },
    { 
        label: 'All Applications',
        items: [
            { icon: <TerminalIcon />, label: 'Root Terminal Emulator', description: 'Run terminal as root' },
            { icon: <WebIcon />, label: 'Web Browser', description: 'Browse the internet' },
            { icon: <FolderIcon />, label: 'File Manager', description: 'Manage files and folders' },
            { icon: <BugReportIcon />, label: 'Kali Bugs', description: 'Submit and view bugs' },
            { icon: <PublicIcon />, label: 'OffSec Training', description: 'Offensive Security training resources' },
        ]
    },
];

const usualApplications = [
    { 
        icon: <SearchIcon />, 
        label: '01 - Information Gathering', 
        description: 'Tools for gathering information',
        link: 'https://www.geeksforgeeks.org/kali-linux-information-gathering-tools/' 
    },
    { icon: <SecurityIcon />, label: '02 - Vulnerability Analysis', description: 'Analyze system vulnerabilities' },
    { icon: <AssessmentIcon />, label: '03 - Web Application Analysis', description: 'Analyze web apps for security' },
    { icon: <ReportIcon />, label: '04 - Database Assessment', description: 'Database security tools' },
    { icon: <BugReportIcon />, label: '05 - Password Attacks', description: 'Password cracking tools' },
    { icon: <WifiIcon />, label: '06 - Wireless Attacks', description: 'Wireless network attacks' },
    { icon: <EngineeringIcon />, label: '07 - Reverse Engineering', description: 'Analyze and reverse engineer code' },
];

const KaliLauncher = ({ onClose }) => {
    return (
        <Box
            sx={{
                width: '700px',
                bgcolor: '#1c1c1c',
                color: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 3,
                position: 'absolute',
                top: '40px',
                left: '10px',
                zIndex: 1300,
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            {/* Left Column: Categories and Items */}
            <Box sx={{ width: '50%', padding: 2, overflowY: 'auto' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        bgcolor: '#333',
                        padding: '8px 16px',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                    }}
                >
                    <Typography variant="body1">Applications</Typography>
                    <IconButton size="small" sx={{ color: '#ffffff' }} onClick={onClose}>
                        ✕
                    </IconButton>
                </Box>

                {categories.map((category) => (
                    <Box key={category.label} sx={{ padding: '8px 16px', marginBottom: '8px' }}>
                        <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 1 }}>{category.label}</Typography>
                        <List sx={{ padding: 0 }}>
                            {category.items.map((item) => (
                                <ListItem 
                                    key={item.label} 
                                    button 
                                    sx={{ padding: '4px 8px', display: 'flex', alignItems: 'center' }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        {item.icon}
                                        <ListItemText primary={item.label} sx={{ color: '#ffffff' }} />
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </Box>

            {/* Right Column: Usual Applications */}
            <Box sx={{ width: '50%', padding: 2, bgcolor: '#2c2c2c', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 2 }}>Usual Applications</Typography>
                <List>
                    {usualApplications.map((app) => (
                        <ListItem 
                            key={app.label} 
                            button 
                            onClick={() => app.link && window.open(app.link, '_blank')} // Opens link if it exists
                            sx={{ padding: '4px 8px', display: 'flex', alignItems: 'center' }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {app.icon}
                                <ListItemText primary={app.label} sx={{ color: '#ffffff' }} />
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default KaliLauncher;
