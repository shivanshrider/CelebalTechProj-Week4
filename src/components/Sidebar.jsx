import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, Box, Divider, useTheme } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';

const drawerWidth = 240;

const navGroups = [
  {
    header: 'Dashboard',
    items: [
      { text: 'Ecommerce', icon: <HomeOutlinedIcon />, path: '/' },
    ],
  },
  {
    header: 'Pages',
    items: [
      { text: 'Orders', icon: <ReceiptOutlinedIcon />, path: '/invoices' },
      { text: 'Employees', icon: <PeopleOutlinedIcon />, path: '/team' },
      { text: 'Customers', icon: <ContactsOutlinedIcon />, path: '/contacts' },
    ],
  },
  {
    header: 'Apps',
    items: [
      { text: 'Calendar', icon: <CalendarTodayOutlinedIcon />, path: '/calendar' },
      { text: 'Kanban', icon: <ViewKanbanOutlinedIcon />, path: '/kanban' },
      // Placeholders for Editor, Color Picker (not implemented yet)
      // { text: 'Editor', icon: <EditIcon />, path: '/editor' },
      // { text: 'Color Picker', icon: <ColorLensIcon />, path: '/color-picker' },
    ],
  },
  {
    header: 'Charts',
    items: [
      { text: 'Line', icon: <TimelineOutlinedIcon />, path: '/line' },
      { text: 'Area', icon: <BarChartOutlinedIcon />, path: '/bar' },
      { text: 'Bar', icon: <BarChartOutlinedIcon />, path: '/bar' },
      { text: 'Pie', icon: <PieChartOutlineOutlinedIcon />, path: '/pie' },
      { text: 'Geography', icon: <MapOutlinedIcon />, path: '/geography' },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: isLight ? theme.palette.grey[100] : theme.palette.background.default,
          borderRight: isLight ? `1px solid ${theme.palette.grey[200]}` : undefined,
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        {/* Logo placeholder (replace src with your logo if available) */}
        <Box
          sx={{
            width: 36,
            height: 36,
            bgcolor: theme.palette.primary.main,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 22,
            boxShadow: 1,
          }}
        >
          {/* Replace with <img src="/logo.png" alt="Logo" style={{width: 28, height: 28}} /> for a real logo */}
          <span style={{fontFamily: 'monospace'}}>YB</span>
        </Box>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: isLight ? theme.palette.text.primary : 'inherit', letterSpacing: 1 }}>
          Admin Dashboard
        </Typography>
      </Box>
      <Divider />
      <List>
        {navGroups.map((group, idx) => (
          <Box key={group.header}>
            <Typography
              variant="overline"
              sx={{
                pl: 2,
                pt: idx === 0 ? 1 : 2,
                pb: 1,
                color: isLight ? theme.palette.text.primary : 'text.secondary',
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              {group.header}
            </Typography>
            {group.items.map((item) => {
              const selected = location.pathname === item.path;
              return (
                <ListItemButton
                  component={Link}
                  to={item.path}
                  key={item.text}
                  selected={selected}
                  sx={{
                    '&.Mui-selected': {
                      bgcolor: isLight ? theme.palette.primary[200] : theme.palette.primary.light,
                      color: isLight ? theme.palette.text.primary : theme.palette.primary.main,
                    },
                    '&:hover': {
                      bgcolor: isLight ? theme.palette.primary[100] : theme.palette.primary[700],
                    },
                    mb: 0.5,
                    borderRadius: 1,
                  }}
                >
                  <ListItemIcon sx={{ color: isLight ? theme.palette.text.primary : (selected ? theme.palette.primary.main : 'inherit') }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ style: { color: isLight ? theme.palette.text.primary : undefined } }} />
                </ListItemButton>
              );
            })}
            <Divider sx={{ my: 1 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar; 