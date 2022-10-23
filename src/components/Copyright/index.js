import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { customTheme } from '../Theme';
import { ThemeProvider } from '@mui/material';

const Copyright= (props)=> {
    return (
      <ThemeProvider theme={customTheme}>
      <Typography
        variant="body2"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          My dashboard
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      </ThemeProvider>
    );
  }
  export default Copyright;