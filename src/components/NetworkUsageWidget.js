// src/components/NetworkUsageWidget.js
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const NetworkUsageWidget = () => {
    const [networkUsage, setNetworkUsage] = useState({ sent: 0, received: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setNetworkUsage({
                sent: Math.random() * 100,
                received: Math.random() * 100,
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ padding: 2, backgroundColor: 'rgba(51, 51, 51, 0.7)', color: 'white', borderRadius: '8px', width: 220 }}>
            <Typography variant="h6">Network Usage</Typography>
            <Typography variant="body2">Sent: {networkUsage.sent.toFixed(2)} MB</Typography>
            <Typography variant="body2">Received: {networkUsage.received.toFixed(2)} MB</Typography>
        </Box>
    );
};

export default NetworkUsageWidget;
