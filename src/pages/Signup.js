import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { InputAdornment} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const theme = createTheme();

export default function SignUp() {
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  // const [password, setPassword] = useState("");
  // const [isVisible,setIsVisible] = useState(false);
  // const {signUp} = useUserAuth();
  // const navigate = useNavigate();


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await signUp(email, password);
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [username, setUsername]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
 
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:3000/api/lb/user", {
          fname: fname,
          lname: lname,
          username:username,
          email: email,
          password: password,
          });
          alert("User Registation Successfully");
 
        } catch (err) {
          alert(err);
        }
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
          {/* {error && <Alert severity="error">{error}</Alert>} */}
          <Box component="form" onSubmit={save} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={fname}
                  id="fname"
                  label="First Name"
                  name="fname"
                  autoComplete="fname"
                  onChange={(event) => setFName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={lname}
                  id="lname"
                  label="Last Name"
                  name="fname"
                  autoComplete="lname"
                  onChange={(event) => setLName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={username}
                  id="usernmae"
                  label="Username"
                  name="username"
                  autoComplete="Username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Password"
                  type={showPassword?"text":"password"}
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                    )
                  }}
                />
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onSubmit={save}
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