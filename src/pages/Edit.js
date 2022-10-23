import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Layout from '../components/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import { FetchProject, UpdateProject } from '../redux/actions/project/ProjectActions';


const Edit = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(FetchProject());
    }, [dispatch, id]);

    const projectDetails = useSelector(state => state.ProjectReducer);


    
    const [PName, setPname] = useState();
    const [Manager, setManager] = useState();
    const [Status, setStatus] = useState();
    const [Clients, setClients] = useState();
    
    useEffect(() => {
        let updateObj = projectDetails?.projects ? projectDetails?.projects?.find((a) => { return a._id === id }) : {}
        if (updateObj?.PName && updateObj?.Manager && updateObj?.Status && updateObj.Clients) {
            setPname(updateObj.PName)
            setManager(updateObj.Manager);
            setStatus(updateObj.Status);
            setClients(updateObj.Clients)
        }
    }, [projectDetails, id])



    const formHandler = e => {
        e.preventDefault();
        const UpdatedData = {
            PName,
            Manager,
            Status,
            Clients
        };


        dispatch(UpdateProject(id, UpdatedData));
        dispatch(FetchProject());
        navigate("/dashboard")
    };


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
                                sx={{ bgcolor: "#8a1418", mt: 3, mb: 2, "&:hover": { backgroundColor: "#8a14188f" } }}>
                                Update Now</Button>
                        </Box>

                    </Box>
                </Stack>
            </Container>
        </Layout>

    )
}


export default Edit;