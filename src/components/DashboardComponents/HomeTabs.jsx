import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card, CardContent, Container, Grid } from "@mui/material";
import FormTabs from "./FormTabs";

//button icon............................!
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SendIcon from "@mui/icons-material/Send";
import Form from "./Form";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography color="inherit">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomeTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ height: "950px", width: "1100px" }}>
      <Box sx={{ width: "96%" }}>
        <Box sx={{ borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              border: "none",
              padding: "5px",
              "& .MuiTabs-indicator": {
                display: "none",
              },
              justifyContent: "space-between",
            }}
          >
            <Tab
              label="Notification list"
              {...a11yProps(0)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#fff", // Set background color for active tab
                  color: "#000", // Set text color for active tab
                  borderRadius: "10px",
                  borderBottom: "none",
                },
                "&:focus": {
                  outline: "none", // Remove default focus outline
                },
                border: "none",
                textTransform: "none",
              }}
            />
            <Tab
              label="Create New Notification"
              {...a11yProps(1)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#fff", // Set background color for active tab
                  color: "#000", // Set text color for active tab
                  borderRadius: "10px",
                  borderBottom: "none",
                },
                "&:focus": {
                  outline: "none", // Remove default focus outline
                },
                border: "none",
                textTransform: "none",
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid gap={0} container alignItems="center" justifyContent="center">
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Card sx={{ marginRight: "10px", borderRadius: "10px" }}>
                <CardContent>
                  <FormTabs />
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Card sx={{ padding: '14px', borderRadius: "10px" }}>
                <CardContent>
                    <Form />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Card sx={{ marginTop: "20px" }}>
            <CardContent>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="">
                  <Button
                    sx={{
                      marginRight: "8px",
                      color: "#6750A4",
                      borderColor: "#6750A4",
                    }}
                    variant="outlined"
                    startIcon={<CancelIcon />}
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={{ color: "#6750A4", borderColor: "#6750A4" }}
                    variant="outlined"
                    startIcon={<SaveIcon />}
                  >
                    Save To Draft
                  </Button>
                </div>
                <div className="">
                  <Button
                    sx={{
                      marginRight: "8px",
                      color: "#6750A4",
                      borderColor: "#6750A4",
                    }}
                    variant="outlined"
                    startIcon={<VisibilityIcon />}
                  >
                    View
                  </Button>
                  <Button
                    sx={{ color: "#fff", borderColor: "#6750A4" }}
                    variant="contained"
                    startIcon={<SendIcon />}
                  >
                    Send Push Notification
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default HomeTabs;
