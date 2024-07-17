import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./FormComponent.css";

const FormComponent = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: "",
      date1: "",
      date2: "",
      persons: 1,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <div className="input-group">
                <label className="input-label">Search:</label>
                <TextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Controller
            name="date1"
            control={control}
            render={({ field }) => (
              <div className="input-group">
                <label className="input-label">Select Your Date:</label>
                <TextField
                  {...field}
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  fullWidth
                />
              </div>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Controller
            name="date2"
            control={control}
            render={({ field }) => (
              <div className="input-group">
                <label className="input-label">Select Your Date:</label>
                <TextField
                  {...field}
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  fullWidth
                />
              </div>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Controller
            name="persons"
            control={control}
            render={({ field }) => (
              <div className="input-group">
                <label className="input-label">No. of persons:</label>
                <TextField {...field} select variant="outlined" fullWidth>
                  {[1, 2, 3, 4, 5].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={1} className="submit-grid">
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="submit-button"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormComponent;
