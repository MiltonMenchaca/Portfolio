// src/components/Documents.js
import React, { useState } from 'react';
import { Box, Typography, IconButton, Grid, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FolderIcon from '@mui/icons-material/Folder';
import DownloadIcon from '@mui/icons-material/Download';
import AboutMe from './AboutMe';
import Projects from './Projects';
import BadgesAndCertificates from './BadgesAndCertificates';
import Contact from './Contact';

const Documents = ({ onClose }) => {
    const [openModal, setOpenModal] = useState(null);

    // Define the document items and their corresponding components
    const documentList = [
        { name: "About Me", component: AboutMe },
        { name: "Projects", component: Projects },
        { name: "Certificates & Badges", component: BadgesAndCertificates },
        { name: "Contact", component: Contact },
        { name: "Download CV", isDownload: true },
    ];

    // Handle click event for each document item
    const handleItemClick = (item) => {
        if (item.isDownload) {
            // Handle CV download here
            window.open('/CV.pdf', '_blank'); // Adjust this path as needed
        } else {
            // Set the modal to open the corresponding component
            setOpenModal(item);
        }
    };

    // Handle closing of the modal
    const handleCloseModal = () => {
        setOpenModal(null);
    };

    return (
        <Box
            sx={{
                width: '600px',
                height: '400px',
                bgcolor: '#2c2c2c',
                color: '#ffffff',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
                position: 'fixed',
                top: '50px',
                left: '50%',
                transform: 'translate(-50%, 0)',
                zIndex: 2000,
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
                <Typography variant="body1">Documents</Typography>
                <IconButton size="small" sx={{ color: '#ffffff' }} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Content */}
            <Box
                sx={{
                    flex: 1,
                    padding: '16px',
                    bgcolor: '#1c1c1c',
                    overflowY: 'auto',
                }}
            >
                <Grid container spacing={2}>
                    {documentList.map((doc, index) => (
                        <Grid item xs={12} key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton onClick={() => handleItemClick(doc)}>
                                {doc.isDownload ? <DownloadIcon sx={{ color: '#3b82f6' }} /> : <FolderIcon sx={{ color: '#3b82f6' }} />}
                            </IconButton>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    '&:hover': { textDecoration: 'underline' },
                                }}
                                onClick={() => handleItemClick(doc)}
                            >
                                {doc.name}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Modals for each component */}
            {openModal && (
                <Modal open={Boolean(openModal)} onClose={handleCloseModal}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                            padding: { xs: '16px', sm: 0 },
                        }}
                    >
                        <Box
                            sx={{
                                width: '80%',
                                maxHeight: '80vh',
                                bgcolor: '#2c2c2c',
                                borderRadius: '8px',
                                boxShadow: 3,
                                overflowY: 'auto',
                            }}
                        >
                            {/* Render the selected component dynamically */}
                            {openModal.component && <openModal.component onClose={handleCloseModal} />}
                        </Box>
                    </Box>
                </Modal>
            )}
        </Box>
    );
};

export default Documents;
