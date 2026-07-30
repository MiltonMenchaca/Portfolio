import React, { useState } from 'react'; 
import { Box, Typography, Divider, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import FolderIcon from '@mui/icons-material/Folder';
import AboutMe from './AboutMe';
import Projects from './Projects';
import BadgesAndCertificates from './BadgesAndCertificates';

const Experience = ({ onClose }) => {
    const [openModal, setOpenModal] = useState({
        AboutMe: false,
        Projects: false,
        Badges: false,
    });

    const handleSidebarClick = (label) => {
        setOpenModal((prevState) => ({
            ...prevState,
            [label]: true,
        }));
    };

    const handleCloseSidebarModal = (label) => {
        setOpenModal((prevState) => ({
            ...prevState,
            [label]: false,
        }));
    };

    return (
        <Box
            sx={{
                width: '80%',
                height: '80%',
                bgcolor: '#2c2c2c',
                color: '#ffffff',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
                position: 'relative',
            }}
        >
            {/* Top Bar */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    bgcolor: '#3a3a3a',
                    padding: '8px 16px',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                }}
            >
                <Typography variant="body1">Experience</Typography>
                <Box>
                    <IconButton size="small" sx={{ color: '#ffffff' }} onClick={onClose}>
                        <MinimizeIcon />
                    </IconButton>
                    <IconButton size="small" sx={{ color: '#ffffff' }} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Main Content with Sidebar */}
            <Box sx={{ display: 'flex', height: '100%' }}>
                {/* Sidebar */}
                <Box
                    sx={{
                        width: '200px',
                        bgcolor: '#1c1c1c',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Typography variant="body2" sx={{ color: '#bfbfbf', marginBottom: '8px' }}>
                        Places
                    </Typography>
                    {['AboutMe', 'Projects', 'Badges'].map((label, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleSidebarClick(label)}
                        >
                            <FolderIcon sx={{ color: '#3b82f6' }} />
                            <Typography variant="body2">{label}</Typography>
                        </Box>
                    ))}
                </Box>

                {/* Main Content */}
                <Box
                    sx={{
                        flex: 1,
                        padding: '16px',
                        overflowY: 'auto',
                    }}
                >
                    <Typography variant="h5" sx={{ color: '#bfbfbf', marginBottom: '16px' }}>
                        Professional Experience
                    </Typography>
                    <Divider sx={{ bgcolor: '#444', marginBottom: '16px' }} />

                    {/* Grupo Same */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ color: '#00ff00', fontWeight: 'bold' }}>
                            Network and Application Security Specialist
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 1 }}>
                            Grupo SAME (Cúmulo) | Jan 2026 - Present
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • Continuous web application pentesting and vulnerability remediation following OWASP Top 10 standards.<br/>
                            • Linux server hardening and defense-in-depth web architecture implementation.<br/>
                            • Proactive monitoring, threat detection, and incident response.<br/>
                            • Configuration and administration of Linux servers optimized for secure deployment.
                        </Typography>
                    </Box>

                    {/* Threatix */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ color: '#00ff00', fontWeight: 'bold' }}>
                            Founder & CEO
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 1 }}>
                            Threatix | Jan 2026 - Present
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#3b82f6', cursor: 'pointer', mb: 1 }} component="a" href="https://threatix.com.mx/" target="_blank">
                            https://threatix.com.mx/
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • Founded cybersecurity education platform in Spanish for Latin America and Spain.<br/>
                            • Created technical content: vulnerability assessment modules, MITRE ATT&CK techniques, and security research.<br/>
                            • Led multidisciplinary team (OSINT, development, content) and developed hands-on labs.
                        </Typography>
                    </Box>

                    {/* Atura */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ color: '#00ff00', fontWeight: 'bold' }}>
                            Backend Developer
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 1 }}>
                            Atura | Jun 2025 - Dec 2025 (7 months)
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • Developed REST APIs with PHP/Laravel and Node.js, Swagger/Postman documentation.<br/>
                            • Optimized MySQL database integration, schema design, and query performance.<br/>
                            • Implemented JWT/OAuth2 authentication and Linux server deployment.
                        </Typography>
                    </Box>

                    {/* 0x12 Dark Development */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ color: '#00ff00', fontWeight: 'bold' }}>
                            Developer & Security Researcher
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 1 }}>
                            0x12 Dark Development | Jan 2025 - Dec 2025 (1 year)
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#3b82f6', cursor: 'pointer', mb: 1 }} component="a" href="https://0x12darkdev.net/" target="_blank">
                            https://0x12darkdev.net/
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • Developed offensive tooling and advanced pentesting techniques for research purposes.<br/>
                            • Built custom C2 agents integrated with the Mythic framework.<br/>
                            • Researched evasion techniques for Windows and Android operating systems.
                        </Typography>
                    </Box>

                    {/* Bureau Veritas */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ color: '#00ff00', fontWeight: 'bold' }}>
                            Risk Analyst & Technical Reports
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 1 }}>
                            Bureau Veritas Mexicana | Jan 2024 - Jun 2024 (6 months)
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • Technical analysis and risk management in industrial environment (Salina Cruz refinery).<br/>
                            • Risk scenario matrix management and impact assessment.<br/>
                            • Technical documentation and reports for decision-making.
                        </Typography>
                    </Box>

                    <Divider sx={{ bgcolor: '#444', my: 2 }} />

                    <Typography variant="caption" sx={{ color: '#777' }}>
                        * Certifications: HTB Academy (Penetration Tester, SOC Analyst, Bug Bounty Hunter), Cisco (Ethical Hacker, Junior Cybersecurity Analyst), AWS Academy (Cloud Foundations, Data Engineering)
                    </Typography>
                </Box>
            </Box>

            {/* Modals for each section */}
            <Modal open={openModal.AboutMe} onClose={() => handleCloseSidebarModal('AboutMe')}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <AboutMe onClose={() => handleCloseSidebarModal('AboutMe')} />
                </Box>
            </Modal>

            <Modal open={openModal.Projects} onClose={() => handleCloseSidebarModal('Projects')}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Projects onClose={() => handleCloseSidebarModal('Projects')} />
                </Box>
            </Modal>

            <Modal open={openModal.Badges} onClose={() => handleCloseSidebarModal('Badges')}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <BadgesAndCertificates onClose={() => handleCloseSidebarModal('Badges')} />
                </Box>
            </Modal>
        </Box>
    );
};

export default Experience;
