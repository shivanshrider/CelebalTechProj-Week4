import React from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isLight = theme.palette.mode === 'light';

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'zipCode', headerName: 'Zip Code', flex: 1 },
  ];

  const mockDataContacts = [
    {
      id: 1,
      name: 'Jon Snow',
      email: 'jonsnow@gmail.com',
      phone: '(665)121-5454',
      address: '0912 Won Street, Alabama, SY 10001',
      city: 'New York',
      zipCode: '10001',
    },
    {
      id: 2,
      name: 'Cersei Lannister',
      email: 'cerseilannister@gmail.com',
      phone: '(421)314-2288',
      address: '1234 Main Street, New York, NY 10001',
      city: 'New York',
      zipCode: '10001',
    },
    {
      id: 3,
      name: 'Jaime Lannister',
      email: 'jaimelannister@gmail.com',
      phone: '(422)982-6739',
      address: '3333 Want Blvd, Estanza, NAY 42125',
      city: 'Los Angeles',
      zipCode: '90210',
    },
    {
      id: 4,
      name: 'Anya Stark',
      email: 'anyastark@gmail.com',
      phone: '(921)425-6742',
      address: '1514 Main Street, New York, NY 22212',
      city: 'New York',
      zipCode: '22212',
    },
    {
      id: 5,
      name: 'Daenerys Targaryen',
      email: 'daenerystargaryen@gmail.com',
      phone: '(421)445-1189',
      address: '11122 Welping Ave, Tenting, CD 21321',
      city: 'Chicago',
      zipCode: '60601',
    },
    {
      id: 6,
      name: 'Ever Melisandre',
      email: 'evermelisandre@gmail.com',
      phone: '(232)545-6483',
      address: '1234 Canvile Street, Esvazark, NY 10001',
      city: 'New York',
      zipCode: '10001',
    },
  ];

  return (
    <Box m="20px" sx={{ color: isLight ? theme.palette.text.primary : undefined }}>
      <Header title="CONTACTS" subtitle="Managing the team contacts" textColor={isLight ? theme.palette.text.primary : undefined} />
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
        <DataGrid rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Contacts; 