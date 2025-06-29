import React from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isLight = theme.palette.mode === 'light';

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'cost', headerName: 'Cost', flex: 1, renderCell: (params) => `$${params.value}` },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];

  const mockDataInvoices = [
    {
      id: 1,
      name: 'Jon Snow',
      email: 'jonsnow@gmail.com',
      cost: '21.24',
      phone: '(665)121-5454',
      date: '03/12/2023',
    },
    {
      id: 2,
      name: 'Cersei Lannister',
      email: 'cerseilannister@gmail.com',
      cost: '11.24',
      phone: '(421)314-2288',
      date: '06/15/2023',
    },
    {
      id: 3,
      name: 'Jaime Lannister',
      email: 'jaimelannister@gmail.com',
      cost: '21.24',
      phone: '(422)982-6739',
      date: '02/15/2023',
    },
    {
      id: 4,
      name: 'Anya Stark',
      email: 'anyastark@gmail.com',
      cost: '18.24',
      phone: '(921)425-6742',
      date: '03/21/2023',
    },
    {
      id: 5,
      name: 'Daenerys Targaryen',
      email: 'daenerystargaryen@gmail.com',
      cost: '17.24',
      phone: '(421)445-1189',
      date: '01/15/2023',
    },
    {
      id: 6,
      name: 'Ever Melisandre',
      email: 'evermelisandre@gmail.com',
      cost: '19.24',
      phone: '(232)545-6483',
      date: '11/02/2023',
    },
  ];

  return (
    <Box m="20px" sx={{ color: isLight ? theme.palette.text.primary : undefined }}>
      <Header title="INVOICES" subtitle="Managing the team invoices" textColor={isLight ? theme.palette.text.primary : undefined} />
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
        <DataGrid rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices; 