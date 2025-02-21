// src/components/Contact.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import FolderIcon from '@mui/icons-material/Folder';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import AboutMe from './AboutMe';
import Projects from './Projects';
import BadgesAndCertificates from './BadgesAndCertificates';

const Contact = ({ onClose }) => {
    const [openAboutMe, setOpenAboutMe] = useState(false);
    const [openProjects, setOpenProjects] = useState(false);
    const [openBadges, setOpenBadges] = useState(false);

    const handleFolderClick = (folder) => {
        if (folder === 'About Me') setOpenAboutMe(true);
        else if (folder === 'Projects') setOpenProjects(true);
        else if (folder === 'Badges & Certificates') setOpenBadges(true);
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
            {/* Title Bar */}
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
                <Typography variant="body1">Contact - Milton Menchaca</Typography>
                <Box>
                    <IconButton size="small" sx={{ color: '#ffffff' }} onClick={onClose}>
                        <MinimizeIcon />
                    </IconButton>
                    <IconButton size="small" sx={{ color: '#ffffff' }} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Main Content with Sidebar and Form */}
            <Box sx={{ display: 'flex', height: '100%' }}>
                {/* Sidebar Navigation */}
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
                    <Typography variant="body2" sx={{ color: '#bfbfbf' }}>
                        Places
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                         onClick={() => handleFolderClick('About Me')}>
                        <FolderIcon sx={{ color: '#3b82f6' }} />
                        <Typography variant="body2">About Me</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                         onClick={() => handleFolderClick('Projects')}>
                        <FolderIcon sx={{ color: '#3b82f6' }} />
                        <Typography variant="body2">Projects</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                         onClick={() => handleFolderClick('Badges & Certificates')}>
                        <FolderIcon sx={{ color: '#3b82f6' }} />
                        <Typography variant="body2">Badges & Certificates</Typography>
                    </Box>
                </Box>

                {/* Contact Form Section */}
                <Box
                    sx={{
                        flex: 1,
                        padding: '16px',
                        bgcolor: '#2c2c2c',
                        overflowY: 'auto',
                        maxHeight: 'calc(100% - 48px)',
                    }}
                >
                    <Typography variant="h6" sx={{ color: '#bfbfbf' }}>
                        Contact Me
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#ffffff', marginBottom: '16px' }}>
                        Feel free to reach out to me via this form, and I’ll get back to you as soon as possible.
                    </Typography>

                    <Box component="form" noValidate autoComplete="off">
                        <TextField
                            label="Your Name"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                style: { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' },
                            }}
                            sx={{ marginBottom: 2 }}
                        />

                        <TextField
                            label="Your Email"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                style: { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' },
                            }}
                            sx={{ marginBottom: 2 }}
                        />

                        <TextField
                            label="Your Message"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                            InputProps={{
                                style: { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' },
                            }}
                            sx={{ marginBottom: 2 }}
                        />

                        <Button variant="contained" color="primary" sx={{ backgroundColor: '#3b82f6', color: '#ffffff' }}>
                            Send Message
                        </Button>
                    </Box>

                    {/* Social Media Icons Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '24px',
                            gap: '16px',
                        }}
                    >
                        <IconButton href="https://github.com/" target="_blank" sx={{ color: '#ffffff' }}>
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                        <IconButton href="https://linkedin.com/" target="_blank" sx={{ color: '#0077b5' }}>
                            <LinkedInIcon fontSize="large" />
                        </IconButton>
                        <IconButton href="https://twitter.com/" target="_blank" sx={{ color: '#1DA1F2' }}>
                            <TwitterIcon fontSize="large" />
                        </IconButton>
                        <IconButton href="mailto:example@example.com" sx={{ color: '#c71610' }}>
                            <EmailIcon fontSize="large" />
                        </IconButton>
                        <IconButton href="https://discord.com/" target="_blank" sx={{ color: '#5865F2' }}>
                            <ChatIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* Modals for other sections */}
            <Modal open={openAboutMe} onClose={() => setOpenAboutMe(false)}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <AboutMe onClose={() => setOpenAboutMe(false)} />
                </Box>
            </Modal>

            <Modal open={openProjects} onClose={() => setOpenProjects(false)}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Projects onClose={() => setOpenProjects(false)} />
                </Box>
            </Modal>

            <Modal open={openBadges} onClose={() => setOpenBadges(false)}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <BadgesAndCertificates onClose={() => setOpenBadges(false)} />
                </Box>
            </Modal>
        </Box>
    );
};

export default Contact;
