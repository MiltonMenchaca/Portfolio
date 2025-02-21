import React, { useState } from 'react';
import { Box, Typography, Grid, Modal } from '@mui/material';
import DesktopTopBar from './DesktopTopBar';
import AboutMe from './AboutMe';
import BadgesAndCertificates from './BadgesAndCertificates';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience'; // Importa el componente Experience
import NetworkUsageWidget from './NetworkUsageWidget';
import SystemInfoWidget from './SystemInfoWidget';
import CalendarWidget from './CalendarWidget';
import SpotifyWidget from './SpotifyWidget';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WorkIcon from '@mui/icons-material/Work'; // Ícono para experiencia

const Home = () => {
    const [openModal, setOpenModal] = useState({
        AboutMe: false,
        Badges: false,
        Projects: false,
        Contact: false,
        Experience: false, // Nuevo estado para experiencia
    });

    const handleIconClick = (label) => {
        setOpenModal((prevState) => ({ ...prevState, [label]: true }));
    };

    const handleCloseModal = (label) => {
        setOpenModal((prevState) => ({ ...prevState, [label]: false }));
    };

    const icons = [
        { label: 'Trash', icon: <DeleteIcon /> },
        { label: 'Home', icon: <HomeIcon /> },
        { label: 'AboutMe', icon: <AccountCircleIcon /> },
        { label: 'Projects', icon: <CodeIcon /> },
        { label: 'Contact', icon: <EmailIcon /> },
        { label: 'Badges', icon: <MilitaryTechIcon /> },
        { label: 'Experience', icon: <WorkIcon /> }, // Ícono para experiencia
    ];

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                color: '#ffffff',
                position: 'relative',
                backgroundImage: 'url(/bkg3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box className="particle-background"></Box> {/* Fondo de partículas */}
            <DesktopTopBar />

            {/* Contenedor de iconos alineado a la izquierda */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', paddingTop: '50px', paddingLeft: 4, zIndex: 1 }}>
                <Grid container spacing={6} sx={{ maxWidth: 300 }}>
                    {icons.map((item, index) => (
                        <Grid item xs={6} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    ':hover': { opacity: 0.8 },
                                }}
                                onClick={() => handleIconClick(item.label)}
                            >
                                <Box sx={{ fontSize: 70, color: '#3b82f6' }}>{item.icon}</Box>
                                <Typography variant="body1" align="center" sx={{ mt: 1, color: '#ffffff', fontSize: '1.1rem' }}>
                                    {item.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Widgets en el lado derecho */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '250px',
                    zIndex: 1,
                }}
            >
                <NetworkUsageWidget />
                <SystemInfoWidget />
                <CalendarWidget />
                <SpotifyWidget />
            </Box>

            {/* Modales para cada sección */}
            <Modal open={openModal.AboutMe} onClose={() => handleCloseModal('AboutMe')}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <AboutMe onClose={() => handleCloseModal('AboutMe')} />
                </Box>
            </Modal>

            <Modal open={openModal.Badges} onClose={() => handleCloseModal('Badges')}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <BadgesAndCertificates onClose={() => handleCloseModal('Badges')} />
                </Box>
            </Modal>

            <Modal open={openModal.Projects} onClose={() => handleCloseModal('Projects')}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Projects onClose={() => handleCloseModal('Projects')} />
                </Box>
            </Modal>

            <Modal open={openModal.Contact} onClose={() => handleCloseModal('Contact')}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Contact onClose={() => handleCloseModal('Contact')} />
                </Box>
            </Modal>

            {/* Modal para experiencia */}
            <Modal open={openModal.Experience} onClose={() => handleCloseModal('Experience')}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Experience onClose={() => handleCloseModal('Experience')} />
                </Box>
            </Modal>
        </Box>
    );
};

export default Home;
