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
            {/* Project 1: Blog */}
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => window.open('https://miltonmenchaca.github.io/MiltonM.github.io/', '_blank')}
            >
              <img
                src={`${process.env.PUBLIC_URL}/blog.png`}
                alt="Milton Blog"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Typography variant="caption" align="center" display="block" sx={{ mt: 1, color: '#3b82f6', textDecoration: 'underline' }}>
                Milton Blog
              </Typography>
              {/* Project 5: Medium Blog (New) */}
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => window.open('https://medium.com/@lord_murak/about', '_blank')}
            >
              <img
                src={`${process.env.PUBLIC_URL}/mediummurak.png`}
                alt="Medium Blog Lord Murak"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Typography variant="caption" align="center" display="block" sx={{ mt: 1, color: '#3b82f6', textDecoration: 'underline' }}>
                Medium Blog
              </Typography>
              {/* Project 6: Osint Platform (New) */}
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => window.open('https://github.com/MiltonMenchaca/Osint_platform', '_blank')}
            >
              <img
                src={`${process.env.PUBLIC_URL}/osintplatform.png`}
                alt="OSINT Platform"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Typography variant="caption" align="center" display="block" sx={{ mt: 1, color: '#3b82f6', textDecoration: 'underline' }}>
                OSINT Platform
              </Typography>
            </Grid>
          </Grid>
          </Grid>

            {/* Project 2: Inclúyeme en tu Mundo */}
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => window.open('https://www.incluyemeentumundo.org/', '_blank')}
            >
              <img
                src={`${process.env.PUBLIC_URL}/INCTM.png`}
                alt="Inclúyeme en tu Mundo"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Typography variant="caption" align="center" display="block" sx={{ mt: 1, color: '#3b82f6', textDecoration: 'underline' }}>
                Inclúyeme en tu Mundo
              </Typography>
            </Grid>

            {/* Project 3: SSETCO (Existing) */}
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
              <Typography variant="caption" align="center" display="block" sx={{ mt: 1 }}>
                SSETCO
              </Typography>
            </Grid>

            {/* Project 4: VulnHunter (New) */}
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => window.open('https://github.com/MiltonMenchaca/VulnHunter', '_blank')}
            >
              <img
                src={`${process.env.PUBLIC_URL}/logovulnhunter.png`}
                alt="VulnHunter Tool"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Typography variant="caption" align="center" display="block" sx={{ mt: 1, color: '#3b82f6', textDecoration: 'underline' }}>
                VulnHunter
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
