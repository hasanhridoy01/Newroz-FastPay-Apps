import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import Home from "../DashboardComponents/Home/Home";
import Menu from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PeopleIcon from '@mui/icons-material/People';
import QuizIcon from '@mui/icons-material/Quiz';
import VideocamIcon from '@mui/icons-material/Videocam';


const drawerWidth = 260;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  //set listItem content on toolBar....................!
  const handleListItemClick = (index) => {
    setSelectedItem(index);
  };

  const toolbarContent = selectedItem !== null && (
    <Toolbar>
      {selectedItem === 0 ? (
        <Home />
      ) : selectedItem === 1 ? (
        <div>Content of Item 2</div>
      ) : null}
    </Toolbar>
  );

  const drawer = (
    <div>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, color: "#000", display: { lg: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">
          <span style={{ color: "#ff0052" }}>Fast</span>Pay
        </Typography>
      </Toolbar>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "0px",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ backgroundColor: "#ff0052", }}
          >
            <Typography sx={{ textTransform: "none" }}>Create New</Typography>
          </Button>
        </div>
      </div>
      <Toolbar sx={{ marginTop: "12px" }}>
        <List>
          <ListItem onClick={() => handleListItemClick(0)}>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "33px" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>Home</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* set Dropdown */}
          <ListItem sx={{ marginTop: '0px' }}>
            <ListItemButton>
              <div>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="outlined"
                  sx={{
                    display: "flex", // Ensures the icon and text are aligned properly
                    alignItems: "center", // Vertically aligns the icon and text
                    border: "none",
                    "&:hover": {
                      border: "none",
                    },
                    "&:active": {
                      border: "none",
                    },
                    color: "#000",
                    padding: "0px",
                    paddingLeft: "6px",
                  }}
                  disableElevation
                  onClick={handleClick}
                  startIcon={<InstallDesktopIcon />}
                  endIcon={<ChevronRightIcon />}
                >
                  <ListItemText>
                    <Typography sx={{ textTransform: "none" }}>Promotions</Typography>
                  </ListItemText>
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <FileCopyIcon />
                    Duplicate
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <ArchiveIcon />
                    Archive
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <MoreHorizIcon />
                    More
                  </MenuItem>
                </StyledMenu>
              </div>
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ marginTop: '0px' }}>
            <ListItemButton>
              <div>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="outlined"
                  sx={{
                    display: "flex", // Ensures the icon and text are aligned properly
                    alignItems: "left", // Vertically aligns the icon and text
                    border: "none",
                    "&:hover": {
                      border: "none",
                    },
                    "&:active": {
                      border: "none",
                    },
                    color: "#000",
                    padding: "0px",
                    paddingLeft: "6px",
                  }}
                  disableElevation
                  onClick={handleClick}
                  startIcon={<NotificationsNoneIcon />}
                  endIcon={<ChevronRightIcon />}
                >
                  <ListItemText>
                    <Typography sx={{ textTransform: "none" }}>PushNotifications</Typography>
                  </ListItemText>
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <FileCopyIcon />
                    Duplicate
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <ArchiveIcon />
                    Archive
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <MoreHorizIcon />
                    More
                  </MenuItem>
                </StyledMenu>
              </div>
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ marginTop: '0px' }}>
            <ListItemButton>
              <div>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="outlined"
                  sx={{
                    display: "flex", // Ensures the icon and text are aligned properly
                    alignItems: "left", // Vertically aligns the icon and text
                    border: "none",
                    "&:hover": {
                      border: "none",
                    },
                    "&:active": {
                      border: "none",
                    },
                    color: "#000",
                    padding: "0px",
                    paddingLeft: "6px",
                  }}
                  disableElevation
                  onClick={handleClick}
                  startIcon={<ManageAccountsIcon />}
                  endIcon={<ChevronRightIcon />}
                >
                  <ListItemText>
                    <Typography sx={{ textTransform: "none" }}>Manage Role</Typography>
                  </ListItemText>
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <FileCopyIcon />
                    Duplicate
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <ArchiveIcon />
                    Archive
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <MoreHorizIcon />
                    More
                  </MenuItem>
                </StyledMenu>
              </div>
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ marginTop: '0px' }}>
            <ListItemButton>
              <div>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="outlined"
                  sx={{
                    display: "flex", // Ensures the icon and text are aligned properly
                    alignItems: "left", // Vertically aligns the icon and text
                    border: "none",
                    "&:hover": {
                      border: "none",
                    },
                    "&:active": {
                      border: "none",
                    },
                    color: "#000",
                    padding: "0px",
                    paddingLeft: "6px",
                  }}
                  disableElevation
                  onClick={handleClick}
                  startIcon={<LockOpenIcon />}
                  endIcon={<ChevronRightIcon />}
                >
                  <ListItemText>
                    <Typography sx={{ textTransform: "none" }}>Manager Access</Typography>
                  </ListItemText>
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <FileCopyIcon />
                    Duplicate
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <ArchiveIcon />
                    Archive
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <MoreHorizIcon />
                    More
                  </MenuItem>
                </StyledMenu>
              </div>
            </ListItemButton>
          </ListItem>
          
          {/* normal Menu */}
          <ListItem onClick={() => handleListItemClick(0)}>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "33px" }}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>User Group</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          
          <ListItem onClick={() => handleListItemClick(0)}>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "33px" }}>
                <QuizIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>Manager FQA</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem onClick={() => handleListItemClick(0)}>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "33px" }}>
                <VideocamIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>How to Videos</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>

        </List>
      </Toolbar>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#ffffff",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "#000", display: { lg: "none", sm: "block" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              display: { lg: "none", sm: "block" },
              margin: "auto",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#ff0052" }}>Fast</span>
            <span style={{ color: "#000" }}>Pay</span>
          </Typography>
          <Avatar
            sx={{ marginLeft: "auto" }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: '30px',
            backgroundColor: '#EEEEF3'
          }}
        >
          {toolbarContent}
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
