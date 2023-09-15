import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface MemberDetailsProps {
  tasks: string[];
  onTaskRemove: (task: string) => void;
}

const MemberDetails: React.FC<MemberDetailsProps> = ({ tasks, onTaskRemove }) => {
  const handleTaskRemove = (task: string) => {
    onTaskRemove(task);
  };

  return (
    <div>
      <Typography variant="h5">Tareas asignadas:</Typography>
      <List>
        {tasks.map((task, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText primary={task} />
              <IconButton
                edge="end"
                aria-label="Eliminar"
                onClick={() => handleTaskRemove(task)}
              >
                <Delete />
              </IconButton>
            </ListItem>
            {index < tasks.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
};

export default MemberDetails;