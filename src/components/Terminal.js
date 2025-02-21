// src/components/Terminal.js
import React, { useState } from 'react';
import { Box, TextField, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Terminal = ({ onClose }) => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState(["Milton-virtual-machine:~ milton$"]);

    const handleInput = (e) => {
        if (e.key === "Enter") {
            setOutput([...output, `> ${input}`, `Executed: ${input}`]);
            setInput("");
        }
    };

    return (
        <Box
            sx={{
                width: '700px', // Increased width for a rectangular shape
                height: '400px', // Adjusted height for a rectangular appearance
                bgcolor: '#1c1c1c',
                color: '#00ff00',
                padding: '16px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                top: '50px',
                left: '50%',
                transform: 'translate(-50%, 0)',
                zIndex: 2000,
                boxShadow: 5,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ color: '#00ff00' }}>Terminal</Typography>
                <IconButton onClick={onClose} sx={{ color: '#ffffff' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    bgcolor: '#000000',
                    padding: '8px',
                    borderRadius: '4px',
                    marginTop: '16px',
                }}
            >
                {output.map((line, index) => (
                    <Typography key={index} sx={{ fontFamily: 'monospace' }}>{line}</Typography>
                ))}
            </Box>
            <TextField
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleInput}
                placeholder="Type a command..."
                variant="standard"
                InputProps={{
                    style: { color: '#00ff00' },
                    disableUnderline: true,
                }}
                sx={{
                    mt: 1,
                    bgcolor: '#1c1c1c',
                    color: '#00ff00',
                    fontFamily: 'monospace',
                }}
            />
        </Box>
    );
};

export default Terminal;
