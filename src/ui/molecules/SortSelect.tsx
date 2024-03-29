import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SortSelect = () => {
  return (
    <Box sx={{ mx: 2, minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //   value={age}
          label="Age"
          //   onChange={handleChange}
        >
          <MenuItem value={10}>Popular</MenuItem>
          <MenuItem value={20}>Activity</MenuItem>
          <MenuItem value={30}>Name</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
