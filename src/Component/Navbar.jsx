import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { HomeOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">
            <Link to={"/"}>
              <Button
                variant="text"
                color="inherit"
                startIcon={<HomeOutlined />}
              >
                HOme
              </Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
