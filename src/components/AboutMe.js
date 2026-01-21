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
          {/* Header Section */}
          <Typography variant="h5" sx={{ color: '#bfbfbf', fontWeight: 'bold' }}>
            Milton Emilio Menchaca Manero
          </Typography>

          <Typography variant="body2" sx={{ color: '#3b82f6', cursor: 'pointer', mb: 2 }} component="a" href="https://www.linkedin.com/in/milton-m-a9933a294/" target="_blank">
            LinkedIn Profile
          </Typography>
          <Divider sx={{ bgcolor: '#444', marginBottom: '16px' }} />

          {/* Professional Profile */}
          <Typography variant="h6" sx={{ color: '#bfbfbf', mt: 2 }}>
            Professional Profile
          </Typography>
          <Typography variant="body2" sx={{ color: '#ffffff', mt: 1 }}>
            Full Stack Developer & Cybersecurity Specialist. I combine advanced software engineering (React, Node.js, Django) with offensive security expertise to build resilient, scalable applications. My background in malware research and network security allows me to architect solutions that are not only functional and user-centric but secure by design. Focused on delivering efficient results through technical precision and proactive defense strategies.
          </Typography>

          {/* Experience */}
          <Typography variant="h6" sx={{ color: '#bfbfbf', mt: 2 }}>
            Experience
          </Typography>
          
          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#00ff00', fontWeight: 'bold' }}>Network and Application Security Specialist</Typography>
            <Typography variant="body2" sx={{ color: '#bfbfbf' }}>Grupo Same | Present (Recently Promoted)</Typography>
            <Typography variant="caption" sx={{ color: '#3b82f6', cursor: 'pointer' }} component="a" href="https://www.gruposame.mx/" target="_blank">https://www.gruposame.mx/</Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#00ff00', fontWeight: 'bold' }}>Backend Developer</Typography>
            <Typography variant="body2" sx={{ color: '#bfbfbf' }}>Atura | 6 months</Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#00ff00', fontWeight: 'bold' }}>Developer & Security Researcher</Typography>
            <Typography variant="body2" sx={{ color: '#bfbfbf' }}>0x12 Dark Development | Since Jan 2025</Typography>
             <Typography variant="caption" sx={{ color: '#3b82f6', cursor: 'pointer' }} component="a" href="https://0x12darkdev.net/" target="_blank">https://0x12darkdev.net/</Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#00ff00', fontWeight: 'bold' }}>Freelance Full Stack Developer</Typography>
            <Typography variant="body2" sx={{ color: '#bfbfbf' }}>Remote | Sep 2024 - Present</Typography>
            <Typography variant="body2" sx={{ color: '#ffffff', ml: 2, mt: 0.5 }}>
              • Interface development with React and backend with Django/Node.js.<br/>
              • Building REST APIs, database integration, and deployment.<br/>
              • Automation of technical tasks and security testing.
            </Typography>
          </Box>



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
