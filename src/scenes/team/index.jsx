import React from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isLight = theme.palette.mode === 'light';

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left' },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'access', headerName: 'Access Level', flex: 1 },
  ];

  const mockDataTeam = [
    {
      id: 1,
      name: 'Jon Snow',
      email: 'jonsnow@gmail.com',
      age: 35,
      phone: '(665)121-5454',
      access: 'admin',
    },
    {
      id: 2,
      name: 'Cersei Lannister',
      email: 'cerseilannister@gmail.com',
      age: 42,
      phone: '(421)314-2288',
      access: 'manager',
    },
    {
      id: 3,
      name: 'Jaime Lannister',
      email: 'jaimelannister@gmail.com',
      age: 45,
      phone: '(422)982-6739',
      access: 'user',
    },
    {
      id: 4,
      name: 'Anya Stark',
      email: 'anyastark@gmail.com',
      age: 16,
      phone: '(921)425-6742',
      access: 'admin',
    },
    {
      id: 5,
      name: 'Daenerys Targaryen',
      email: 'daenerystargaryen@gmail.com',
      age: 31,
      phone: '(421)445-1189',
      access: 'user',
    },
    {
      id: 6,
      name: 'Ever Melisandre',
      email: 'evermelisandre@gmail.com',
      age: 150,
      phone: '(232)545-6483',
      access: 'manager',
    },
  ];

  return (
    <Box m="20px" sx={{ color: isLight ? theme.palette.text.primary : undefined }}>
      <Header title="TEAM" subtitle="Managing the team members" textColor={isLight ? theme.palette.text.primary : undefined} />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
            color: isLight ? theme.palette.text.primary : undefined,
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
            color: isLight ? theme.palette.text.primary : undefined,
          },
          '& .name-column--cell': {
            color: isLight ? theme.palette.text.primary : colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: isLight ? theme.palette.grey[200] : colors.blueAccent[700],
            borderBottom: 'none',
            color: isLight ? theme.palette.text.primary : undefined,
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: isLight ? theme.palette.background.default : colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: isLight ? theme.palette.grey[200] : colors.blueAccent[700],
            color: isLight ? theme.palette.text.primary : undefined,
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team; 