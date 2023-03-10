import React,{useState} from 'react'
import './UserHome.css'
import {useNavigate} from 'react-router-dom'
import home from '../../Assests/home.png'
import task from '../../Assests/clipboard.png'
import chat from "../../Assests/chat.png";
import {Link,Outlet} from 'react-router-dom'
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem'
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import TaskIcon from "@mui/icons-material/Task";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from '@mui/icons-material/Home';
import TextsmsIcon from '@mui/icons-material/Textsms';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import duo from '../../Assests/google.png'
import Tooltip from '@mui/material/Tooltip'
import PrivateRouting from '../../PrivateRouting'

const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,


//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,

//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();


function UserHome() {


const [selectedIndex, setSelectedIndex] = useState(0);

const navigate = useNavigate()
const [open, setOpen] = React.useState(true);
const toggleDrawer = () => {
  setOpen(!open);
};

 const logout = () => {
   localStorage.removeItem("studentToken");
   navigate("/");
 };


  const handleListItemClick = (event, index) => {

    setSelectedIndex(index);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <AppBar
          position="absolute"
          open={open}
          sx={{
            boxShadow: "0",
            zIndex: 0,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Toolbar
            sx={{
              pr: "28px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            ></Typography>
            <IconButton
              color="inherit"
              sx={{ backgroundColor: "red" }}
            ></IconButton>
          </Toolbar>
        </AppBar> */}
        <Drawer variant="permanent" open={!open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Toolbar>

          <List component="nav">
            <div className="font-sans hover:font-serif">
              <Link to="" style={{ color: "#000000" }}>
                <ListItemButton
                  selected={selectedIndex === 0}
                  sx={{
                    '&.Mui-selected':{backgroundColor:"#B2BEB5"}
                  }}
                  onClick={(e) => { handleListItemClick(e, 0) }}
                >
                   <Tooltip title="Home" placement="right">
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  </Tooltip>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </Link>

              <Link to="task" style={{ color: "#000000" }}>
                <ListItemButton
                  selected={selectedIndex === 1}
                  sx={{
                    '&.Mui-selected': { backgroundColor: "#B2BEB5" }
                  }}
                  onClick={(e) => { handleListItemClick(e, 1) }}
                >
                   <Tooltip title="Task" placement="right">
                  <ListItemIcon>
                      <TaskIcon/>
                  </ListItemIcon>
                  </Tooltip>
                  <ListItemText primary="Task" />
                </ListItemButton>
              </Link>

              <Link to="room" style={{ color: "#000000" }}>
                <ListItemButton
                  selected={selectedIndex === 2}
                  sx={{
                    '&.Mui-selected': { backgroundColor: "#B2BEB5" }
                  }}
                  onClick={(e) => { handleListItemClick(e, 2) }}
                >
                   <Tooltip title="Chat" placement="right">
                  <ListItemIcon>
                      <TextsmsIcon/>
                  </ListItemIcon>
                  </Tooltip>
                  <ListItemText primary="Chat" />
                </ListItemButton>
              </Link>
              <Link to="add_conference" style={{ color: "#000000",fontWeight:400 }}>
                <ListItemButton
                  selected={selectedIndex === 3}
                  sx={{
                    '&.Mui-selected': { backgroundColor: "#B2BEB5" }
                  }}
                  onClick={(e) => { handleListItemClick(e, 3) }}
                >
                   <Tooltip title="Video Call" placement="right">
                  <ListItemIcon>
                      < VideoCallIcon/>
                  </ListItemIcon>
                  </Tooltip>
                  <ListItemText primary="Video Call" />
                </ListItemButton>
              </Link>

              <ListItemButton onClick={logout} style={{ color: "#000000" }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </div>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}
          >
            <PrivateRouting/>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserHome