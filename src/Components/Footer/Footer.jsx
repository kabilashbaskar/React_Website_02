import React from "react";
import "./Footer.css";
import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import LOGO from "../../Assets/company-logo.png";
import FooterImg from "../../Assets/bt1.jpg";
import FooterImg2 from "../../Assets/bt2.jpg";
import FooterImg3 from "../../Assets/bt3.jpg";
import FooterImg4 from "../../Assets/bt4.jpg";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LogoDevIcon from "@mui/icons-material/LogoDev";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#eee" }}>
      {/* Footer */}
      <Box component="footer" p={{ xl: 6, lg: 6, md: 5, sm: 3, xs: 5 }}>
        <Grid container maxWidth="lg" margin="auto" px={{ lg: 0, md: 3 }}>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <Box sx={{ position: "relative" }}>
              <Typography variant="h5" className="footer_head">
                About Us
              </Typography>
              <Box className="dash_line"></Box>
            </Box>
            <Typography variant="subtitle1" className="footer_sub_text">
              Main practice areas of the firm include Admiralty, Maritime and
              Ship Arrest, Arbitration, Mediation and ADRs, Aviation Matters,
              Banking, Finance & Investment, Capital Market, Commercial
              Litigation, Commercial Transactions, International Trade,
              Construction & Engineering., Foreign Investment and Business
              Set-Up.
            </Typography>
            <Button
              sx={{ marginTop: 4, padding: "20px 40px" }}
              variant="contained"
              size="large"
              className="primary-bg-color white-color btn_animation"
            >
              Get An Appointment
            </Button>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            md={6}
            sm={6}
            xs={12}
            sx={{ position: "relative" }}
            pt={{ sm: 0, xs: 6 }}
          >
            <Box sx={{ position: "absolute", left: 20 }}>
              <Typography
                className="footer_head"
                variant="h5"
                px={{ xl: 2, lg: 2, md: 2, sm: 1 }}
              >
                Practice Area
              </Typography>
              <Box className="dash_line2"></Box>
            </Box>
            <Box pt={{ xs: 4, sm: 0 }}>
              <List sx={{ marginTop: 4 }}>
                <ListItem
                  sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 3,
                    paddingTop: 3,
                  }}
                >
                  <Link className="footer_sec_list">Family Matters</Link>
                  <Link className="footer_sec_list">Social Issue</Link>
                  <Link className="footer_sec_list">Life Insurance</Link>
                  <Link className="footer_sec_list">Finance & Investment</Link>
                  <Link className="footer_sec_list">Business Manage </Link>
                  <Link className="footer_sec_list">Cheating</Link>
                  <Link className="footer_sec_list">Fruad Matters</Link>
                  <Link className="footer_sec_list">Auditing Problem</Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={3} xs={12}>
            <Box pt={{ xs: 4, sm: 0 }}>
              <List sx={{ marginTop: 4 }}>
                <ListItem
                  sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 3,
                    paddingTop: 3,
                  }}
                >
                  <Link className="footer_sec_list">Family Matters</Link>
                  <Link className="footer_sec_list">Social Issue</Link>
                  <Link className="footer_sec_list">Life Insurance</Link>
                  <Link className="footer_sec_list">Finance & Investment</Link>
                  <Link className="footer_sec_list">Business Manage </Link>
                  <Link className="footer_sec_list">Cheating</Link>
                  <Link className="footer_sec_list">Fruad Matters</Link>
                  <Link className="footer_sec_list">Auditing Problem</Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            md={6}
            sm={3}
            xs={12}
            pt={{ lg: 0, md: 5, sm: 8, xs: 3 }}
          >
            <Box sx={{ position: "relative" }}>
              <Typography variant="h5" className="footer_head">
                News Feeds
              </Typography>
              <Box className="dash_line3"></Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "300px",
                color: "#555555",
                fontSize: "14px",
                fontWeight: 600,
              }}
              className="footer_newsFeed_card"
            >
              <Box sx={{ flex: "1 0 auto", margin: "auto" }}>
                <CardMedia
                  component="img"
                  src={FooterImg}
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ position: "relative" }}>
                  <CalendarMonthIcon sx={{ color: "#C6AC82" }} />
                  <Box component="span" sx={{ position: "absolute" }}>
                    12th June 2020
                  </Box>
                </Box>
                <Box variant="body2">
                  Managing Partner along with Senior Counsels.
                </Box>
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "300px",
                color: "#555555",
                fontSize: "14px",
                fontWeight: 600,
              }}
              className="footer_newsFeed_card"
            >
              <Box sx={{ flex: "1 0 auto", margin: "auto" }}>
                <CardMedia
                  component="img"
                  src={FooterImg2}
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ position: "relative" }}>
                  <CalendarMonthIcon sx={{ color: "#C6AC82" }} />
                  <Box component="span" sx={{ position: "absolute" }}>
                    12th June 2020
                  </Box>
                </Box>
                <Box variant="body2">
                  Managing Partner along with Senior Counsels.
                </Box>
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "300px",
                color: "#555555",
                fontSize: "14px",
                fontWeight: 600,
              }}
              className="footer_newsFeed_card"
            >
              <Box sx={{ flex: "1 0 auto", margin: "auto" }}>
                <CardMedia
                  component="img"
                  src={FooterImg3}
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ position: "relative" }}>
                  <CalendarMonthIcon sx={{ color: "#C6AC82" }} />
                  <Box component="span" sx={{ position: "absolute" }}>
                    12th June 2020
                  </Box>
                </Box>
                <Box variant="body2">
                  Managing Partner along with Senior Counsels.
                </Box>
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "300px",
                color: "#555555",
                fontSize: "14px",
                fontWeight: 600,
              }}
              className="footer_newsFeed_card"
            >
              <Box sx={{ flex: "1 0 auto", margin: "auto" }}>
                <CardMedia
                  component="img"
                  src={FooterImg4}
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ position: "relative" }}>
                  <CalendarMonthIcon sx={{ color: "#C6AC82" }} />
                  <Box component="span" sx={{ position: "absolute" }}>
                    12th June 2020
                  </Box>
                </Box>
                <Box variant="body2">
                  Managing Partner along with Senior Counsels.
                </Box>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="footer_sub">
        <Grid
          container
          maxWidth="lg"
          margin="auto"
          px={{ lg: 0, md: 3, sm: 3, xs: 1 }}
        >
          <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
            <List sx={{ display: "flex", gap: 2 }}>
              <ListItem className="list_item">
                <FacebookIcon className="fb_icon" />
              </ListItem>
              <ListItem className="list_item">
                <TwitterIcon className="fb_icon" />
              </ListItem>
              <ListItem className="list_item">
                <LinkedInIcon className="fb_icon" />
              </ListItem>
              <ListItem className="list_item">
                <YouTubeIcon className="fb_icon" />
              </ListItem>
              <ListItem className="list_item">
                <LogoDevIcon className="fb_icon" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
            <Box
              sx={{ display: "flex", justifyContent: "center" }}
              pt={{ sm: 0, xs: 2 }}
            >
              <Box component="img" src={LOGO} sx={{ height: "55px" }}></Box>
            </Box>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
            <Box sx={{ paddingTop: 2 }}>
              <Typography variant="h6" className="copyright_text">
                Copyright By @ Company - 2021
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
