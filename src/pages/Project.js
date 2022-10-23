import React, { useState } from 'react';
import { CreateProject } from '../redux/actions/project/ProjectActions';
import { useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Layout from '../components/Layout';





export default function Project() {


  const [PName, setPname] = useState("");
  const [Manager, setManager] = useState("");
  const [Status, setStatus] = useState("");
  const [Clients, setClients] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    const ProjectData = {
      PName,
      Manager,
      Status,
      Clients
    }
    dispatch(CreateProject(ProjectData));
    navigate("/dashboard");

  }



  return (
    <Layout>

      <Container maxWidth="md" sx={{ mt: 13 }} >
        <Stack direction="row" justifyContent={"center"} alignItems="center" >
          <Box>
            <Typography variant="h5" sx={{ color: "#8a1418", fontWeight: "bold" }}>Project Details</Typography>
            <Divider sx={{ my: 2, backgroundColor: "#8a1418" }} />


            <Box component="form" onSubmit={formHandler} sx={{
              display: "flex",
              flexDirection: "column", justifyContent: "space-between"
            }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ color: "#8a1418", fontWeight: "bold" }} >
                    Project Name
                  </Typography>

                  <TextField
                    value={PName}
                    onChange={e => setPname(e.target.value)}
                    fullWidth
                    placeholder="Project Name"
                    name="project-name"
                  />
                </Grid>

                <Grid item xs={12} >
                  <Typography variant="body1" sx={{ color: "#8a1418", fontWeight: "bold" }} >
                    Project Manager
                  </Typography>
                  <TextField
                    value={Manager}
                    onChange={e => setManager(e.target.value)}
                    fullWidth
                    name="project-number"
                    placeholder="Project Number" />
                </Grid>


                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ color: "#8a1418", fontWeight: "bold" }} >
                    Project Status
                  </Typography>
                  <TextField
                    fullWidth
                    value={Status}
                    onChange={e => setStatus(e.target.value)}
                    name="first-status"
                    placeholder="Project Status" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ color: "#8a1418", fontWeight: "bold" }} >
                    Project Clients
                  </Typography>
                  <TextField
                    value={Clients}
                    onChange={e => setClients(e.target.value)}
                    fullWidth
                    placeholder="Project-cients" />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ bgcolor: "#8a1418", mt: 3, mb: 2, "&:hover": { backgroundColor: "#8a14188f" } }}>Create Now</Button>
            </Box>
          </Box>
        </Stack>
      </Container>

    </Layout>

  )
}


