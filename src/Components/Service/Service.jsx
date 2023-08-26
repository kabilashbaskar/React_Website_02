import React from "react";
import "./Service.css";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Grid,
  Link,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Images
import BANNER from "../../Assets/banner.jpg";
import MANS from "../../Assets/srs.png";
import CLINT1 from "../../Assets/c1.png";
import CLINT2 from "../../Assets/c2.png";
import CLINT3 from "../../Assets/c3.png";
import CLINT4 from "../../Assets/c4.png";
import CLINT5 from "../../Assets/c5.png";

// Icons
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GavelIcon from "@mui/icons-material/Gavel";
import CompressIcon from "@mui/icons-material/Compress";
import { Email } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ScrollToTop from "react-scroll-to-top";

function Service() {
  // Estimate Service

  const marks = [
    {
      value: 0,
      label: "1000",
    },
    {
      value: 20,
      label: "2000",
    },
    {
      value: 40,
      label: "3000",
    },
    {
      value: 60,
      label: "4000",
    },
    {
      value: 80,
      label: "5000",
    },
    {
      value: 100,
      label: "6000",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

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
              What We Do
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
            <Typography className="breadcrumb_active_color">Service</Typography>
          </Breadcrumbs>
        </Box>
        <Box>
          <Typography variant="h1" className="watermark_head_services">
            Services
          </Typography>
        </Box>
      </Box>
      {/* Service Page Section  */}
      <Box sx={{ padding: "100px 0px" }}>
        <Grid
          container
          maxWidth="lg"
          margin="auto"
          className="service_page"
          sx={{ position: "relative" }}
        >
          <Grid item xl={8} lg={8}>
            <Box>
              <Typography variant="subtitle2" className="service_p">
                20+ years of experience
              </Typography>
              <Typography
                variant="h3"
                className="main_sub_head"
                pt={{ xl: 3, lg: 3, md: 3, xs: 3 }}
              >
                Get Coverage Built To Protect You & Your Family.
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                className="stack_Btn"
                pt={{ xl: 4, lg: 3, md: 5, xs: 5 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  className="primary-bg-color white-color stack_Btn_service btn_animation"
                  sx={{ padding: "18px 38px" }}
                >
                  CONTACT US
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  className="primary-bg-color white-color stack_Btn_service btn_animation"
                  sx={{ padding: "18px 38px" }}
                >
                  SERVICES
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Box
            sx={{
              position: "absolute",
              top: "-130px",
              right: "-50px",
              display: { xs: "none", lg: "block" },
            }}
          >
            <Box component="img" src={MANS}></Box>
          </Box>
        </Grid>
      </Box>
      {/* Practice Service */}
      <Box sx={{ padding: "100px 0px", backgroundColor: "#F9F6EF" }}>
        <Box sx={{ textAlign: "center" }} px={{ lg: 0, md: 5, sm: 5, xs: 5 }}>
          <Typography variant="h6" className="about_practice">
            <KeyboardDoubleArrowLeftIcon className="mui_icons" /> SERVICES{" "}
            <KeyboardDoubleArrowRightIcon className="mui_icons" />
          </Typography>
          <Typography variant="h3" className="about_practice_head">
            Our Practice Area
          </Typography>
        </Box>
        <Grid
          container
          maxWidth="lg"
          margin="auto"
          pt={{ xl: 10, lg: 8, sm: 4, xs: 3 }}
          px={{ md: 2, sm: 10, xs: 4 }}
        >
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            px={{ xl: 2, lg: 2, md: 2, sm: 2 }}
            pt={{ md: 0, sm: 4, xs: 5 }}
          >
            <Box className="practice_service">
              <Box textAlign="center">
                <AccountBalanceIcon className="practice_service_icon" />
                <Typography
                  variant="h5"
                  className="practice_service_head"
                  sx={{ paddingTop: 2 }}
                >
                  Best Quality
                </Typography>
              </Box>
              <Box component="p" className="practice_service_P">
                We build custom software that can run on any device and
                integrate with your existing infrastructure.
              </Box>
              <Box
                sx={{
                  backgroundColor: " #f7f3ea",
                  width: "35px",
                  margin: "auto",
                  borderRadius: "50%",
                  padding: "13px 9px 8px 9px",
                  textIndent: "5px",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIcon className="practice_service_icon_arrow" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            px={{ xl: 2, lg: 2, md: 2, sm: 2 }}
            pt={{ md: 0, sm: 4, xs: 5 }}
          >
            <Box className="practice_service">
              <Box textAlign="center">
                <GavelIcon className="practice_service_icon" />
                <Typography
                  variant="h5"
                  className="practice_service_head"
                  sx={{ paddingTop: 2 }}
                >
                  Family & Devorce
                </Typography>
              </Box>
              <Box component="p" className="practice_service_P">
                We build custom software that can run on any device and
                integrate with your existing infrastructure.
              </Box>
              <Box
                sx={{
                  backgroundColor: " #f7f3ea",
                  width: "35px",
                  margin: "auto",
                  borderRadius: "50%",
                  padding: "13px 9px 8px 9px",
                  textIndent: "5px",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIcon className="practice_service_icon_arrow" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            px={{ xl: 2, lg: 2, md: 2, sm: 2 }}
            pt={{ md: 0, sm: 4, xs: 5 }}
          >
            <Box className="practice_service">
              <Box textAlign="center">
                <CompressIcon className="practice_service_icon" />
                <Typography
                  variant="h5"
                  className="practice_service_head"
                  sx={{ paddingTop: 2 }}
                >
                  Best Quality
                </Typography>
              </Box>
              <Box component="p" className="practice_service_P">
                We build custom software that can run on any device and
                integrate with your existing infrastructure.
              </Box>
              <Box
                sx={{
                  backgroundColor: " #f7f3ea",
                  width: "35px",
                  margin: "auto",
                  borderRadius: "50%",
                  padding: "13px 9px 8px 9px",
                  textIndent: "5px",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIcon className="practice_service_icon_arrow" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            px={{ xl: 2, lg: 2, md: 2, sm: 2 }}
            pt={{ xl: 4, lg: 4, md: 3, sm: 4, xs: 5 }}
          >
            <Box className="practice_service">
              <Box textAlign="center">
                <AccountBalanceIcon className="practice_service_icon" />
                <Typography
                  variant="h5"
                  className="practice_service_head"
                  sx={{ paddingTop: 2 }}
                >
                  Best Quality
                </Typography>
              </Box>
              <Box component="p" className="practice_service_P">
                We build custom software that can run on any device and
                integrate with your existing infrastructure.
              </Box>
              <Box
                sx={{
                  backgroundColor: " #f7f3ea",
                  width: "35px",
                  margin: "auto",
                  borderRadius: "50%",
                  padding: "13px 9px 8px 9px",
                  textIndent: "5px",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIcon className="practice_service_icon_arrow" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            px={{ xl: 2, lg: 2, md: 2, sm: 2 }}
            pt={{ xl: 4, lg: 4, md: 3, sm: 4, xs: 5 }}
          >
            <Box className="practice_service">
              <Box textAlign="center">
                <AccountBalanceIcon className="practice_service_icon" />
                <Typography
                  variant="h5"
                  className="practice_service_head"
                  sx={{ paddingTop: 2 }}
                >
                  Best Quality
                </Typography>
              </Box>
              <Box component="p" className="practice_service_P">
                We build custom software that can run on any device and
                integrate with your existing infrastructure.
              </Box>
              <Box
                sx={{
                  backgroundColor: " #f7f3ea",
                  width: "35px",
                  margin: "auto",
                  borderRadius: "50%",
                  padding: "13px 9px 8px 9px",
                  textIndent: "5px",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIcon className="practice_service_icon_arrow" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            px={{ xl: 2, lg: 2, md: 2, sm: 2 }}
            pt={{ xl: 4, lg: 4, md: 3, sm: 4, xs: 5 }}
          >
            <Box className="practice_service">
              <Box textAlign="center">
                <AccountBalanceIcon className="practice_service_icon" />
                <Typography
                  variant="h5"
                  className="practice_service_head"
                  sx={{ paddingTop: 2 }}
                >
                  Best Quality
                </Typography>
              </Box>
              <Box component="p" className="practice_service_P">
                We build custom software that can run on any device and
                integrate with your existing infrastructure.
              </Box>
              <Box
                sx={{
                  backgroundColor: " #f7f3ea",
                  width: "35px",
                  margin: "auto",
                  borderRadius: "50%",
                  padding: "13px 9px 8px 9px",
                  textIndent: "5px",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIcon className="practice_service_icon_arrow" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Clint Page */}
      <Box>
        <Grid
          container
          sx={{
            textAlign: "center",
            borderTop: "2px solid #efefef",
            borderBottom: "2px solid #efefef",
          }}
        >
          <Grid
            item
            xl={2}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            className="clint_page_img"
          >
            <Box component="img" src={CLINT1}></Box>
          </Grid>
          <Grid
            item
            xl={2}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            className="clint_page_img"
          >
            <Box component="img" src={CLINT2}></Box>
          </Grid>
          <Grid
            item
            xl={2}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            className="clint_page_img"
          >
            <Box component="img" src={CLINT3}></Box>
          </Grid>
          <Grid
            item
            xl={2}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            className="clint_page_img"
          >
            <Box component="img" src={CLINT4}></Box>
          </Grid>
          <Grid
            item
            xl={2}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            className="clint_page_img"
          >
            <Box component="img" src={CLINT5}></Box>
          </Grid>
          <Grid
            item
            xl={2}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            className="clint_page_img"
          >
            <Box component="img" src={CLINT1}></Box>
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
        <Box sx={{ padding: "70px 0px" }}>
          <Grid container maxWidth="md" margin="auto">
            <Grid item xs={12} sx={{ position: "relative" }}>
              <Box component="span" className="e_title">
                Estimate Budget
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Slider
                  aria-label="Restricted values"
                  defaultValue={40}
                  valueLabelFormat={valueLabelFormat}
                  getAriaValueText={valuetext}
                  step={null}
                  valueLabelDisplay="auto"
                  marks={marks}
                />
              </Box>
              <Box
                sx={{
                  display: { md: "none", xs: "block" },
                  height: 300,
                  textAlign: "center",
                }}
              >
                <Slider
                  aria-label="Restricted values"
                  orientation="vertical"
                  defaultValue={40}
                  valueLabelFormat={valueLabelFormat}
                  getAriaValueText={valuetext}
                  step={null}
                  valueLabelDisplay="auto"
                  marks={marks}
                />
              </Box>
            </Grid>
          </Grid>
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
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} px={{ xl: 1 }}>
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

export default Service;
