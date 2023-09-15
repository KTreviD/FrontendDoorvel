import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNewContext } from '@/context';

interface TaskAssignmentProps {
  onTaskAssign?: (task: string) => void;
}

const TaskAssignment: React.FC<TaskAssignmentProps> = () => {
    const { addTask } = useNewContext();
    const [newTask, setNewTask] = useState('');
  
    const handleTaskAssign = () => {
      if (newTask.trim() !== '') {
        addTask(newTask);
        setNewTask('');
      }
    };
  
    return (
      <Box>
        <h3>Asignar Nueva Tarea</h3>
        <TextField
          label="Nombre de la tarea"
          variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleTaskAssign}
          style={{ marginTop: '8px' }}
        >
          Asignar
        </Button>
      </Box>
    );
  };
  
  export default TaskAssignment;