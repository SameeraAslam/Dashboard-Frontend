import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { DeleteProject, FetchProject } from "../redux/actions/project/ProjectActions";
import Layout from '../components/Layout';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8f0917",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#e0e0e0",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#aba8a8",
  },
}));

const Dashboard = () => {

  const dispatch = useDispatch();
  const columns = [" SNo", "Name", "Manager", "Status", "Clients", "Edit", "Delete"]


  useEffect(() => {

    dispatch(FetchProject());

  }, [dispatch]);

  const DeleteProjectById = async (id) => {

    await dispatch(DeleteProject(id));
    await dispatch(FetchProject());

  }

  const  projects= useSelector(state => {
    return state.ProjectReducer.projects;
  });



  return (
    <Layout>
      <TableContainer component={Paper} sx={{ mt: 13, mx:3}}>
        <Table
          sx={{ minWidth: 100, "& td, & th": { border: "1px solid #fff" } }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              {columns?.length > 0 &&
                columns?.map((v, i) => {
                  return (
                    <StyledTableCell align="center" key={i}>{v}</StyledTableCell>
                  )

                })}




            </TableRow>
          </TableHead>
          <TableBody>
            {projects?.length>0 && projects?.map((item, index) => {
              return (
                <StyledTableRow key={item._id}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {item.PName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.Manager}</StyledTableCell>
                  <StyledTableCell align="center">{item.Status}</StyledTableCell>
                  <StyledTableCell align="center">{item.Clients}</StyledTableCell>

                  <StyledTableCell
                    align="center"
                    sx={{ backgroundColor: "lightblue" }}
                  >
                    <Link href={`/edit/${item._id}`}>
                      <DriveFileRenameOutlineIcon />

                    </Link>
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ backgroundColor: "lightgreen" }}
                  >

                    <IconButton sx={{ backgroundColor: "transparent", cursor: "pointer" }} onClick={() => DeleteProjectById(item._id)}>
                      <DeleteIcon /></IconButton>


                  </StyledTableCell>
                </StyledTableRow>)
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export default Dashboard;