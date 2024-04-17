import React from 'react';
import { useAuthContext } from 'context';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { RSCNavItem } from './RSCNavItem';
import { ListItemButton } from '@mui/material';

interface Props {
  categories: Category[];
}

export interface Category {
  name: string;
}

export const RSCSideNav: React.FC<Props> = ({ categories }) => {
  const { user, logout } = useAuthContext();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'fixed'
      }}
    >
      <List>
        <ListItem>Welcome, {user?.fullName ?? 'Guest'}</ListItem>
        <Divider component="li" />
        {categories.map((category, index) => (
          <RSCNavItem key={index} name={category.name} />
        ))}
        <ListItemButton style={{ outline: 'none' }}>
          Take Questionnaire Again
        </ListItemButton>
        <Divider component="li" />
        <ListItemButton style={{ outline: 'none' }} onClick={logout}>
          Logout
        </ListItemButton>
      </List>
    </Box>
  );
};
