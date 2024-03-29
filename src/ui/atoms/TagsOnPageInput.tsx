import { TextField } from "@mui/material";

export const TagsOnPageInput = () => {
  return (
    <TextField
      id="outlined-basic"
      label="Items on page"
      variant="outlined"
      type="number"
      InputProps={{
        inputProps: { min: 5 },
        defaultValue: 10,
      }}
      sx={{ maxWidth: 120 }}
    />
  );
};
