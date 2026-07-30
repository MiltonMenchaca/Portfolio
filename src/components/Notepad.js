// src/components/Notepad.js
import React, { useState } from 'react';
import { Box, TextField, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Notepad = ({ onClose }) => {
    const [text, setText] = useState("");

    return (
        <Box
            sx={{
                width: '400px', // Increase width for more space
                height: '500px', // Increase height
                bgcolor: '#2c2c2c',
                color: '#ffffff',
                padding: '16px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                top: '50px', // Offset from the top
                left: '50%',
                transform: 'translate(-50%, 0)',
                zIndex: 2000,
                boxShadow: 5,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Notepad</Typography>
                <IconButton onClick={onClose} sx={{ color: '#ffffff' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <TextField
                multiline
                rows={15}
                value={text}
                onChange={(e) => setText(e.target.value)}
                variant="outlined"
                sx={{
                    bgcolor: '#1c1c1c',
                    color: '#ffffff',
                    flex: 1,
                    marginTop: '16px',
                    padding: '8px',
                    borderRadius: '4px',
                    overflowY: 'auto',
                }}
                InputProps={{
                    style: { color: '#ffffff' },
                }}
            />
        </Box>
    );
};

export default Notepad;
