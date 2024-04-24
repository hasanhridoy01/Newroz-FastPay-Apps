import { Button, Divider, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";

import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

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
    value: "User Group Title Here",
    label: "User Group Title Here",
  },
];

const Form = () => {
  const [users, setUsers] = useState([]);

  //handle User Methods........................!
  const handleUser = (e) => {
    // Check if the user already exists in the users array
    const userExists = users.some((user) => user.name === e.target.value);

    // If the user doesn't already exist, add it to the state
    if (!userExists) {
      // Generate a unique ID for the new user
      const userId = Date.now();

      // Create a new user object with the provided name and generated ID
      const newUser = { id: userId, name: e.target.value };

      // Update the state with the new user
      setUsers([...users, newUser]);
    }
  };

  const handleUserDestroy = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };
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
            value="As a push"
            control={<Radio defaultChecked />}
            label="As a push"
          />
          <FormControlLabel
            value="In-App"
            control={<Radio defaultChecked />}
            label="In-App"
          />
          <FormControlLabel
            value="Index"
            control={<Radio defaultChecked />}
            label="Index"
          />
          <FormControlLabel
            value="SMS"
            control={<Radio defaultChecked />}
            label="SMS"
          />
          <FormControlLabel
            value="WhatsApp"
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
          onChange={handleUser}
          defaultValue="User Group Title"
          helperText="Select User Group"
          sx={{
            width: "225px",
            "& .MuiInputBase-input": {
              height: "20px", // Adjust the height here
              padding: "10px 12px", // Adjust the padding as needed
              fontSize: "13px", // Adjust the font size here
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

      <div
        className=""
        style={{
          marginTop: "13px",
          paddingLeft: "2px",
          backgroundColor: "#E8DEF8",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
          }}
        >
          {users.map((user) => (
            <span
              key={user.id}
              style={{
                marginRight: "9px",
                padding: "10px",
                backgroundColor: "#F4EFFC",
                borderRadius: "20px",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "33px",
              }}
            >
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{user.name}</span>
                <IconButton
                  onClick={() => handleUserDestroy(user.id)}
                  sx={{
                    position: "absolute",
                    marginLeft: "157px",
                    "& .MuiSvgIcon-root": {
                      fontSize: "18px",
                    },
                  }}
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </div>
            </span>
          ))}
        </Typography>
        {console.log(users)}
      </div>

      <Divider
        textAlign="left"
        sx={{ textTransform: "none", marginTop: "19px" }}
      >
        <Typography variant="body2">Send schedule sending</Typography>
      </Divider>

      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "6px",
        }}
      >
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="Send Instantly"
            control={<Radio defaultChecked />}
            label="Send Instantly"
          />
          <FormControlLabel
            value="Schedule"
            control={<Radio defaultChecked />}
            label="Schedule"
          />
        </RadioGroup>
      </div>

      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <div className="" style={{ marginTop: "20px" }}>
          <label htmlFor="">Date</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="date"
            fullWidth
            sx={{
              marginBottom: "6px",
              marginTop: "14px",
              background: "#ffffff",
              border: "1px solid #000",
            }}
          />
        </div>
        <div className="" style={{ marginTop: "20px" }}>
          <label htmlFor="">Time</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="time"
            fullWidth
            sx={{
              marginBottom: "6px",
              marginTop: "14px",
              background: "#ffffff",
              border: "1px solid #000",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
