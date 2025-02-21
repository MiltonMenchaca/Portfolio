// src/components/SpotifyWidget.js 
import React from 'react';
import { Box } from '@mui/material';

const SpotifyWidget = () => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '220', 
                height: '80px',     
                backgroundColor: 'rgba(51, 51, 51, 0.7)',
                borderRadius: '8px',
                overflow: 'hidden',
            }}
        >
            <iframe
                title="Spotify Player"  
                style={{ borderRadius: '8px' }}
                src="https://open.spotify.com/embed/track/1SShxVVBeZBCY7WddnksPz?utm_source=generator"
                width="100%"
                height="80" 
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </Box>
    );
};

export default SpotifyWidget;
