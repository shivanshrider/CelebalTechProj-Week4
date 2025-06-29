import React, { useState } from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { tokens } from '../../theme/theme';
import Header from '../../components/Header';

const Kanban = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [columns, setColumns] = useState({
    todo: {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { id: '1', content: 'Design new dashboard layout' },
        { id: '2', content: 'Implement user authentication' },
        { id: '3', content: 'Create API documentation' },
      ],
    },
    inProgress: {
      id: 'inProgress',
      title: 'In Progress',
      tasks: [
        { id: '4', content: 'Build responsive navigation' },
        { id: '5', content: 'Set up database schema' },
      ],
    },
    done: {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: '6', content: 'Project setup and configuration' },
        { id: '7', content: 'Install dependencies' },
      ],
    },
  });

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    if (sourceColumn === destColumn) {
      const newTasks = Array.from(sourceColumn.tasks);
      const [removed] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: newTasks,
        },
      });
    } else {
      const sourceTasks = Array.from(sourceColumn.tasks);
      const destTasks = Array.from(destColumn.tasks);
      const [removed] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceTasks,
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: destTasks,
        },
      });
    }
  };

  return (
    <Box m="20px">
      <Header title="KANBAN BOARD" subtitle="Drag and drop task management" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Box display="flex" gap="20px" height="70vh">
          {Object.values(columns).map((column) => (
            <Box key={column.id} flex={1}>
              <Typography
                variant="h6"
                sx={{
                  color: colors.grey[100],
                  mb: 2,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                {column.title}
              </Typography>
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <Paper
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    sx={{
                      backgroundColor: colors.primary[400],
                      minHeight: '100%',
                      p: 2,
                      borderRadius: 2,
                    }}
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <Paper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            sx={{
                              backgroundColor: colors.primary[600],
                              color: colors.grey[100],
                              p: 2,
                              mb: 2,
                              borderRadius: 1,
                              cursor: 'grab',
                              '&:active': {
                                cursor: 'grabbing',
                              },
                            }}
                          >
                            {task.content}
                          </Paper>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Paper>
                )}
              </Droppable>
            </Box>
          ))}
        </Box>
      </DragDropContext>
    </Box>
  );
};

export default Kanban; 