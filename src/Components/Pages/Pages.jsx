import React from "react";
import "./Pages.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ScrollToTop from "react-scroll-to-top";

// Images
import PropTypes from "prop-types";
import BANNER from "../../Assets/banner.jpg";

// Icons
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LockIcon from "@mui/icons-material/Lock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Email } from "@mui/icons-material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonIcon from "@mui/icons-material/Person";

function Pages() {
  // FAQ Section
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={"span"} variant={"body2"}>
              {children}
            </Typography>
          </Box>
        )}
      </Box>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const tabsChange = (event, newValue) => {
    setValue(newValue);
  };

  const [expanded, setExpanded] = React.useState(false);

  const accordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box>
            <Typography variant="h1" className="main_head">
              Faq Answers
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "8vh",
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
            <Typography className="breadcrumb_active_color">Pages</Typography>
          </Breadcrumbs>
        </Box>
        <Box>
          <Typography variant="h1" className="watermark_head_pages">
            Answers
          </Typography>
        </Box>
      </Box>
      {/* FAQ Section => Frequently Asked Questions */}
      <Box sx={{ padding: "100px 0px" }} className="porfolio_flex">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Tabs
            value={value}
            onChange={tabsChange}
            aria-label="icon label tabs example"
            sx={{ position: "relative" }}
          >
            <Tab label="Payment" icon={<HeadphonesIcon />} {...a11yProps(0)} />
            <Tab
              label="File & Docs"
              icon={<CreditCardIcon />}
              {...a11yProps(1)}
            />
            <Tab label="Refund" icon={<LibraryBooksIcon />} {...a11yProps(2)} />
            <Tab label="Security" icon={<LockIcon />} {...a11yProps(4)} />
            <Tab label="Maneger" icon={<GroupsIcon />} {...a11yProps(5)} />
            <Tab label="Support" icon={<HeadphonesIcon />} {...a11yProps(6)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Grid container maxWidth="lg" margin="auto">
            <Grid
              item
              xl={6}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 3 }}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel1"}
                onChange={accordionChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xl={6}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 3 }}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel2"}
                onChange={accordionChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xl={6}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 3 }}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel3"}
                onChange={accordionChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xl={6}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 3 }}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel4"}
                onChange={accordionChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xl={6}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 3 }}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel5"}
                onChange={accordionChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xl={6}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 3 }}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel6"}
                onChange={accordionChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xl={6}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 3 }}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel7"}
                onChange={accordionChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              xl={6}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 3 }}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel8"}
                onChange={accordionChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid container maxWidth="lg" margin="auto">
            <Grid
              item
              xl={8}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel9"}
                onChange={accordionChange("panel9")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100%", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Grid container maxWidth="lg" margin="auto">
            <Grid
              item
              xl={8}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel8"}
                onChange={accordionChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Grid container maxWidth="lg" margin="auto">
            <Grid
              item
              xl={8}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel8"}
                onChange={accordionChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Grid container maxWidth="lg" margin="auto">
            <Grid
              item
              xl={8}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel8"}
                onChange={accordionChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <Grid container maxWidth="lg" margin="auto">
            <Grid
              item
              xl={8}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel8"}
                onChange={accordionChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <Grid container maxWidth="lg" margin="auto">
            <Grid
              item
              xl={8}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              <Accordion
                expanded={expanded === "panel8"}
                onChange={accordionChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="accordian_head" sx={{ width: "100", flexShrink: 0 }}>
                    What makes you different from other contractors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian_p" sx={{ fontSize: "14px" }}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>{" "}
        </CustomTabPanel>
      </Box>
      {/* FAQ Section => Form Section */}
      <Box sx={{ padding: "100px 0px", backgroundColor: "#F7F3EA" }}>
        <Box sx={{ textAlign: "center" }} px={{ lg: 0, md: 5, sm: 5, xs: 5 }}>
          <Typography variant="h6" className="about_practice">
            <KeyboardDoubleArrowLeftIcon className="mui_icons" /> CONTACT
            <KeyboardDoubleArrowRightIcon className="mui_icons" />
          </Typography>
          <Typography variant="h3" className="about_practice_head">
            Still Don't Get Answers <Box component="br"></Box> Please Tell Here
          </Typography>
        </Box>
        <Box sx={{ padding: "30px 0px" }}>
          <Grid container maxWidth="lg" margin="auto" sx={{ paddingTop: 5 }}>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} px={{ xl: 1 }}>
              <Card className="input_class">
                <Box sx={{ position: "relative", backgroundColor: "#F7F3EA" }}>
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
                <Box sx={{ position: "relative", backgroundColor: "#F7F3EA" }}>
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
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} px={{ xl: 1 }}>
              <Card className="input_class">
                <Box sx={{ position: "relative", backgroundColor: "#F7F3EA" }}>
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

export default Pages;
