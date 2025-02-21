import React from 'react';
import { Box, Typography, Divider, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import FolderIcon from '@mui/icons-material/Folder';

const BadgesAndCertificates = ({ onClose }) => {
    return (
        <Box
            sx={{
                width: '90%',
                height: '90%',
                bgcolor: '#2c2c2c',
                color: '#ffffff',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
                position: 'relative',
            }}
        >
            {/* Barra superior */}
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
                <Typography variant="body1">Badges & Certificates</Typography>
                <Box>
                    <IconButton size="small" sx={{ color: '#ffffff' }} onClick={onClose}>
                        <MinimizeIcon />
                    </IconButton>
                    <IconButton size="small" sx={{ color: '#ffffff' }} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', height: '100%' }}>
                {/* Navegación lateral */}
                <Box
                    sx={{
                        width: '200px',
                        bgcolor: '#1c1c1c',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        borderTopLeftRadius: '8px',
                    }}
                >
                    <Typography variant="body2" sx={{ color: '#bfbfbf', mb: 2 }}>
                        Places
                    </Typography>
                    {["About Me", "Projects", "Contact"].map((folder, index) => (
                        <Box 
                            key={index} 
                            sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                        >
                            <FolderIcon sx={{ color: '#3b82f6' }} />
                            <Typography variant="body2">{folder}</Typography>
                        </Box>
                    ))}
                    <Typography variant="body2" sx={{ color: '#bfbfbf', mt: 2 }}>
                        Devices
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: 1 }}>
                        <FolderIcon sx={{ color: '#3b82f6' }} />
                        <Typography variant="body2">File System</Typography>
                    </Box>
                </Box>

                {/* Contenido principal */}
                <Box
                    sx={{
                        flex: 1,
                        padding: '16px',
                        bgcolor: '#2c2c2c',
                        overflowY: 'auto',
                    }}
                >
                    <Typography variant="h6" sx={{ color: '#bfbfbf' }}>
                        Badges & Certificates
                    </Typography>
                    <Divider sx={{ bgcolor: '#444', marginBottom: '16px' }} />

                    {/* Galería de Certificados */}
                    <Grid container spacing={3}>
                        {[
                            { img: '/certificado.jpg', title: 'Web development full stack bootcamp' },
                            { img: '/ethcissco.png', title: 'Ethical Hacker Course Cissco' },
                            { img: '/jran.png', title: 'Junior cybersecurity analyst Cissco' },
                            { img: '/certificado-core.png', title: 'Pentesting bootcamp' },
                            { img: '/red-team.png', title: 'Red team training' },
                            { img: '/ETH.png', title: 'Introduction to Hacking' },
                            { img: '/pyof.png', title: 'Offensive Python' },
                        ].map((cert, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: 'center' }}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: 3,
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        ':hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    <img src={cert.img} alt={cert.title} style={{ width: '100%', height: 'auto' }} />
                                </Box>
                                <Typography variant="body2" sx={{ marginTop: 1, color: '#bfbfbf' }}>
                                    {cert.title}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default BadgesAndCertificates;
