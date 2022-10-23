import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { LayoutList } from "../../Lists/LayoutList";
import Header from "../Header";


const drawerWidth = 240;



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));




export default function Layout({ children }) {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <Drawer
        sx={{

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: " #1c252d",
            padding: "30px 10px 10px 10px",
            color: "rgb(143, 140, 140)",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List sx={{ maxWidth: 200, height: "60%" }} aria-label="dashboard-list">
          {LayoutList.map((item, index) => {
            return (
            
                 <Link key={index} href={`/${item.path}`} sx={{ textDecoration: "none" }}> 
                  <ListItem key={`list-${index}`}>
                    <ListItemIcon sx={{ color: "gray" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{ color: "gray" }} />
                  </ListItem>
                </Link> 

              
            )
          })
          }

        </List>
        <Divider />
        <List>
          {["Settings"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "gray" }}>
                  <InboxIcon fontSize="small" sx={{ width: "22px" }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>


          ))}
        </List>
      </Drawer>
      {children}
    </Box>
  );
}