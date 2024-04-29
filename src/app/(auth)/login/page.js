import { Button, Grid, TextField } from '@mui/material';

export default function Login() {
  return (
    <form>
      <Grid item>
        <TextField label="Email" type="email" required />
      </Grid>
      <Grid item sx={{mt: 1}}>
        <TextField label="Password" type="password" required />
      </Grid>
      <Grid item sx={{mt: 1}}>
        <Button variant="contained">Login</Button>
      </Grid>
    </form>
  );
}
