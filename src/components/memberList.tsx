import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useNewContext, Member } from '@/context';
import { useRouter } from 'next/router';

interface MemberListProps {
  members: Member[];
  onRemove?: (member: string) => void;
}

const MemberList: React.FC<MemberListProps> = ({ members, onRemove }) => {
  const { removeMember, setSelectedElement } = useNewContext();
  const router = useRouter();

  const handleRemoveMember = (member: Member) => {
    removeMember(member.name);
    if (onRemove) {
      onRemove(member.name);
    }
  };

  const handleMemberClick = (member: Member) => {
    setSelectedElement(member);
    router.push(`/${encodeURIComponent(member.name)}`);
  };

  return (
    <div>
      <h2>Lista de Miembros de la Familia</h2>
      <List>
        {members.map((member) => (
          <ListItem 
            key={member.name}
            sx={{
              backgroundColor: '#f0f0f0',
              cursor: 'pointer'
            }} 
            onClick={() => handleMemberClick(member)}
          >
            <ListItemText primary={member.name} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="Eliminar"
                onClick={() => handleRemoveMember(member)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MemberList;