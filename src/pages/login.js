import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../redux/actions/users/UserActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error';
import Copyright from "../components/Copyright";
import { SignIn } from '../components/Schema';
import { useFormik } from "formik";
import { customTheme } from '../components/Theme';
import { ThemeProvider } from '@mui/material';

 



const LogIn=()=> {
  


  const dispatch = useDispatch();
  const navigate = useNavigate();

  


  const state = useSelector(state => {
    return state.userLogin;
  });
const { loading, users, error} = state;


const initialValues = {
  email: "",
  password: "",
};
const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: initialValues,
    validationSchema: SignIn,
    onSubmit: async (values) => {
      dispatch(loginUserAction(values));

    },
  });

  
  useEffect(() => {
     if (users) 
navigate("/dashboard")
   }, [users,navigate]);


  return (
    <ThemeProvider theme={customTheme}>
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
          <Avatar sx={{ m: 1, bgcolor:"#8a1418" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {loading && <Typography>Loading</Typography>}
          {error && <Error>{error}</Error>}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {errors.email && touched.email ? (<Typography  variant="body2">{errors.email}
            </Typography> ):null}
            </Grid>
            <Grid item xs={12}>
            <TextField
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password" 
              autoComplete="current-password"
            />
            {errors.password && touched.password ? (<Typography  variant="body2">{errors.password}
            </Typography> ):null}
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> 
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </ThemeProvider>
   
  );
}
export default LogIn;