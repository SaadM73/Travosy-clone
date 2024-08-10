import { Fragment } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function () {
  return (
    <Fragment>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
      >
        <HeroSection />
        <Outlet />
      </Box>
      <Footer />
    </Fragment>
  )
}