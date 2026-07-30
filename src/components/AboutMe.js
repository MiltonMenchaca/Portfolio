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

          <Typography variant="body2" sx={{ color: '#3b82f6', cursor: 'pointer', mb: 2 }} component="a" href="https://www.linkedin.com/in/milton-emilio-menchaca-manero-349519398/" target="_blank">
            LinkedIn Profile
          </Typography>
          <Divider sx={{ bgcolor: '#444', marginBottom: '16px' }} />

          {/* Professional Profile */}
          <Typography variant="h6" sx={{ color: '#bfbfbf', mt: 2 }}>
            Professional Profile
          </Typography>
          <Typography variant="body2" sx={{ color: '#ffffff', mt: 1 }}>
            Offensive & Defensive Security Engineer and Full Stack Developer. I find security flaws and defend systems to prevent breaches. Solid foundation in full stack development (React, Node.js, Django, PHP/Laravel) combined with expertise in pentesting, incident response, and infrastructure hardening. Certified by Cisco (Ethical Hacker, Junior Cybersecurity Analyst) and AWS Academy (Cloud Foundations, Data Engineering). Founder of Threatix, a cybersecurity education platform in Spanish.
          </Typography>

          {/* Experience */}
          <Typography variant="h6" sx={{ color: '#bfbfbf', mt: 2 }}>
            Professional Experience
          </Typography>
          <Divider sx={{ bgcolor: '#444', marginBottom: '8px' }} />
          
          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#00ff00', fontWeight: 'bold' }}>Network and Application Security Specialist</Typography>
            <Typography variant="body2" sx={{ color: '#bfbfbf' }}>Grupo SAME (Cúmulo) | Jan 2026 - Present</Typography>
            <Typography variant="body2" sx={{ color: '#ffffff', ml: 2, mt: 0.5 }}>
              • Continuous web application pentesting and vulnerability remediation (OWASP Top 10)<br/>
              • Linux server hardening and web architecture defense-in-depth<br/>
              • Proactive monitoring, threat detection, and incident response
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#00ff00', fontWeight: 'bold' }}>Founder & CEO</Typography>
            <Typography variant="body2" sx={{ color: '#bfbfbf' }}>Threatix | Jan 2026 - Present</Typography>
            <Typography variant="caption" sx={{ color: '#3b82f6', cursor: 'pointer' }} component="a" href="https://threatix.com.mx/" target="_blank">https://threatix.com.mx/</Typography>
            <Typography variant="body2" sx={{ color: '#ffffff', ml: 2, mt: 0.5 }}>
              • Cybersecurity education platform in Spanish for Latin America and Spain<br/>
              • Technical content: vulnerability assessment modules, MITRE ATT&CK techniques<br/>
              • Multidisciplinary team leadership and hands-on lab development
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#00ff00', fontWeight: 'bold' }}>Backend Developer</Typography>
            <Typography variant="body2" sx={{ color: '#bfbfbf' }}>Atura | Jun 2025 - Dec 2025 (7 months)</Typography>
            <Typography variant="body2" sx={{ color: '#ffffff', ml: 2, mt: 0.5 }}>
              • REST APIs with PHP/Laravel and Node.js, Swagger/Postman documentation<br/>
              • MySQL, JWT/OAuth2 authentication, Linux server deployment
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#00ff00', fontWeight: 'bold' }}>Developer & Security Researcher</Typography>
            <Typography variant="body2" sx={{ color: '#bfbfbf' }}>0x12 Dark Development | Jan 2025 - Dec 2025 (1 year)</Typography>
            <Typography variant="caption" sx={{ color: '#3b82f6', cursor: 'pointer' }} component="a" href="https://0x12darkdev.net/" target="_blank">https://0x12darkdev.net/</Typography>
            <Typography variant="body2" sx={{ color: '#ffffff', ml: 2, mt: 0.5 }}>
              • Offensive tooling, custom C2 agents with Mythic, Windows/Android evasion research<br/>
              • Cybersecurity educational content and proof-of-concept development
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#00ff00', fontWeight: 'bold' }}>Risk Analyst & Technical Reports</Typography>
            <Typography variant="body2" sx={{ color: '#bfbfbf' }}>Bureau Veritas Mexicana | Jan 2024 - Jun 2024 (6 months)</Typography>
            <Typography variant="body2" sx={{ color: '#ffffff', ml: 2, mt: 0.5 }}>
              • Technical analysis and risk management in industrial environment (Salina Cruz refinery)<br/>
              • Technical documentation and reports for decision-making
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
