import {
  AppBar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import LOGO from "../../Assets/company-logo.png";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

function Header() {
  const [showMenu, SetShowMenu] = useState();

  return (
    <AppBar className="secondary-bg-color" sx={{ paddingTop: 1 }}>
      {/* Header Desktop  */}
      <Toolbar
        sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
      >
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box component="img" src={LOGO} sx={{ height: "55px" }}></Box>
          <List className="nav_list">
            <ListItem sx={{ gap: 8 }}>
              <NavLink className="nav_items" to="/">
                <Box component="span" className="nav_box"></Box>
                Home
              </NavLink>
              <NavLink className="nav_items" to="about">
                <Box component="span" className="nav_box"></Box> About
              </NavLink>
              <NavLink className="nav_items" to="service">
                <Box component="span" className="nav_box"></Box> Service
              </NavLink>
              <NavLink className="nav_items" to="pages">
                <Box component="span" className="nav_box"></Box> Pages
              </NavLink>
              <NavLink className="nav_items" to="contact">
                <Box component="span" className="nav_box"></Box> Contact
              </NavLink>
            </ListItem>
          </List>
          <Button
            variant="contained"
            size="large"
            sx={{ float: "right", marginTop: 1 }}
            className="primary-bg-color secondary-color header_btn"
          >
            GET A QUOTE
          </Button>
        </Container>
      </Toolbar>
      {/* Header Mobile */}
      <Box
        sx={{
          display: { md: "none", xs: "block" },
          height: 60,
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", zIndex: -1, left: 15 }}>
            <Box component="img" src={LOGO} sx={{ height: "55px" }}></Box>
          </Box>
          <Box sx={{ float: "right" }}>
            <Button onClick={() => SetShowMenu(!showMenu)}>
              <MenuIcon sx={{ color: "#fff" }} />
            </Button>
          </Box>
        </Box>
        {showMenu ? (
          <Box
            sx={{
              maxWidth: 250,
              height: "100vh",
              boxShadow: "#c1c1c1 1px 0",
              zIndex: 4,
            }}
            className="secondary-bg-color"
          >
            <Box sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src={LOGO}
                sx={{ height: "55px", paddingTop: 5 }}
              ></Box>
            </Box>
            <List>
              <ListItem sx={{ gap: 8, flexDirection: "column", top: 100 }}>
                <NavLink className="nav_items" to="/">
                  <Box component="span"></Box>
                  Home
                </NavLink>
                <NavLink className="nav_items" to="about">
                  <Box component="span"></Box> About
                </NavLink>
                <NavLink className="nav_items" to="service">
                  <Box component="span"></Box> Service
                </NavLink>
                <NavLink className="nav_items" to="pages">
                  <Box component="span"></Box> Pages
                </NavLink>
                <NavLink className="nav_items" to="contact">
                  <Box component="span"></Box> Contact
                </NavLink>
              </ListItem>
            </List>
          </Box>
        ) : null}
      </Box>
    </AppBar>
  );
}

export default Header;
