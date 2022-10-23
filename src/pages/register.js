import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../redux/actions/users/UserActions';
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Error from '../components/Error';
import Copyright from "../components/Copyright";
import { SignUp } from '../components/Schema';
import { useFormik } from "formik";
import { customTheme } from '../components/Theme';
import { ThemeProvider } from '@mui/material';




const Register = () => {
 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector(state => state.userLogin);
  const { users, loading, error } = userLogin;



const initialValues = {
  name:"",
  email: "",
  password: "",
};
const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: initialValues,
    validationSchema: SignUp,
    onSubmit: async (values) => {
      dispatch(registerUserAction(values));

    },
  });


   useEffect(() => {
    if (users) {
      navigate("/dashboard")}
}, [users,navigate]);

  return (
    <ThemeProvider theme={customTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#8a1418" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {loading && <Typography>Loading</Typography>}
        {error && <Error>{error}</Error>}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>

              <TextField
               value={values.name}
               onBlur={handleBlur}
               onChange={handleChange}
                autoComplete="off"
                name="name"
                fullWidth
                id="name"
                label="First Name"/>
              {errors.name && touched.name ? (<Typography  variant="body2">{errors.name}
            </Typography> ):null}
              </Grid>
                


            <Grid item xs={12}>
              <TextField
                fullWidth
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete="off"
                id="email"
                label="Email Address"
                name="email"/>
            {errors.email && touched.email ? (<Typography  variant="body2">{errors.email}
            </Typography> ):null}
            </Grid>
            
          
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"/>
            {errors.password && touched.password ? (<Typography  variant="body2">{errors.password}
            </Typography> ):null}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember Me"
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
              <Link href="/login" variant="body2">
                Already have an account?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 3 }} />

    </Container>
    </ThemeProvider>
  );
};
export default Register;
