import {
  Box,
  Breadcrumbs,
  Button,
  CardContent,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import "./About.css";
import ScrollToTop from "react-scroll-to-top";

// Images
import BANNER from "../../Assets/banner.jpg";
import ABS from "../../Assets/abs1.jpg";
import ABS2 from "../../Assets/abs2.jpg";
import ABS3 from "../../Assets/abs3.jpg";
import MOBILE from "../../Assets/abapp.png";
import LOGO from "../../Assets/company-logo.png";

// Icons
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Email } from "@mui/icons-material";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import LinkIcon from "@mui/icons-material/Link";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const Award = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box>
            <Typography variant="h1" className="main_head">
              About Us
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
            <Typography className="breadcrumb_active_color">About</Typography>
          </Breadcrumbs>
        </Box>
        <Box>
          <Typography variant="h1" className="watermark_head_about">
            About Us
          </Typography>
        </Box>
      </Box>
      {/* About Content */}
      <Box sx={{ padding: "100px 0px 0px 0px" }}>
        <Grid
          container
          maxWidth="lg"
          margin="auto"
          px={{ lg: 0, md: 5, sm: 5, xs: 5 }}
        >
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography variant="caption" className="about_sec_title">
              about us
            </Typography>
            <Typography variant="h3" className="main_sub_head">
              Why You Need <Box component="br"></Box> The Top Lawyers.
            </Typography>
            <Typography variant="h6" className="sub_main_p">
              A full service law firm in{" "}
              <Typography variant="span" sx={{ color: "#b89b5e" }}>
                New York
              </Typography>{" "}
              that has been recognised internationally with specialisation in{" "}
              <Typography variant="span" sx={{ textDecoration: "underline" }}>
                Commercial
              </Typography>
            </Typography>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Box className="about_details_text">
                BDLP is one of the leading multi-disciplinary law firms in
                Dhaka, Bangladesh ma naged by lawyers in and around Dhaka. The
                law firm is one of the top law firms in Dhaka and represents
                both foreign and local clients. The firm operates as a
                partnership of several leading practicing follow the leading
                multi-disciplinary .
              </Box>
            </Box>
            <List
              sx={{ display: "flex", flexWrap: "nowrap" }}
              className="about_list_item"
            >
              <ListItem>
                <FileDownloadDoneIcon className="about_list_item_icon" />
                <Box
                  component="span"
                  px={{ xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
                >
                  Serving 13 years
                </Box>
              </ListItem>
              <ListItem>
                <FileDownloadDoneIcon className="about_list_item_icon" />
                <Box
                  component="span"
                  sx={{ flexWrap: "nowrap" }}
                  px={{ xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
                >
                  Practical Solution
                </Box>
              </ListItem>
            </List>
            <Box sx={{ paddingTop: 5 }}>
              <Button
                variant="contained"
                size="large"
                className="primary-bg-color white-color btn_animation"
                sx={{ padding: "20px 42px 18px 45px" }}
              >
                LEARN MORE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* About Service */}
      <Box sx={{ padding: "100px 0px 0px 0px" }}>
        <Grid
          container
          maxWidth="lg"
          margin="auto"
          px={{ lg: 0, md: 0, sm: 0, xs: 0 }}
        >
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            px={{ xl: 1, lg: 1, md: 1, sm: 1 }}
            pt={{ sm: 0, xs: 3 }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                className="about_card img_responsive"
                component="img"
                src={ABS}
              ></Box>
              <Box sx={{ color: "#fff" }} className="about_card_content">
                <Typography variant="subtitle1">Free Consultation</Typography>
                <Typography variant="h5">
                  We bring each client a<Box component="br"></Box> combination
                  of deep
                </Typography>
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
            px={{ xl: 1, lg: 1, md: 1, sm: 1 }}
            pt={{ sm: 0, xs: 3 }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                className="about_card img_responsive"
                component="img"
                src={ABS2}
              ></Box>
              <Box sx={{ color: "#fff" }} className="about_card_content">
                <Typography variant="subtitle1">LEGAL INFORMATION</Typography>
                <Typography variant="h5">
                  Injury to a spouse or<Box component="br"></Box> cohabitant,
                  criminal
                </Typography>
                <Typography
                  variant="button"
                  sx={{ color: "#b5b5b5", fontWeight: "700" }}
                >
                  Case Study
                  <Box component="span" px={{ xl: 1 }}>
                    <ArrowForwardIcon sx={{ verticalAlign: "middle" }} />
                  </Box>
                </Typography>
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
            px={{ xl: 1, lg: 1, md: 1, sm: 1 }}
            pt={{ md: 0, sm: 5, xs: 3 }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                className="about_card img_responsive"
                component="img"
                src={ABS3}
              ></Box>
              <Box sx={{ color: "#fff" }} className="about_card_content">
                <Typography variant="subtitle1">NEWSLETTER</Typography>
                <Typography variant="h5">Get Every Updates</Typography>
                <Box
                  component="input"
                  placeholder="Enter your email address"
                  className="newsLetter_input"
                ></Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: "40px",
                    bottom: "6px",
                  }}
                >
                  <Email sx={{ color: "#b89b5e" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* About Call Action */}
      <Box sx={{ padding: "100px 0px 0px 0px" }}>
        <Box
          className="about_call_action"
          sx={{
            backgroundImage: `url(${BANNER})`,
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            backgroundAttachment: "fixed",
          }}
        >
          <Box>
            <Typography variant="caption" className="about_sec_title">
              Call to action
            </Typography>
            <Typography variant="h2" className="about_call_action_text">
              Get Free Consultation
            </Typography>
          </Box>
          <Box>
            <Box>
              <Button
                variant="contained"
                size="large"
                className="primary-bg-color white-color btn_animation"
                sx={{ padding: "20px 38px 18px 40px" }}
              >
                Make appointament
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* About Practice */}
      <Box sx={{ padding: "100px 0px 0px 0px" }}>
        <Box sx={{ textAlign: "center" }} px={{ lg: 0, md: 5, sm: 5, xs: 5 }}>
          <Typography variant="h6" className="about_practice">
            <KeyboardDoubleArrowLeftIcon className="mui_icons" /> SERVICES{" "}
            <KeyboardDoubleArrowRightIcon className="mui_icons" />
          </Typography>
          <Typography variant="h3" className="about_practice_head">
            Our Practice Area
          </Typography>
          <Grid
            container
            maxWidth="lg"
            margin="auto"
            sx={{ padding: "60px 0px" }}
          >
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  color: "#555555",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <Box
                  sx={{
                    flex: "1 0 auto",
                    margin: "auto",
                  }}
                >
                  <SettingsAccessibilityIcon
                    sx={{ fontSize: "60px", color: "#b89b5e" }}
                  />
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      className="about_practice_sub_head"
                    >
                      Murder Case
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    className="about_practice_text"
                  >
                    Lorem ipsum dolor sit amet, consect etur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  color: "#555555",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <Box
                  sx={{
                    flex: "1 0 auto",
                    margin: "auto",
                  }}
                >
                  <DirectionsCarFilledIcon
                    sx={{ fontSize: "60px", color: "#b89b5e" }}
                  />
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      className="about_practice_sub_head"
                    >
                      Driving Crimes
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    className="about_practice_text"
                  >
                    Lorem ipsum dolor sit amet, consect etur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  color: "#555555",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <Box
                  sx={{
                    flex: "1 0 auto",
                    margin: "auto",
                  }}
                >
                  <LocalFloristIcon
                    sx={{ fontSize: "60px", color: "#b89b5e" }}
                  />
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      className="about_practice_sub_head"
                    >
                      Drug Crimes
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    className="about_practice_text"
                  >
                    Lorem ipsum dolor sit amet, consect etur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={6}
              xs={12}
              pt={{ xl: 5, lg: 5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  color: "#555555",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <Box
                  sx={{
                    flex: "1 0 auto",
                    margin: "auto",
                  }}
                >
                  <PersonSearchIcon
                    sx={{ fontSize: "60px", color: "#b89b5e" }}
                  />
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      className="about_practice_sub_head"
                    >
                      Personal Injury
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    className="about_practice_text"
                  >
                    Lorem ipsum dolor sit amet, consect etur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={6}
              xs={12}
              pt={{ xl: 5, lg: 5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  color: "#555555",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <Box
                  sx={{
                    flex: "1 0 auto",
                    margin: "auto",
                  }}
                >
                  <LinkIcon sx={{ fontSize: "60px", color: "#b89b5e" }} />
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      className="about_practice_sub_head"
                    >
                      LinkIcon
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    className="about_practice_text"
                  >
                    Lorem ipsum dolor sit amet, consect etur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={6}
              xs={12}
              pt={{ xl: 5, lg: 5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  color: "#555555",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <Box
                  sx={{
                    flex: "1 0 auto",
                    margin: "auto",
                  }}
                >
                  <RestaurantMenuIcon
                    sx={{ fontSize: "60px", color: "#b89b5e" }}
                  />
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      className="about_practice_sub_head"
                    >
                      Fraud Case
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    className="about_practice_text"
                  >
                    Lorem ipsum dolor sit amet, consect etur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* App Download */}
      <Box sx={{ padding: "80px 0px 0px 0px", backgroundColor: "#eee" }}>
        <Grid
          container
          maxWidth="lg"
          margin="auto"
          px={{ lg: 0, md: 5, sm: 5, xs: 5 }}
        >
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography variant="h3" className="about_practice_head">
              Download Our App
            </Typography>
            <Box sx={{ padding: "35px 0px 40px" }}>
              <Box className="about_details_text">
                BDLP is one of the leading multi-disciplinary law firms in
                Dhaka, Bangladesh ma naged by lawyers in and around Dhaka. The
                law firm is one of the top law firms in Dhaka and represents
                both foreign and local clients. The firm operates as a
                partnership of several leading practicing follow the leading
                multi-disciplinary .
              </Box>
            </Box>
            <Stack spacing={2} direction="row" className="stack_Btn">
              <Button
                variant="contained"
                size="large"
                className="primary-bg-color white-color"
                sx={{ padding: "20px 38px 18px 40px", gap: 1 }}
              >
                <ShopIcon />
                Play Store
              </Button>
              <Button
                variant="contained"
                size="large"
                className="secondary-bg-color white-color stack_Btn_2"
                sx={{ padding: "20px 38px 18px 40px", gap: 1 }}
              >
                <AppleIcon /> Apple Store
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            pt={{ md: 0, xs: 5 }}
            sx={{ display: { md: "block", sm: "none" } }}
          >
            <Box sx={{ textAlign: "f" }}>
              <Box
                component="img"
                src={MOBILE}
                className="img_responsive"
                sx={{ paddingInlineStart: "50px" }}
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* About Award */}
      <Box sx={{ padding: "100px 0px" }}>
        <Box sx={{ typography: "body1", overflow: "hidden" }}>
          <Slider {...Award}>
            <Box>
              <Box component="img" src={LOGO} sx={{ margin: "auto" }}></Box>
            </Box>
            <Box>
              <Box component="img" src={LOGO} sx={{ margin: "auto" }}></Box>
            </Box>
            <Box>
              <Box component="img" src={LOGO} sx={{ margin: "auto" }}></Box>
            </Box>
            <Box>
              <Box component="img" src={LOGO} sx={{ margin: "auto" }}></Box>
            </Box>
            <Box>
              <Box component="img" src={LOGO} sx={{ margin: "auto" }}></Box>
            </Box>
          </Slider>
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

export default About;
