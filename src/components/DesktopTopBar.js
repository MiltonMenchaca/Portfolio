import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderIcon from '@mui/icons-material/Folder';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import Notepad from './Notepad';
import Terminal from './Terminal';
import Documents from './Documents';
import KaliLauncher from './KaliLauncher';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const DesktopTopBar = () => {
    const [time, setTime] = useState(new Date());
    const [cpuUsage, setCpuUsage] = useState([]);
    const [ramUsage, setRamUsage] = useState([]);
    const [notepadOpen, setNotepadOpen] = useState(false);
    const [terminalOpen, setTerminalOpen] = useState(false);
    const [documentsOpen, setDocumentsOpen] = useState(false);
    const [launcherOpen, setLauncherOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Simulate CPU and RAM usage
    useEffect(() => {
        const interval = setInterval(() => {
            setCpuUsage((prev) => [...prev.slice(-9), Math.floor(Math.random() * 100)]);
            setRamUsage((prev) => [...prev.slice(-9), Math.floor(Math.random() * 100)]);
        }, 1000); // Update every 1 second
        return () => clearInterval(interval);
    }, []);

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { display: false },
            y: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        elements: { point: { radius: 0 } },
        plugins: { legend: { display: false } }
    };

    const cpuData = {
        labels: Array(10).fill(''),
        datasets: [
            {
                data: cpuUsage,
                borderColor: '#4caf50',
                borderWidth: 1.5,
                tension: 0.4
            }
        ]
    };

    const ramData = {
        labels: Array(10).fill(''),
        datasets: [
            {
                data: ramUsage,
                borderColor: '#f44336',
                borderWidth: 1.5,
                tension: 0.4
            }
        ]
    };

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(51, 51, 51, 0.5)',
                color: '#ffffff',
                padding: '3px 3px',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                fontSize: '0.80rem',
            }}
        >
            {/* Left Section: Custom Icons with Dividers */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => setLauncherOpen(!launcherOpen)} sx={{ color: '#ffffff' }}>
                    <img src="/iconkali.png" alt="Kali" style={{ width: 39, height: 28 }} />
                </IconButton>
                <Typography variant="body2" sx={{ mx: 1 }}>|</Typography>
                <IconButton onClick={() => setDocumentsOpen(true)} sx={{ color: '#ffffff' }}>
                    <FolderIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <Typography variant="body2" sx={{ mx: 1 }}>|</Typography>
                <IconButton onClick={() => setTerminalOpen(true)} sx={{ color: '#ffffff' }}>
                    <img src="/linuxterminal.png" alt="Terminal" style={{ width: 20, height: 20 }} />
                </IconButton>
                <Typography variant="body2" sx={{ mx: 1 }}>|</Typography>
                <IconButton onClick={() => setNotepadOpen(true)} sx={{ color: '#ffffff' }}>
                    <img src="/notes.png" alt="Notepad" style={{ width: 20, height: 20 }} />
                </IconButton>
                <Typography variant="body2" sx={{ mx: 1 }}>|</Typography>
                <IconButton
                    onClick={() => window.open('https://www.mozilla.org/firefox', '_blank')}
                    sx={{ color: '#ffffff' }}
                >
                    <img src="/firefoxlogo.png" alt="Firefox" style={{ width: 20, height: 20 }} />
                </IconButton>
            </Box>

            {/* Right Section: Status Icons, Resource Usage, and Time */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={() => alert('Wi-Fi Settings')} sx={{ color: '#ffffff' }}>
                    <WifiIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton onClick={() => alert('Volume Settings')} sx={{ color: '#ffffff' }}>
                    <VolumeUpIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton onClick={() => alert('Battery Status')} sx={{ color: '#ffffff' }}>
                    <BatteryFullIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton onClick={() => alert('Notifications')} sx={{ color: '#ffffff' }}>
                    <NotificationsIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton onClick={() => alert('System Settings')} sx={{ color: '#ffffff' }}>
                    <SettingsIcon sx={{ fontSize: 20 }} />
                </IconButton>

                {/* Resource Usage with Labels */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="caption" sx={{ color: '#4caf50' }}>CPU</Typography>
                        <Box sx={{ width: 60, height: 30 }}>
                            <Line data={cpuData} options={chartOptions} />
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="caption" sx={{ color: '#f44336' }}>RAM</Typography>
                        <Box sx={{ width: 60, height: 30 }}>
                            <Line data={ramData} options={chartOptions} />
                        </Box>
                    </Box>
                </Box>

                {/* Time Display */}
                <Typography variant="body2" sx={{ ml: 1, maxWidth: 80, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Typography>
            </Box>

            {/* Modals for Notepad, Terminal, and Documents */}
            {notepadOpen && <Notepad onClose={() => setNotepadOpen(false)} />}
            {terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}
            {documentsOpen && <Documents onClose={() => setDocumentsOpen(false)} />}

            {/* Kali Launcher Menu */}
            {launcherOpen && <KaliLauncher onClose={() => setLauncherOpen(false)} />}
        </Box>
    );
};

export default DesktopTopBar;
