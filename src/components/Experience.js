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
                        Experience
                    </Typography>
                    <Divider sx={{ bgcolor: '#444', marginBottom: '16px' }} />

                    {/* Freelance Web Developer */}
                    <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                        <strong>Freelance Web Developer</strong>
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                        Over 1 year of experience designing and developing custom web applications using React, Node.js, and modern frameworks. Delivered scalable solutions tailored to client-specific requirements.
                    </Typography>

                    {/* Infrastructure Developer */}
                    <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                        <strong>Infrastructure Developer</strong>
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                        Designed and deployed C2 infrastructure using Empire on AWS Cloud for security testing and red team operations. Developed custom malware in C and Python for penetration testing and ethical hacking purposes.
                    </Typography>

                    {/* Invoice Specialist */}
                    <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                        <strong>Invoice Specialist</strong> - SSETCO Consultoría Integral
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                        - Created invoices for clients and managed client products using COTPAQUI Comercial.
                        <br />- Monitored invoices using IntelliSAT and prepared quotes for clients.
                        <br />- Coordinated order deliveries to clients’ locations.
                    </Typography>

                    {/* Report Assistant */}
                    <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                        <strong>Report Assistant</strong> - Bureau Veritas Mexicana
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                        - Analyzed and identified diagrams for wastewater plants at the Salina Cruz refinery.
                        <br />- Managed and prepared reports on wastewater plant performance.
                        <br />- Developed and maintained risk scenario matrices.
                    </Typography>

                    {/* Technical Skills */}
                    <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                        <strong>Technical Skills</strong>
                    </Typography>
                    <Typography variant="body2">
                        Proficient in JavaScript, Typescript, React, Node.js, Python, and tools like Wireshark, Metasploit, IntelliSAT, and AWS Cloud management.
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
