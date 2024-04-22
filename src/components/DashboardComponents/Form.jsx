import { Button, Divider, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";

import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const user = [
  {
    value: "User Group Title",
    label: "User Group Title",
  },
  {
    value: "User Group Title Goes",
    label: "User Group Title Goes",
  },
  {
    value: "User Group Title Goes Here",
    label: "User Group Title Goes Here",
  },
];

const Form = () => {
  return (
    <div>
      <Divider textAlign="left" sx={{ textTransform: "none" }}>
        <Typography variant="body2">Define types of notification</Typography>
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
          column
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="Set Target URL"
            control={<Radio defaultChecked />}
            label="As a push"
          />
          <FormControlLabel
            value="Set Target URL"
            control={<Radio defaultChecked />}
            label="In-App"
          />
          <FormControlLabel
            value="Set Target URL"
            control={<Radio defaultChecked />}
            label="Index"
          />
          <FormControlLabel
            value="Set Target URL"
            control={<Radio defaultChecked />}
            label="SMS"
          />
          <FormControlLabel
            value="Set Target URL"
            control={<Radio defaultChecked />}
            label="WhatsApp"
          />
        </RadioGroup>
      </div>

      <Divider
        textAlign="left"
        sx={{ textTransform: "none", marginTop: "14px", marginBottom: "14px" }}
      >
        <Typography variant="body2">Define types of notification</Typography>
      </Divider>

      <div className="" style={{ marginTop: "19px" }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select User Group"
          defaultValue="User Group Title"
          helperText="Select User Group"
          sx={{
            width: "225px",
            "& .MuiInputBase-input": {
              height: "20px", // Adjust the height here
              padding: "10px 12px", // Adjust the padding as needed
              fontSize: '13px', // Adjust the font size here
            },
          }}
        >
          {user.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          size="small"
          variant="outlined"
          startIcon={<CloudUploadIcon />}
          sx={{ marginRight: "10px", marginLeft: "10px", height: "40px" }}
        >
          Upload
        </Button>
        <Button
          size="small"
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ height: "40px" }}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default Form;
