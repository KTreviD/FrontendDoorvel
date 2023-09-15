import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Button, Grid } from '@mui/material';
import MemberDetails from '@/components/memberDetails';
import TaskAssignment from '@/components/taskAssignment';
import { Member, useNewContext } from '@/context';
import  { useRouter }  from 'next/router';

const MemberPage: React.FC = () => {
  const [member, setMember] = useState<Member | null>(null);
  const { asPath } = useRouter();
  const router = useRouter();
  const queryMemberName = asPath.replace(/^\//, "");
  const { selectedElement, setSelectedElement, members, onTaskRemove } = useNewContext();

  const memberName = selectedElement ? selectedElement.name : queryMemberName;
  const tasks = member ? member.tasks : [];

  useEffect(() => {
    const foundMember = members.find((m) => m.name === memberName);

    if (foundMember) {
      setMember(foundMember);
      setSelectedElement(foundMember);
    } else {
      setMember(null);
      setSelectedElement(null);
    }
  }, [queryMemberName, selectedElement, members, setSelectedElement]);

  const handleTaskAssign = (task: string) => {
    if (member) {
      const updatedMember = { ...member, tasks: [...member.tasks, task] };
      const updatedMembers = members.map((m) =>
        m.name === memberName ? updatedMember : m
      );
      localStorage.setItem('familyMembers', JSON.stringify(updatedMembers));
      setSelectedElement(updatedMember);
    }
  };

  const handleTaskRemove = (task: string) => {
    if (member) {
      onTaskRemove(member.name, task);
      const updatedMember = { ...member, tasks: member.tasks.filter(t => t !== task) };
      setSelectedElement(updatedMember);
    }
  };

  const handleGoBack = () => {
    router.push(`/`);
  };
  
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container alignItems="center">
            <Grid item>
                <Typography variant="h4" gutterBottom>
                {member ? `Detalles de ${memberName}` : 'Miembro no encontrado'}
                </Typography>
            </Grid>
            <Grid item style={{ marginLeft: '16px' }}>
                <Button variant="contained" color="primary" onClick={handleGoBack}>
                Regresar a Agregar Miembros
                </Button>
            </Grid>
        </Grid>
        {member ? (
          <>
            <MemberDetails tasks={tasks} onTaskRemove={handleTaskRemove} />
            <TaskAssignment onTaskAssign={handleTaskAssign} />
          </>
        ) : (
          <>
            <Typography>No se encontró el miembro especificado.</Typography>
            <Button variant="contained" color="primary" onClick={handleGoBack}>
              Regresar a Agregar Miembros
            </Button>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default MemberPage;