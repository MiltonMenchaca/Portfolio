// src/components/Project.js
import React, { useState } from 'react';
import { Box, Typography, Divider, IconButton, Grid, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import FolderIcon from '@mui/icons-material/Folder';
import AboutMe from './AboutMe';
import BadgesAndCertificates from './BadgesAndCertificates';
import Contact from './Contact';

const Project = ({ onClose }) => {
  const [openAboutMe, setOpenAboutMe] = useState(false);
  const [openBadges, setOpenBadges] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const handleFolderClick = (label) => {
    if (label === 'About Me') {
      setOpenAboutMe(true);
    } else if (label === 'Badges & Certificates') {
      setOpenBadges(true);
    } else if (label === 'Contact') {
      setOpenContact(true);
    }
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
        <Typography variant="body1">Projects</Typography>
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
        {/* Sidebar Navigation */}
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

          {/* Sidebar Folders */}
          {['About Me', 'Badges & Certificates', 'Contact'].map((folder, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              onClick={() => handleFolderClick(folder)}
            >
              <FolderIcon sx={{ color: '#3b82f6' }} />
              <Typography variant="body2">{folder}</Typography>
            </Box>
          ))}
        </Box>

        {/* Main Content with Project Gallery */}
        <Box
          sx={{
            flex: 1,
            padding: '16px',
            bgcolor: '#2c2c2c',
            overflowY: 'auto',
          }}
        >
          <Typography variant="h6" sx={{ color: '#bfbfbf' }}>
            My Projects
          </Typography>
          <Divider sx={{ bgcolor: '#444', marginBottom: '16px' }} />

          {/* Projects Gallery */}
          <Grid container spacing={2}>
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/blog.png`}
                alt="Blog"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Typography variant="caption" align="center" display="block">
                Project 1
              </Typography>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/INCTM.png`}
                alt="Incluyeme en tu mundo site"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Typography variant="caption" align="center" display="block">
                Project 2
              </Typography>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/ssetco.png`}
                alt="SSETCO site full stack"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Typography variant="caption" align="center" display="block">
                Project 3
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Modals for Other Components */}
      <Modal open={openAboutMe} onClose={() => setOpenAboutMe(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <AboutMe onClose={() => setOpenAboutMe(false)} />
        </Box>
      </Modal>

      <Modal open={openBadges} onClose={() => setOpenBadges(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <BadgesAndCertificates onClose={() => setOpenBadges(false)} />
        </Box>
      </Modal>

      <Modal open={openContact} onClose={() => setOpenContact(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Contact onClose={() => setOpenContact(false)} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Project;
