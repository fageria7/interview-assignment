"use client"

import { Button, TextField, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAddUserMutation } from '../../store/api/apiSlice';
import { setAuthenticatedUser } from '../../store/features/authenticatedUserSlice';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const [addUser] = useAddUserMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await addUser(data).unwrap();
      dispatch(setAuthenticatedUser(response));
      router.push('/dashboard');
    } catch (error) {
      console.error('Failed to register:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid item>
        <TextField label="Name" {...register('name')} required />
      </Grid>
      <Grid item sx={{mt: 1}}>
        <TextField label="Email" type="email" {...register('email')} required />
      </Grid>
      <Grid item sx={{mt: 1}}>
        <Button type="submit" variant="contained">Register</Button>
      </Grid>
    </form>
  );
}
