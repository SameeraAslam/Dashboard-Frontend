import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import CastIcon from '@mui/icons-material/Cast';
export const LayoutList = [
    {
      title: "Dashboard",
      icon: <HomeIcon fontSize="small" sx={{ width: "22px" }} />,
      path: "",
      
    },
    {
      title: "Projects",
      icon: <RocketLaunchIcon fontSize="small" sx={{ width: "22px" }} />,
      path: "project",
     
    },
  
    {
      title: "Monitoring",
      icon: <CastIcon fontSize="small" sx={{ width: "22px" }} />,
      path: "project",
      
    },
    {
      title: "Preferences",
      icon: <RoomPreferencesIcon fontSize="small" sx={{ width: "22px" }} />,
      path: "project",
     
    },
  ];