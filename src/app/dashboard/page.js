"use client"

import { Grid, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useGetUsersQuery } from '../store/api/apiSlice';

export default function Dashboard() {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const router = useRouter();
  
  const authenticatedUser = useSelector((state) => state.authenticatedUser.data);
  if (!authenticatedUser) {
    router.push('/register');
    return <div>Redirecting...</div>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Grid container spacing={2}>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
