import {
  Badge,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import "./Contact.css";

// Icons
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Email } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import RoomIcon from "@mui/icons-material/Room";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Images
import BANNER from "../../Assets/banner.jpg";
import ScrollToTop from "react-scroll-to-top";

function Contact() {
  return (
    <Box>
      {/* Banner */}
      <Box
        sx={{
          backgroundImage: `url(${BANNER})`,
          backgroundSize: "cover",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box>
            <Typography variant="h1" className="main_head">
              Contact Us
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-2vh",
            backgroundColor: "#fff",
            boxShadow: "0px 16px 32px 0px rgba(0, 0, 0, 0.06)",
            padding: "13px 20px",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              href="./"
              className="breadcrumb_privious_color"
            >
              Home
            </Link>
            <Typography className="breadcrumb_active_color">Contact</Typography>
          </Breadcrumbs>
        </Box>
        <Box>
          <Typography variant="h1" className="watermark_head_contact">
            Contact
          </Typography>
        </Box>
      </Box>
      {/* Contact Page Details */}
      <Box sx={{ padding: "100px 0px 0px 0px" }}>
        <Grid container maxWidth="lg" margin="auto">
          <Grid
            item
            xs={12}
            sx={{ padding: "60px 0px", border: "2px solid #e4e4e4" }}
          >
            <Grid container margin="auto">
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={4}
                xs={12}
                className="details_grid"
              >
                <Box>
                  <Box textAlign="center">
                    <Box sx={{ position: "relative" }}>
                      <Box className="badge_box">
                        <Badge badgeContent={4}></Badge>
                      </Box>
                      <EmailIcon sx={{ color: "#b89b5e", fontSize: "100px" }} />
                    </Box>
                    <Typography variant="h5" className="detail_head">
                      Email Address
                    </Typography>
                    <Typography variant="caption" className="detail_address">
                      info@webmail.com
                    </Typography>
                    <Box component="br"></Box>
                    <Typography variant="caption" className="detail_address">
                      jobs.examplejob@com
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={4}
                xs={12}
                pt={{ sm: 0, xs: 10 }}
                className="details_grid"
              >
                <Box>
                  <Box textAlign="center">
                    <Box sx={{ position: "relative" }}>
                      <Box className="badge_box">
                        <Badge badgeContent={4}></Badge>
                      </Box>
                      <CallIcon sx={{ color: "#b89b5e", fontSize: "100px" }} />
                    </Box>
                    <Typography variant="h5" className="detail_head">
                      Phone Number
                    </Typography>
                    <Typography variant="caption" className="detail_address">
                      +897 676 5654 65
                    </Typography>
                    <Box component="br"></Box>
                    <Typography variant="caption" className="detail_address">
                      +908(097) 564 765 76
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={4}
                xs={12}
                pt={{ sm: 0, xs: 10 }}
              >
                <Box>
                  <Box textAlign="center">
                    <Box sx={{ position: "relative" }}>
                      <Box className="badge_box">
                        <Badge badgeContent={4}></Badge>
                      </Box>
                      <RoomIcon sx={{ color: "#b89b5e", fontSize: "100px" }} />
                    </Box>
                    <Typography variant="h5" className="detail_head">
                      Office Address
                    </Typography>
                    <Typography variant="caption" className="detail_address">
                      12/A, Romania City Town
                    </Typography>
                    <Box component="br"></Box>
                    <Typography variant="caption" className="detail_address">
                      Hall New Joursey, UK
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Estimate Service */}
      <Box sx={{ padding: "100px 0px" }}>
        <Box sx={{ textAlign: "center" }} px={{ lg: 0, md: 5, sm: 5, xs: 5 }}>
          <Typography variant="h6" className="about_practice">
            <KeyboardDoubleArrowLeftIcon className="mui_icons" /> CONTACT{" "}
            <KeyboardDoubleArrowRightIcon className="mui_icons" />
          </Typography>
          <Typography variant="h3" className="about_practice_head">
            Estimate Your Project
          </Typography>
        </Box>
        <Box>
          <Grid container maxWidth="lg" margin="auto" sx={{ paddingTop: 5 }}>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} px={{ xl: 1 }}>
              <Card className="input_class">
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="input"
                    placeholder="Enter your full name"
                    className="estimate_input estimate_input_1"
                  ></Box>
                  <Box className="esitimate_contact_icons">
                    <PersonIcon sx={{ color: "#b89b5e" }} />
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid
              item
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
              px={{ xl: 1 }}
              pt={{ lg: 0, md: 4, sm: 4, xs: 4 }}
            >
              <Card className="input_class">
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="input"
                    placeholder="Enter your email address"
                    className="estimate_input estimate_input_1"
                  ></Box>
                  <Box className="esitimate_contact_icons">
                    <Email sx={{ color: "#b89b5e" }} />
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Grid container maxWidth="lg" margin="auto" sx={{ paddingTop: 5 }}>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12} px={{ xl: 1 }}>
              <Card className="input_class">
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="input"
                    placeholder="Enter your phone"
                    className="estimate_input estimate_input_2"
                  ></Box>
                  <Box className="esitimate_contact_icons">
                    <PhoneEnabledIcon sx={{ color: "#b89b5e" }} />
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={12}
              sm={12}
              xs={12}
              px={{ xl: 1 }}
              pt={{ lg: 0, md: 4, sm: 4, xs: 4 }}
            >
              <Card className="input_class">
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="input"
                    placeholder="Enter Date"
                    className="estimate_input estimate_input_2"
                  ></Box>
                  <Box className="esitimate_contact_icons">
                    <CalendarMonthIcon sx={{ color: "#b89b5e" }} />
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={12}
              sm={12}
              xs={12}
              px={{ xl: 1 }}
              pt={{ lg: 0, md: 4, sm: 4, xs: 4 }}
            >
              <Card className="input_class">
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="input"
                    placeholder="Enter Suject"
                    className="estimate_input estimate_input_2"
                  ></Box>
                  <Box className="esitimate_contact_icons">
                    <ArrowDownwardIcon sx={{ color: "#b89b5e" }} />
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Grid container maxWidth="lg" margin="auto" sx={{ paddingTop: 5 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Card className="input_class">
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="textarea"
                    placeholder="Enter Subject"
                    className="estimate_input estimate_textarea_input"
                    rows={10}
                    sx={{ fontFamily: "'Poppins', sans-serif" }}
                  ></Box>
                  <Box className="estimate_pencil_icon">
                    <BorderColorIcon sx={{ color: "#b89b5e" }} />
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Box sx={{ margin: "auto", paddingTop: 3 }}>
              <Button
                variant="contained"
                size="large"
                className="primary-bg-color white-color stack_Btn_service btn_animation"
                sx={{ padding: "18px 38px" }}
              >
                Submit Now
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Arrow Circle Up Icon */}
      <ScrollToTop
        smooth
        className="scrool_to_up"
        component={
          <Box>
            <ExpandLessIcon />
          </Box>
        }
      />
    </Box>
  );
}

export default Contact;
