import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Member = {
  name: string;
  tasks: string[];
};

type ContextType = {
  selectedElement: any;
  setSelectedElement: (element: any) => void;
  members: Member[];
  addMember: (member: Member) => void;
  removeMember: (memberName: string) => void;
  addTask: (task: string) => void;
  onTaskRemove: (memberName: string, task: string) => void;
};

const LOCAL_STORAGE_KEY = 'familyMembers';

const newContext = createContext<ContextType | undefined>(undefined);

export const useNewContext = () => {
  const context = useContext(newContext);
  if (context === undefined) {
    throw new Error('useNewContext debe usarse dentro de un ContextProvider');
  }
  return context;
};

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedElement, setSelectedElement] = useState<any>(null);
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const storedMembers = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedMembers) {
      setMembers(JSON.parse(storedMembers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(members));
  }, [members]);

  const addMember = (member: Member) => {
    setMembers((prevMembers) => [...prevMembers, member]);
  };

  const removeMember = (memberName: string) => {
    setMembers((prevMembers) => prevMembers.filter((member) => member.name !== memberName));
  };

  const addTask = (task: string) => {
    if (!selectedElement) {
      throw new Error('No se ha seleccionado ningún miembro.');
    }

    const updatedMembers = [...members];
    const selectedMemberIndex = updatedMembers.findIndex((member) => member.name === selectedElement.name);

    if (selectedMemberIndex === -1) {
      throw new Error('No se ha encontrado el miembro seleccionado.');
    }

    updatedMembers[selectedMemberIndex].tasks.push(task);

    setMembers(updatedMembers);
  };

  const onTaskRemove = (memberName: string, task: string) => {
    const updatedMembers = [...members];
    const memberIndex = updatedMembers.findIndex((m) => m.name === memberName);

    if (memberIndex === -1) {
      return;
    }

    const updatedTasks = updatedMembers[memberIndex].tasks.filter(
      (t) => t !== task
    );

    updatedMembers[memberIndex].tasks = updatedTasks;
    setMembers(updatedMembers);
    localStorage.setItem('familyMembers', JSON.stringify(updatedMembers));
  };

  const value: ContextType = {
    selectedElement,
    setSelectedElement,
    members,
    addMember,
    removeMember,
    addTask,
    onTaskRemove,
  };

  return (
    <newContext.Provider value={value}>
      {children}
    </newContext.Provider>
  );
};