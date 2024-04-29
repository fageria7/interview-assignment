import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuthenticatedUser } from '../store/features/authenticatedUserSlice';

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    dispatch(clearAuthenticatedUser());
    router.push('/login');
  };

  const handleRegister = () => {
    dispatch(clearAuthenticatedUser());
    router.push('/register');
  };

  const handleLogout = () => {
    dispatch(clearAuthenticatedUser());
    router.push('/login');
  };

  const authenticatedUser = useSelector((state) => state.authenticatedUser.data);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SocioSquares
        </Typography>
        {!authenticatedUser && (
          <>
            <Button color="inherit" onClick={handleLogin}>Login</Button>
            <Button color="inherit" onClick={handleRegister}>Register</Button>
          </>
        )}
        {authenticatedUser && (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
