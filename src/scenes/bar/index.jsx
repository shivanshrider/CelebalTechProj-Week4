import React from 'react';
import { Box, useTheme } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';

const BarChartPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      name: 'Jan',
      'Revenue': 4000,
      'Expenses': 2400,
    },
    {
      name: 'Feb',
      'Revenue': 3000,
      'Expenses': 1398,
    },
    {
      name: 'Mar',
      'Revenue': 2000,
      'Expenses': 9800,
    },
    {
      name: 'Apr',
      'Revenue': 2780,
      'Expenses': 3908,
    },
    {
      name: 'May',
      'Revenue': 1890,
      'Expenses': 4800,
    },
    {
      name: 'Jun',
      'Revenue': 2390,
      'Expenses': 3800,
    },
    {
      name: 'Jul',
      'Revenue': 3490,
      'Expenses': 4300,
    },
  ];

  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" fill={colors.greenAccent[500]} />
            <Bar dataKey="Expenses" fill={colors.redAccent[500]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default BarChartPage; 