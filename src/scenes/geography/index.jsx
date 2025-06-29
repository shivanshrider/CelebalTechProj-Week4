import React from 'react';
import { Box, useTheme } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    { country: 'USA', Sales: 4000, Revenue: 2400 },
    { country: 'Canada', Sales: 3000, Revenue: 1398 },
    { country: 'UK', Sales: 2000, Revenue: 9800 },
    { country: 'Germany', Sales: 2780, Revenue: 3908 },
    { country: 'France', Sales: 1890, Revenue: 4800 },
  ];

  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />
      <Box height="75vh">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sales" fill={colors.greenAccent[500]} />
            <Bar dataKey="Revenue" fill={colors.blueAccent[500]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Geography; 