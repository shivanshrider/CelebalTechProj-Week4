import React from 'react';
import { Box, useTheme } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';

const PieChartPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    { name: 'Electronics', value: 400, color: colors.greenAccent[500] },
    { name: 'Clothing', value: 300, color: colors.blueAccent[500] },
    { name: 'Books', value: 200, color: colors.redAccent[500] },
    { name: 'Home & Garden', value: 150, color: colors.grey[500] },
    { name: 'Sports', value: 100, color: colors.primary[500] },
  ];

  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default PieChartPage; 