import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card, CardContent } from "@mui/material";

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
          <Typography>{children}</Typography>
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

const FormTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              border: "none",
              padding: "0px",
              "& .MuiTabs-indicator": {
                display: "none",
              },
              justifyContent: "space-between",
            }}
          >
            <Tab
              label="English"
              {...a11yProps(0)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#30285f", // Set background color for active tab
                  color: "#ffffff", // Set text color for active tab
                  borderRadius: "10px",
                  borderBottom: "none",
                },
                "&:focus": {
                  outline: "none", // Remove default focus outline
                },
                padding: "0px",
                border: "none",
                textTransform: "none",
                marginBottom: "7px",
              }}
            />
            <Tab
              label="Arabic"
              {...a11yProps(1)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#30285f", // Set background color for active tab
                  color: "#ffffff", // Set text color for active tab
                  borderRadius: "10px",
                  borderBottom: "none",
                },
                "&:focus": {
                  outline: "none", // Remove default focus outline
                },
                padding: "0px",
                border: "none",
                textTransform: "none",
                marginBottom: "7px",
              }}
            />
            <Tab
              label="Kurdish"
              {...a11yProps(2)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#30285f", // Set background color for active tab
                  color: "#ffffff", // Set text color for active tab
                  borderRadius: "10px",
                  borderBottom: "none",
                },
                "&:focus": {
                  outline: "none", // Remove default focus outline
                },
                padding: "0px",
                border: "none",
                textTransform: "none",
                marginBottom: "7px",
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default FormTabs;
