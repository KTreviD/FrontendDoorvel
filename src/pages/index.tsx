import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button } from '@mui/material';
import MemberList from '@/components/memberList';
import { Member, useNewContext } from '@/context';

const HomePage: React.FC = () => {
  const { members, addMember, removeMember } = useNewContext();
  const [newMember, setNewMember] = useState<string>('');

  const handleAddMember = () => {
    if (newMember.trim() !== '') {
      const member: Member = { name: newMember, tasks: [] };
      addMember(member);
      setNewMember('');
    }
  };

  const handleRemoveMember = (memberName: string) => {
    removeMember(memberName);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Lista de Miembros de la Familia
        </Typography>
        <TextField
          label="Nuevo Miembro"
          variant="outlined"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddMember}>
          Agregar Miembro
        </Button>
        <MemberList members={members} onRemove={handleRemoveMember} />
      </Paper>
    </Container>
  );
};

export default HomePage;