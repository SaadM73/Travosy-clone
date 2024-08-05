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
  const [selectedType, setSelectedType] = useState("");
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
        <Grid item md={12}>
          <Grid container justifyContent={"center"}>
            <Grid item md={1}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  background: selectedType == "Search_All" ? "#e30037" : "transparent",
                  color: selectedType == "Search_All" ? "#ffffff" : "#000000",
                  fontWeight: 600,
                  ":hover": {
                    textDecoration: selectedType == "Search_All" ? "none" : "underline",
                    background: selectedType == "Search_All" ? "#e30037" : "transparent",
                    color: selectedType == "Search_All" ? "#ffffff" : "#000000",
                  }
                }}
                onClick={() => setSelectedType("Search_All")}
              >
                Search All
              </Button>
            </Grid>
            <Grid item md={0.7}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  background: selectedType == "Hotels" ? "#e30037" : "transparent",
                  color: selectedType == "Hotels" ? "#ffffff" : "#000000",
                  fontWeight: 600,
                  ":hover": {
                    textDecoration: selectedType == "Hotels" ? "none" : "underline",
                    background: selectedType == "Hotels" ? "#e30037" : "transparent",
                    color: selectedType == "Hotels" ? "#ffffff" : "#000000",
                  }
                }}
                onClick={() => setSelectedType("Hotels")}
              >
                Hotels
              </Button>
            </Grid>
            <Grid item md={1.2}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  background: selectedType == "Things_to_Do" ? "#e30037" : "transparent",
                  color: selectedType == "Things_to_Do" ? "#ffffff" : "#000000",
                  fontWeight: 600,
                  ":hover": {
                    textDecoration: selectedType == "Things_to_Do" ? "none" : "underline",
                    background: selectedType == "Things_to_Do" ? "#e30037" : "transparent",
                    color: selectedType == "Things_to_Do" ? "#ffffff" : "#000000",
                  }
                }}
                onClick={() => setSelectedType("Things_to_Do")}
              >
                Things to Do
              </Button>
            </Grid>
            <Grid item md={1}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  background: selectedType == "Restaurants" ? "#e30037" : "transparent",
                  color: selectedType == "Restaurants" ? "#ffffff" : "#000000",
                  fontWeight: 600,
                  ":hover": {
                    textDecoration: selectedType == "Restaurants" ? "none" : "underline",
                    background: selectedType == "Restaurants" ? "#e30037" : "transparent",
                    color: selectedType == "Restaurants" ? "#ffffff" : "#000000",
                  }
                }}
                onClick={() => setSelectedType("Restaurants")}
              >
                Restaurants
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <InputField
            value={search}
            fullWidth
            placeholder="Hotels, Things to Do, Restaurants"
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon />,
              endAdornment: (
                <Button
                  onClick={() => handleNavigate()}
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
