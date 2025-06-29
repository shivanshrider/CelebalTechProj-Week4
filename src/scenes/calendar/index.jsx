import React from 'react';
import { Box, useTheme } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const events = [
    {
      id: '1',
      title: 'Meeting with Client',
      start: '2024-01-15T10:00:00',
      end: '2024-01-15T11:00:00',
      color: colors.greenAccent[500],
    },
    {
      id: '2',
      title: 'Team Standup',
      start: '2024-01-16T09:00:00',
      end: '2024-01-16T09:30:00',
      color: colors.blueAccent[500],
    },
    {
      id: '3',
      title: 'Project Review',
      start: '2024-01-17T14:00:00',
      end: '2024-01-17T15:30:00',
      color: colors.redAccent[500],
    },
  ];

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      <Box height="75vh">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={events}
          height="100%"
          eventColor={colors.primary[500]}
        />
      </Box>
    </Box>
  );
};

export default Calendar; 