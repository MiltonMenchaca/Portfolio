// src/components/AboutMe.js
import React, { useState } from 'react';
import { Box, Typography, Divider, IconButton, Grid, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import FolderIcon from '@mui/icons-material/Folder';
import Projects from './Projects';
import Contact from './Contact';
import BadgesAndCertificates from './BadgesAndCertificates';

const AboutMe = ({ onClose }) => {
  const [openProjects, setOpenProjects] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openBadges, setOpenBadges] = useState(false);

  const handleFolderClick = (label) => {
    if (label === 'Projects') {
      setOpenProjects(true);
    } else if (label === 'Contact') {
      setOpenContact(true);
    } else if (label === 'Badges & Certificates') {
      setOpenBadges(true);
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
        <Typography variant="body1">About me - Milton Menchaca</Typography>
        <Box>
          <IconButton size="small" sx={{ color: '#ffffff' }} onClick={onClose}>
            <MinimizeIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: '#ffffff' }} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Main Content with Scrollable Area */}
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

          {/* Folder Links in Sidebar */}
          {['Home', 'Projects', 'Contact', 'Badges & Certificates'].map((folder, index) => (
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

        {/* Folder Content */}
        <Box
          sx={{
            flex: 1,
            padding: '16px',
            bgcolor: '#2c2c2c',
            overflowY: 'auto',
            maxHeight: 'calc(100% - 48px)',
          }}
        >
          {/* About Me Section */}
          <Typography variant="h6" sx={{ color: '#bfbfbf' }}>
            About Me
          </Typography>
          <Divider sx={{ bgcolor: '#444', marginBottom: '16px' }} />
          <Typography variant="body2" sx={{ color: '#ffffff', marginBottom: '8px' }}>
            Hi, I'm Milton Emilio Menchaca Manero, a developer passionate about technology with knowledge in multiple
            areas of cybersecurity and web development. I'm currently studying Software Development Engineering and a
            Bachelor's in Web Development. I love learning and creating innovative solutions. In my free time, I study
            pentesting and red teaming to expand my skills in information security.
          </Typography>

          {/* Cybersecurity Section */}
          <Typography variant="h6" sx={{ color: '#bfbfbf', marginTop: '16px' }}>
            Cybersecurity
          </Typography>
          <Divider sx={{ bgcolor: '#444', marginBottom: '8px' }} />
          <Grid container spacing={2}>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/empire.png`}
                alt="Empire"
                style={{ width: '80px', height: '80px' }}
              />
              <Typography variant="caption" align="center" display="block">
                Empire
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/GHIDRA_1.png`}
                alt="Ghidra"
                style={{ width: '90px', height: '80px' }}
              />
              <Typography variant="caption" align="center" display="block">
                Ghidra
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/myrthic.jpg`}
                alt="Mythic"
                style={{ width: '90px', height: '80px', borderRadius: '5px' }}
              />
              <Typography variant="caption" align="center" display="block">
                Mythic
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/metasploit.png`}
                alt="Metasploit"
                style={{ width: '90px', height: '80px', borderRadius: '5px' }}
              />
              <Typography variant="caption" align="center" display="block">
                Metasploit
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/Av evasion.png`}
                alt="Av evasion"
                style={{ width: '80px', height: '80px', borderRadius: '5px' }}
              />
              <Typography variant="caption" align="center" display="block">
                Av evasion
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/owasp10.png`}
                alt="OWASP TOP 10"
                style={{ width: '80px', height: '80px', borderRadius: '5px' }}
              />
              <Typography variant="caption" align="center" display="block">
                OWASP TOP 10
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/ScareCrow.png`}
                alt="ScareCrow"
                style={{ width: '80px', height: '80px' }}
              />
              <Typography variant="caption" align="center" display="block">
                ScareCrow
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/wireshark.png`}
                alt="Wireshark"
                style={{ width: '80px', height: '80px' }}
              />
              <Typography variant="caption" align="center" display="block">
                Wireshark
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/osint.jpeg`}
                alt="OSINT"
                style={{ width: '135px', height: '80px', borderRadius: '5px' }}
              />
              <Typography variant="caption" align="center" display="block">
                OSINT
              </Typography>
            </Grid>
          </Grid>

          {/* Web Development Section */}
          <Typography variant="h6" sx={{ color: '#bfbfbf', marginTop: '16px' }}>
            Web development
          </Typography>
          <Divider sx={{ bgcolor: '#444', marginBottom: '8px' }} />
          <Grid container spacing={2}>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/javascript.png`}
                alt="javascript"
                style={{ width: '80px', height: '80px', borderRadius: '8px' }}
              />
              <Typography variant="caption" align="center" display="block">
                javascript
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/typescript.jpeg`}
                alt="Typescript"
                style={{ width: '80px', height: '80px', borderRadius: '8px' }}
              />
              <Typography variant="caption" align="center" display="block">
                Typescript
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/logo512.png`}
                alt="React"
                style={{ width: '80px', height: '80px' }}
              />
              <Typography variant="caption" align="center" display="block">
                React
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/nodejs.jpeg`}
                alt="Node.js"
                style={{ width: '80px', height: '80px', borderRadius: '8px' }}
              />
              <Typography variant="caption" align="center" display="block">
                Node.js
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/django.png`}
                alt="Django"
                style={{ width: '100px', height: '80px', borderRadius: '8px' }}
              />
              <Typography variant="caption" align="center" display="block">
                Django
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`${process.env.PUBLIC_URL}/tailwind.png`}
                alt="Tailwind"
                style={{ width: '80px', height: '80px', borderRadius: '8px' }}
              />
              <Typography variant="caption" align="center" display="block">
                Tailwind CSS
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Modals for Other Components */}
      <Modal open={openProjects} onClose={() => setOpenProjects(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Projects onClose={() => setOpenProjects(false)} />
        </Box>
      </Modal>

      <Modal open={openContact} onClose={() => setOpenContact(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Contact onClose={() => setOpenContact(false)} />
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

export default AboutMe;
