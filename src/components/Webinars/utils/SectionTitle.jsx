import React from 'react';
import { Typography, Box } from '@mui/material';

export default function SectionTitle({ title, subtitle }) {
  return (
    <Box textAlign="center" mb={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {subtitle}
      </Typography>
    </Box>
  );
}
