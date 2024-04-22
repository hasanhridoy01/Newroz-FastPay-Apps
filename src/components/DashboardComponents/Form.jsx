import { Button, Divider, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
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

      <div className="" style={{ marginTop: '19px' }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="User Group"
          sx={{ width: '240px' }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" sx={{ marginRight: '10px', marginLeft: '10px' }}>Add</Button>
        <Button variant="contained">Add</Button>
      </div>
    </div>
  );
};

export default Form;
