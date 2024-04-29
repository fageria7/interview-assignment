import { Grid } from "@mui/material";

export default function AuthLayout({ children }) {
  return (
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        {children}
      </Grid>
  );
}