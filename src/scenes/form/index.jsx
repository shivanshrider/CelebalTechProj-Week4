import React, { useState } from 'react';
import { Box, TextField, Button, useTheme } from '@mui/material';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          maxWidth: 600,
          mt: 3,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: colors.grey[100],
              },
              '&:hover fieldset': {
                borderColor: colors.grey[100],
              },
            },
            '& .MuiInputLabel-root': {
              color: colors.grey[100],
            },
            '& .MuiInputBase-input': {
              color: colors.grey[100],
            },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: colors.grey[100],
              },
              '&:hover fieldset': {
                borderColor: colors.grey[100],
              },
            },
            '& .MuiInputLabel-root': {
              color: colors.grey[100],
            },
            '& .MuiInputBase-input': {
              color: colors.grey[100],
            },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: colors.grey[100],
              },
              '&:hover fieldset': {
                borderColor: colors.grey[100],
              },
            },
            '& .MuiInputLabel-root': {
              color: colors.grey[100],
            },
            '& .MuiInputBase-input': {
              color: colors.grey[100],
            },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          type="tel"
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: colors.grey[100],
              },
              '&:hover fieldset': {
                borderColor: colors.grey[100],
              },
            },
            '& .MuiInputLabel-root': {
              color: colors.grey[100],
            },
            '& .MuiInputBase-input': {
              color: colors.grey[100],
            },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          multiline
          rows={4}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: colors.grey[100],
              },
              '&:hover fieldset': {
                borderColor: colors.grey[100],
              },
            },
            '& .MuiInputLabel-root': {
              color: colors.grey[100],
            },
            '& .MuiInputBase-input': {
              color: colors.grey[100],
            },
          }}
        />
        <Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: colors.blueAccent[600],
              },
            }}
          >
            CREATE NEW USER
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form; 