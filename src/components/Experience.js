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
                            Grupo Same | Present (Recently Promoted)
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • Leading network security initiatives and application hardening strategies.<br/>
                            • Conducting vulnerability assessments and implementing defense-in-depth architectures.<br/>
                            • Securing internal infrastructure and optimizing incident response protocols.
                        </Typography>
                    </Box>

                    {/* Atura */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ color: '#00ff00', fontWeight: 'bold' }}>
                            Backend Developer
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 1 }}>
                            Atura | 6 months
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • Developed robust backend architectures using PHP and Laravel.<br/>
                            • Optimized API performance and database queries for high-traffic environments.<br/>
                            • Integrated secure authentication flows and data protection measures.
                        </Typography>
                    </Box>

                    {/* 0x12 Dark Development */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ color: '#00ff00', fontWeight: 'bold' }}>
                            Developer & Security Researcher
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 1 }}>
                            0x12 Dark Development | Jan 2025 - Present
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • Researching advanced malware development techniques and evasion strategies.<br/>
                            • Developing custom C2 infrastructure and offensive tooling for red teaming.<br/>
                            • Analyzing modern defensive mechanisms to create more resilient security solutions.
                        </Typography>
                    </Box>

                    {/* Freelance */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ color: '#bfbfbf', fontWeight: 'bold' }}>
                            Freelance Full Stack Developer
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 1 }}>
                            Remote | Sep 2024 - Present
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • Delivering end-to-end web solutions with a strong focus on React.<br/>
                            • Building modern, responsive front-end interfaces and scalable back-ends.<br/>
                            • Automating deployment pipelines and conducting security audits for client applications.
                        </Typography>
                    </Box>

                    <Divider sx={{ bgcolor: '#444', my: 2 }} />

                    <Typography variant="caption" sx={{ color: '#777' }}>
                        * Previous roles in administrative and reporting sectors omitted for brevity.
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
