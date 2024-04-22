import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

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
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" style={{ marginBottom: "7px" }}>
              English Notification Data
            </label>
            <TextField
              id="outlined-basic"
              label="Notification Title Goes Here"
              variant="outlined"
            />
          </div>

          <TextField
            id="outlined-basic"
            label="Notification English Description"
            variant="outlined"
            multiline
            sx={{ width: "100%", marginTop: "14px", marginBottom: "19px" }}
          />

          <Divider textAlign="left" sx={{ textTransform: "none" }}>
            <Typography variant="body2">
              Add Media to the Notification
            </Typography>
          </Divider>

          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label
              htmlFor=""
              style={{ marginBottom: "7px", marginTop: "14px" }}
            >
              Upload Media
            </label>
            <TextField id="outlined-basic" type="file" variant="outlined" />
          </div>

          <Divider
            textAlign="left"
            sx={{
              textTransform: "none",
              marginTop: "19px",
              marginBottom: "10px",
            }}
          >
            <Typography variant="body2">Set Target</Typography>
          </Divider>

          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "6px",
            }}
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Set Target URL"
                control={<Radio defaultChecked />}
                label="Set Target URL"
              />
              <FormControlLabel
                value="Landing Page Link"
                control={<Radio />}
                label="Landing Page Link"
              />
            </RadioGroup>
          </div>

          <TextField
            id="outlined-basic"
            label="Notification Set URl"
            variant="outlined"
            type="url"
            fullWidth
            sx={{ marginBottom: "6px", marginTop: "14px" }}
          />

          <Divider
            textAlign="left"
            sx={{ textTransform: "none", marginTop: "14px" }}
          >
            <Typography variant="body2">CTA button</Typography>
          </Divider>

          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "6px",
            }}
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="button"
                control={<Radio defaultChecked />}
                label="button"
              />
              <FormControlLabel value="text" control={<Radio />} label="text" />
            </RadioGroup>
          </div>

          <TextField
            id="outlined-basic"
            label="Read More"
            variant="outlined"
            type="url"
            fullWidth
            sx={{ marginBottom: "6px", marginTop: "14px" }}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Stack spacing={2}>
            <div
              className=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="" style={{ marginBottom: "9px" }}>
                بيانات الإشعار
              </label>
              <TextField
                lang="ar"
                id="outlined-basic"
                label="بيانات الإشعار"
                variant="outlined"
                dir="rtl"
              />
            </div>

            <div
              className=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                lang="ar"
                id="outlined-basic"
                label="بيانات الإشعار"
                variant="outlined"
                dir="rtl"
              />
            </div>

            <Divider textAlign="left" sx={{ textTransform: "none" }}>
              <Typography variant="body2">
                Add Media to the Notification
              </Typography>
            </Divider>

            <div
              className=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label
                htmlFor=""
                style={{ marginBottom: "7px", marginTop: "14px" }}
              >
                Upload Media
              </label>
              <TextField id="outlined-basic" type="file" variant="outlined" dir="rtl" />
            </div>

            <Divider
              textAlign="left"
              sx={{
                textTransform: "none",
                marginTop: "19px",
                marginBottom: "10px",
              }}
            >
              <Typography variant="body2">Set Target</Typography>
            </Divider>

            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "6px",
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Set Target URL"
                  control={<Radio defaultChecked />}
                  label="Set Target URL"
                />
                <FormControlLabel
                  value="Landing Page Link"
                  control={<Radio />}
                  label="Landing Page Link"
                />
              </RadioGroup>
            </div>

            <TextField
              id="outlined-basic"
              label="Notification Set URl"
              variant="outlined"
              type="url"
              fullWidth
              sx={{ marginBottom: "6px", marginTop: "14px" }}
            />

            <Divider
              textAlign="left"
              sx={{ textTransform: "none", marginTop: "14px" }}
            >
              <Typography variant="body2">CTA button</Typography>
            </Divider>

            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "6px",
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="button"
                  control={<Radio defaultChecked />}
                  label="button"
                />
                <FormControlLabel
                  value="text"
                  control={<Radio />}
                  label="text"
                />
              </RadioGroup>
            </div>

            <TextField
              id="outlined-basic"
              label="Read More"
              variant="outlined"
              type="url"
              fullWidth
              sx={{ marginBottom: "6px", marginTop: "14px" }}
            />
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Stack spacing={2}>
            <div
              className=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="" style={{ marginBottom: "9px" }}>
                بيانات الإشعار
              </label>
              <TextField
                lang="ar"
                id="outlined-basic"
                label="بيانات الإشعار"
                variant="outlined"
                dir="rtl"
              />
            </div>

            <div
              className=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                lang="ar"
                id="outlined-basic"
                label="بيانات الإشعار"
                variant="outlined"
                dir="rtl"
              />
            </div>

            <Divider textAlign="left" sx={{ textTransform: "none" }}>
              <Typography variant="body2">
                Add Media to the Notification
              </Typography>
            </Divider>

            <div
              className=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label
                htmlFor=""
                style={{ marginBottom: "7px", marginTop: "14px" }}
              >
                Upload Media
              </label>
              <TextField id="outlined-basic" type="file" variant="outlined" dir="rtl" />
            </div>

            <Divider
              textAlign="left"
              sx={{
                textTransform: "none",
                marginTop: "19px",
                marginBottom: "10px",
              }}
            >
              <Typography variant="body2">Set Target</Typography>
            </Divider>

            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "6px",
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Set Target URL"
                  control={<Radio defaultChecked />}
                  label="Set Target URL"
                />
                <FormControlLabel
                  value="Landing Page Link"
                  control={<Radio />}
                  label="Landing Page Link"
                />
              </RadioGroup>
            </div>

            <TextField
              id="outlined-basic"
              label="Notification Set URl"
              variant="outlined"
              type="url"
              fullWidth
              sx={{ marginBottom: "6px", marginTop: "14px" }}
            />

            <Divider
              textAlign="left"
              sx={{ textTransform: "none", marginTop: "14px" }}
            >
              <Typography variant="body2">CTA button</Typography>
            </Divider>

            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "6px",
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="button"
                  control={<Radio defaultChecked />}
                  label="button"
                />
                <FormControlLabel
                  value="text"
                  control={<Radio />}
                  label="text"
                />
              </RadioGroup>
            </div>

            <TextField
              id="outlined-basic"
              label="Read More"
              variant="outlined"
              type="url"
              fullWidth
              sx={{ marginBottom: "6px", marginTop: "14px" }}
            />
          </Stack>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default FormTabs;
