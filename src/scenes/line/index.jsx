import React from 'react';
import { Box, useTheme } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';

const LineChartPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      name: 'Jan',
      'Revenue': 4000,
      'Profit': 2400,
    },
    {
      name: 'Feb',
      'Revenue': 3000,
      'Profit': 1398,
    },
    {
      name: 'Mar',
      'Revenue': 2000,
      'Profit': 9800,
    },
    {
      name: 'Apr',
      'Revenue': 2780,
      'Profit': 3908,
    },
    {
      name: 'May',
      'Revenue': 1890,
      'Profit': 4800,
    },
    {
      name: 'Jun',
      'Revenue': 2390,
      'Profit': 3800,
    },
    {
      name: 'Jul',
      'Revenue': 3490,
      'Profit': 4300,
    },
  ];

  return (
    <Box m="20px">
      <Header title="LINE CHART" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <Line
              type="monotone"
              dataKey="Revenue"
              stroke={colors.greenAccent[500]}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Profit"
              stroke={colors.redAccent[500]}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default LineChartPage; 