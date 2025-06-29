import React, { useState } from 'react';
import { Box, Button, useTheme, Grid, Card, Typography, Avatar, Stack } from '@mui/material';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';
import { DownloadOutlined, MonetizationOn, People, ShoppingCart, Replay, Category, TrendingUp, TrendingDown } from '@mui/icons-material';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const statCards = [
  {
    title: 'Earnings',
    value: '₹63,448.78',
    icon: <MonetizationOn fontSize="large" />, 
    color: '#1976d2',
    button: true,
    percent: '+25%',
    percentColor: 'success.main',
    bg: '#e3f0ff',
  },
  {
    title: 'Customers',
    value: '39,354',
    icon: <People fontSize="large" />, 
    color: '#00bcd4',
    percent: '-4%',
    percentColor: 'error.main',
    bg: '#e0f7fa',
  },
  {
    title: 'Products',
    value: '4,396',
    icon: <Category fontSize="large" />, 
    color: '#ffc107',
    percent: '+23%',
    percentColor: 'success.main',
    bg: '#fff8e1',
  },
  {
    title: 'Sales',
    value: '423,39',
    icon: <ShoppingCart fontSize="large" />, 
    color: '#ff9800',
    percent: '+38%',
    percentColor: 'success.main',
    bg: '#fff3e0',
  },
  {
    title: 'Refunds',
    value: '39,354',
    icon: <Replay fontSize="large" />, 
    color: '#4caf50',
    percent: '-12%',
    percentColor: 'error.main',
    bg: '#e8f5e9',
  },
];

const revenueData = [
  { month: 'Jan', Budget: 120, Expense: 80 },
  { month: 'Feb', Budget: 150, Expense: 90 },
  { month: 'Mar', Budget: 140, Expense: 95 },
  { month: 'Apr', Budget: 170, Expense: 110 },
  { month: 'May', Budget: 160, Expense: 105 },
  { month: 'Jun', Budget: 180, Expense: 120 },
  { month: 'Jul', Budget: 200, Expense: 130 },
];

const earningsData = [
  { month: 'Jan', Earnings: 40 },
  { month: 'Feb', Earnings: 60 },
  { month: 'Mar', Earnings: 80 },
  { month: 'Apr', Earnings: 70 },
  { month: 'May', Earnings: 90 },
  { month: 'Jun', Earnings: 100 },
  { month: 'Jul', Earnings: 120 },
];

