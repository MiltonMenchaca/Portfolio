// src/components/CalendarWidget.js
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarWidget = () => {
    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <Box 
            sx={{ 
                padding: 2, 
                backgroundColor: 'rgba(51, 51, 51, 0.7)', 
                color: 'white', 
                borderRadius: '8px', 
                width: showCalendar ? 220 : 220,  
                position: 'relative', 
                zIndex: showCalendar ? 1300 : 1 
            }}
        >
            <Button variant="text" onClick={() => setShowCalendar(!showCalendar)} sx={{ color: 'white' }}>
                {showCalendar ? 'Close' : 'Open Calendar'}
            </Button>
            {showCalendar ? (
                <Box sx={{ mt: 2 }}>
                    <Calendar />
                </Box>
            ) : (
                <Typography variant="body2">{new Date().toLocaleDateString()}</Typography>
            )}
        </Box>
    );
};

export default CalendarWidget;
