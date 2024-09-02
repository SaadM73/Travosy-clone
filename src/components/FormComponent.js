import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Grid,
  TextField,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./FormComponent.css";
import styled from "@emotion/styled";
import PublicServices from "../api/public/PublicServices";
import { useNavigate } from "react-router-dom";

const InputField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    paddingLeft: "18px",
    paddingRight: "9px",
    '& fieldset': {
      borderColor: 'transparent', // Remove the default border
    },
    '&:hover fieldset': {
      borderColor: 'transparent', // Remove the border on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent', // Remove the border on focus
    },
  },
})

const FormComponent = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/listing", {
      state: {
        navigateFrom: "search",
        search: search,
        selectedType: selectedType == "" ? "all" : selectedType
      }
    })
  }

  return (
    <form className="form-container">
      <Grid container rowSpacing={3} justifyContent="center">
        <Grid item md={7} sm={10} xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  background: selectedType == "all" ? "#e30037" : "transparent",
                  color: selectedType == "all" ? "#ffffff" : "#000000",
                  fontWeight: 600,
                  ":hover": {
                    textDecoration: selectedType == "all" ? "none" : "underline",
                    background: selectedType == "all" ? "#e30037" : "transparent",
                    color: selectedType == "all" ? "#ffffff" : "#000000",
                  },
                }}
                onClick={() => setSelectedType("all")}
              >
                Search All
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  background: selectedType == "hotels" ? "#e30037" : "transparent",
                  color: selectedType == "hotels" ? "#ffffff" : "#000000",
                  fontWeight: 600,
                  ":hover": {
                    textDecoration: selectedType == "hotels" ? "none" : "underline",
                    background: selectedType == "hotels" ? "#e30037" : "transparent",
                    color: selectedType == "hotels" ? "#ffffff" : "#000000",
                  },
                }}
                onClick={() => setSelectedType("hotels")}
              >
                Hotels
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  background: selectedType == "attractions" ? "#e30037" : "transparent",
                  color: selectedType == "attractions" ? "#ffffff" : "#000000",
                  fontWeight: 600,
                  ":hover": {
                    textDecoration: selectedType == "attractions" ? "none" : "underline",
                    background: selectedType == "attractions" ? "#e30037" : "transparent",
                    color: selectedType == "attractions" ? "#ffffff" : "#000000",
                  },
                }}
                onClick={() => setSelectedType("attractions")}
              >
                Attractions
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  background: selectedType == "restaurants" ? "#e30037" : "transparent",
                  color: selectedType == "restaurants" ? "#ffffff" : "#000000",
                  fontWeight: 600,
                  ":hover": {
                    textDecoration: selectedType == "restaurants" ? "none" : "underline",
                    background: selectedType == "restaurants" ? "#e30037" : "transparent",
                    color: selectedType == "restaurants" ? "#ffffff" : "#000000",
                  },
                }}
                onClick={() => setSelectedType("restaurants")}
              >
                Restaurants
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={12} sx={12} xs={12}>
          <InputField
            value={search}
            fullWidth
            placeholder="Hotels, Things to Do, Restaurants"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleNavigate();
              }
            }}
            InputProps={{
              startAdornment: <SearchIcon />,
              endAdornment: (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate();
                  }}
                  sx={{
                    background: "#e30037",
                    color: "#ffffff",
                    textTransform: "capitalize",
                    border: "1px solid transparent",
                    borderRadius: "24px",
                    p: "6px 24px",
                    ":hover": {
                      background: "transparent",
                      color: "#e30037",
                      border: "1px solid #e30037",
                    }
                  }}
                >
                  Search
                </Button>
              )
            }}
            sx={{
              boxShadow: "0px 0px 15px 2px #c4c4c4",
              borderRadius: "30px",
              padding: "8px 0px"
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default FormComponent;