const pieData = [
  { name: 'Electronics', value: 400, color: '#4cceac' },
  { name: 'Clothing', value: 300, color: '#6870fa' },
  { name: 'Books', value: 200, color: '#db4f4a' },
  { name: 'Home & Garden', value: 150, color: '#b6bbf5' },
  { name: 'Sports', value: 100, color: '#f2bebe' },
];

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isLight = theme.palette.mode === 'light';
  const cardShadow = 2;
  const statCardMinHeight = 120;
  const mainCardMinHeight = 340;

  // Interactive widget state
  const [activities, setActivities] = useState([
    { id: 1, time: '2 min ago', action: 'Order #1234 placed', read: false },
    { id: 2, time: '10 min ago', action: 'User John updated profile', read: false },
    { id: 3, time: '1 hr ago', action: 'Refund issued', read: false },
    { id: 4, time: '2 hr ago', action: 'New product added', read: false },
    { id: 5, time: 'Yesterday', action: 'Monthly report generated', read: false },
  ]);
  const [todos, setTodos] = useState([
    { id: 1, task: 'Review sales report', done: false },
    { id: 2, task: 'Update product catalog', done: true },
    { id: 3, task: 'Respond to support tickets', done: false },
    { id: 4, task: 'Schedule team meeting', done: false },
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'info', msg: 'System update available' },
    { id: 2, type: 'success', msg: 'Backup completed' },
    { id: 3, type: 'warning', msg: 'Password expires soon' },
    { id: 4, type: 'error', msg: 'Payment failed' },
  ]);

  // Stat card color helpers
  const statCardBg = isLight ? theme.palette.background.paper : colors.primary[800];
  const statCardText = theme.palette.text.primary;
  const statCardAvatarBg = [
    colors.blueAccent[500],
    colors.greenAccent[500],
    colors.redAccent[400],
    colors.redAccent[500],
    colors.greenAccent[700],
  ];

  // Handlers
  const handleMarkActivityRead = (id) => {
    setActivities((prev) => prev.map((a) => a.id === id ? { ...a, read: true } : a));
  };
  const handleToggleTodo = (id) => {
    setTodos((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  };
  const handleDismissNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: theme.palette.background.default, color: theme.palette.text.primary, p: { xs: 1, sm: 2, md: 4 } }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" textColor={theme.palette.text.primary} />
        <Box />
      </Box>

      {/* Top Row: Stat Cards */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: 'repeat(5, 1fr)' }}
        gap={3}
        mb={3}
      >
        {statCards.map((card, idx) => (
          <Card
            key={card.title}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              bgcolor: statCardBg,
              color: statCardText,
              boxShadow: cardShadow,
              borderRadius: 3,
              minHeight: statCardMinHeight,
              height: '100%',
              width: '100%',
              border: 'none',
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2} mb={1}>
              <Avatar sx={{ bgcolor: statCardAvatarBg[idx % statCardAvatarBg.length], width: 44, height: 44, fontSize: 26 }}>{card.icon}</Avatar>
              <Box>
                <Typography variant="subtitle2" fontWeight={600} color={theme.palette.text.secondary} sx={{ opacity: 0.7 }}>{card.title}</Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: 22 }}>{card.value}</Typography>
              </Box>
            </Stack>
            <Box mt={2} display="flex" alignItems="center" width="100%" justifyContent="space-between">
              {card.button ? (
                <Button variant="contained" size="small" sx={{ background: colors.blueAccent[500], color: '#fff', textTransform: 'none', fontWeight: 'bold', borderRadius: 2, boxShadow: 1 }} startIcon={<DownloadOutlined />}>Download</Button>
              ) : (
                <Typography variant="subtitle2" color={card.percentColor} fontWeight="bold">{card.percent}</Typography>
              )}
            </Box>
          </Card>
        ))}
      </Box>

      {/* Second Row: Revenue Updates (left), Earnings (top right), Yearly Sales (bottom right) */}
      <Box sx={{ display: 'flex', gap: 3, width: '100%', minHeight: 360, mb: 3, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
        {/* Revenue Updates - left */}
        <Box sx={{ flex: 2, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <Card sx={{ p: 0, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, boxShadow: cardShadow, borderRadius: 3, height: 360, minHeight: 360, display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
            {/* Stats column */}
            <Box sx={{ flex: 1, height: '100%', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', bgcolor: isLight ? colors.blueAccent[100] : colors.primary[600], borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }}>
              <Typography variant="h6" fontWeight="bold" mb={2} color={theme.palette.text.primary}>Revenue Updates</Typography>
              <Box display="flex" alignItems="center" mb={2} gap={1}>
                <MonetizationOn color="success" />
                <Box>
                  <Typography variant="body2" color={theme.palette.text.secondary}>Budget</Typography>
                  <Typography variant="h5" fontWeight="bold" color={theme.palette.text.primary}>
                    ₹93,438 <Typography component="span" variant="caption" color="success.main" fontWeight="bold">+25%</Typography>
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mb={2} gap={1}>
                <TrendingDown color="error" />
                <Box>
                  <Typography variant="body2" color={theme.palette.text.secondary}>Expense</Typography>
                  <Typography variant="h5" fontWeight="bold" color={theme.palette.text.primary}>₹48,487</Typography>
                </Box>
              </Box>
              <Button variant="contained" size="small" sx={{ mt: 2, background: colors.blueAccent[500], color: '#fff', textTransform: 'none', fontWeight: 'bold', borderRadius: 2, boxShadow: 1 }} startIcon={<DownloadOutlined />}>Download Report</Button>
            </Box>
            {/* Divider */}
            <Box sx={{ width: 1, bgcolor: theme.palette.divider, my: 4, borderRadius: 1, height: '90%' }} />
            {/* Chart column */}
            <Box sx={{ flex: 2, p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 0 }}>
              <Box sx={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                    <XAxis dataKey="month" stroke={theme.palette.text.primary} fontSize={14} />
                    <YAxis stroke={theme.palette.text.primary} fontSize={14} />
                    <Tooltip contentStyle={{ background: theme.palette.background.paper, color: theme.palette.text.primary, border: `1px solid ${theme.palette.divider}` }} />
                    <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ color: theme.palette.text.primary }} />
                    <Bar dataKey="Expense" fill={colors.greenAccent[500]} radius={[4, 4, 0, 0]} name="Expense" />
                    <Bar dataKey="Budget" fill={colors.blueAccent[500]} radius={[4, 4, 0, 0]} name="Budget" />
                    <Line type="monotone" dataKey="Budget" stroke={colors.greenAccent[400]} strokeWidth={2} dot={false} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </Card>
        </Box>
        {/* Right column: Earnings (top), Yearly Sales (bottom) */}
        <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
          <Box sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
            <Card sx={{ p: 4, bgcolor: colors.blueAccent[500], color: theme.palette.getContrastText(colors.blueAccent[500]), boxShadow: cardShadow, borderRadius: 3, height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
              <Typography variant="h6" fontWeight="bold" mb={1}>Earnings</Typography>
              <Typography variant="h4" fontWeight="bold">₹63,448.78</Typography>
              <Typography variant="body2" mb={2}>Monthly revenue</Typography>
              <Box height={120} width="100%">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={earningsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                    <XAxis dataKey="month" stroke={theme.palette.getContrastText(colors.blueAccent[500])} fontSize={13} />
                    <YAxis stroke={theme.palette.getContrastText(colors.blueAccent[500])} fontSize={13} />
                    <Tooltip contentStyle={{ background: colors.blueAccent[500], color: theme.palette.getContrastText(colors.blueAccent[500]), border: `1px solid ${theme.palette.divider}` }} />
                    <Bar dataKey="Earnings" fill={theme.palette.getContrastText(colors.blueAccent[500])} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Card>
          </Box>
          <Box sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
            <Card sx={{ p: 4, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, boxShadow: cardShadow, borderRadius: 3, height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
              <Typography variant="h6" fontWeight="bold" mb={1}>Yearly Sales</Typography>
              <Typography variant="h5" fontWeight="bold">₹43,246</Typography>
              <Typography variant="body2" mb={2}>Yearly sales</Typography>
              <Box height={120} width="100%" display="flex" justifyContent="center" alignItems="center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={50}
                      fill={colors.blueAccent[500]}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors.greenAccent[100 + index * 200] || colors.greenAccent[500]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: theme.palette.background.paper, color: theme.palette.text.primary, border: `1px solid ${theme.palette.divider}` }} />
                    <Legend layout="horizontal" align="center" verticalAlign="bottom" iconType="circle" wrapperStyle={{ color: theme.palette.text.primary }} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>

      {/* Section title for widgets */}
      <Box mt={5} mb={2}>
        <Typography variant="h6" fontWeight="bold" color={theme.palette.text.secondary}>Quick Widgets</Typography>
      </Box>

      {/* Third Row: Widgets (Recent Activity, To-Do, Notifications) */}
      <Grid container spacing={3} alignItems="stretch">
        {/* Recent Activity */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, boxShadow: cardShadow, borderRadius: 3, minHeight: 220, height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 6 } }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>Recent Activity</Typography>
            <Box sx={{ flex: 1, overflowY: 'auto' }}>
              {activities.map((item) => (
                <Box key={item.id} mb={1.5} display="flex" alignItems="center" sx={{ opacity: item.read ? 0.5 : 1, transition: 'opacity 0.2s' }}>
                  <Box sx={{ width: 8, height: 8, bgcolor: colors.blueAccent[500], borderRadius: '50%', mr: 1 }} />
                  <Typography variant="body2" sx={{ flex: 1 }}>{item.action}</Typography>
                  <Typography variant="caption" color={theme.palette.text.secondary} sx={{ mr: 1 }}>{item.time}</Typography>
                  {!item.read && (
                    <Button size="small" onClick={() => handleMarkActivityRead(item.id)} sx={{ minWidth: 0, p: 0.5, color: colors.blueAccent[500] }} title="Mark as read">
                      <span role="img" aria-label="check">✔️</span>
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
        {/* To-Do List */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, boxShadow: cardShadow, borderRadius: 3, minHeight: 220, height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 6 } }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>To-Do</Typography>
            <Box component="ul" sx={{ pl: 2, flex: 1, m: 0 }}>
              {todos.map((item) => (
                <Box key={item.id} component="li" display="flex" alignItems="center" mb={1.2} sx={{ opacity: item.done ? 0.5 : 1, cursor: 'pointer', userSelect: 'none' }} onClick={() => handleToggleTodo(item.id)}>
                  <Box sx={{ width: 18, height: 18, border: `2px solid ${colors.blueAccent[500]}`, borderRadius: '4px', mr: 1, bgcolor: item.done ? colors.blueAccent[500] : 'transparent', display: 'inline-block', transition: 'background 0.2s' }} />
                  <Typography variant="body2" sx={{ textDecoration: item.done ? 'line-through' : 'none' }}>{item.task}</Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
        {/* Notifications */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, boxShadow: cardShadow, borderRadius: 3, minHeight: 220, height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 6 } }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>Notifications</Typography>
            <Box sx={{ flex: 1, overflowY: 'auto' }}>
              {notifications.map((item) => (
                <Box key={item.id} mb={1.5} display="flex" alignItems="center" sx={{ transition: 'opacity 0.2s' }}>
                  <Box sx={{ width: 8, height: 8, bgcolor: item.type === 'info' ? colors.blueAccent[500] : item.type === 'success' ? colors.greenAccent[500] : item.type === 'warning' ? colors.redAccent[400] : colors.redAccent[500], borderRadius: '50%', mr: 1 }} />
                  <Typography variant="body2" sx={{ flex: 1 }}>{item.msg}</Typography>
                  <Button size="small" onClick={() => handleDismissNotification(item.id)} sx={{ minWidth: 0, p: 0.5, color: colors.redAccent[500] }} title="Dismiss">
                    <span role="img" aria-label="close">✖️</span>
                  </Button>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 