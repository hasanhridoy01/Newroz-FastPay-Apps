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

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

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
            sx={{ backgroundColor: "#ff0052" }}
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
        </List>
      </Toolbar>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
            "@media (min-width: 1280px)": {
              marginBottom: "500px",
            },
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
