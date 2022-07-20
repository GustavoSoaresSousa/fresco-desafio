import React, {ChangeEvent, FormEvent, useState} from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

type UserType = {
  name: string,
  email: string,
  password: string
}

const UserInitialsValues = {
  name: '',
  email: '',
  password: ''
}


export default function SignUp() {
  const [user, setUser] = useState<UserType>(UserInitialsValues);
  const navigate = useNavigate();

  function changeInput(e: ChangeEvent<HTMLInputElement>){
    const {value, name} = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  async function handleSubmit(e: FormEvent){
    e.preventDefault()
    const response = await api.post('/usuario/register/',{
      nome: user.name,
      email: user.email,
      senha: user.password
    });
    setUser(UserInitialsValues)
    navigate('/')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  autoFocus
                  name="name"
                  value={user.name}
                  onChange={changeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  name="email"
                  value={user.email}
                  onChange={changeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  name="password"
                  value={user.password}
                  onChange={changeInput}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}