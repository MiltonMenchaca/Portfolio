// src/components/SystemInfoWidget.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const SystemInfoWidget = () => {
    const systemInfo = {
        processor: 'Intel Core i7',
        osVersion: 'Kali Linux 2023.2', // updated version for accuracy
    };

    return (
        <Box sx={{ padding: 2, backgroundColor: 'rgba(51, 51, 51, 0.7)', color: 'white', borderRadius: '8px', width: 220 }}>
            <Typography variant="h6">System Information</Typography>
            <Typography variant="body2">Processor: {systemInfo.processor}</Typography>
            <Typography variant="body2">OS Version: {systemInfo.osVersion}</Typography>
        </Box>
    );
};

export default SystemInfoWidget;
