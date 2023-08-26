import "./Home.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

// Assets
import BANNER from "../../Assets/banner.jpg";
import SIDEBG from "../../Assets/s-side.png";
// import BANNERBG from "../../Assets/c-bg.jpg";
import AB from "../../Assets/ab.jpg";
import PRT1 from "../../Assets/prt1.jpg";
import PRT2 from "../../Assets/prt2.jpg";
import PRT3 from "../../Assets/prt3.jpg";
import PRT4 from "../../Assets/prt4.jpg";
import PRT5 from "../../Assets/prt5.jpg";
import PRT6 from "../../Assets/prt6.jpg";
import PRT7 from "../../Assets/prt7.jpg";
import PRT8 from "../../Assets/prt8.jpg";
import PRT9 from "../../Assets/prt9.jpg";
import PRT10 from "../../Assets/prt10.jpg";
import TESTIMONIAL from "../../Assets/tst1.jpg";
import TESTIMONIAL2 from "../../Assets/tst2.jpg";
import LAW from "../../Assets/law.png";
import FAMILY from "../../Assets/family.png";
import COUCRT from "../../Assets/courts.png";
import BURGLAR from "../../Assets/burglar.png";
import SECRITY from "../../Assets/cyber-security.png";
import SHUFFLE from "../../Assets/shuffle.png";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

// MUI Icons
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GavelIcon from "@mui/icons-material/Gavel";
import BalanceIcon from "@mui/icons-material/Balance";
import DoneIcon from "@mui/icons-material/Done";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import VoiceOverOffIcon from "@mui/icons-material/VoiceOverOff";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import ShuffleIcon from "@mui/icons-material/Shuffle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WorkIcon from "@mui/icons-material/Work";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "react-scroll-to-top";
function Home() {
  useEffect(() => {
    AOS.init();
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const testimonial = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const NumberCountingAnimation = () => {
    const [count, setCount] = useState(0);
    const endValue = 1000;
    const duration = 2000; // in milliseconds
    const frameRate = 60; // frames per second

    useEffect(() => {
      const frames = Math.ceil((duration / 1000) * frameRate);
      const increment = endValue / frames;
      let currentCount = 0;

      const interval = setInterval(() => {
        currentCount += increment;
        setCount(Math.min(Math.floor(currentCount), endValue));
      }, 1000 / frameRate);

      return () => clearInterval(interval);
    }, []);

    return (
      <Box>
        <Typography variant="h3" className="count_count">
          {count}
        </Typography>
      </Box>
    );
  };
  return (
    <Box>
      {/* Banner Section */}
      <Box
        sx={{
          backgroundImage: `url(${BANNER})`,
          backgroundSize: "cover",
          height: "90vh",
        }}
      >
        <Grid
          container
          maxWidth="lg"
          margin="auto"
          sx={{ color: "#fff" }}
          pt={{ xl: 15, md: 0, sm: 3, xs: 15 }}
        >
          <Grid
            item
            xl={6}
            lg={6}
            pt={{ xl: 10, lg: 20, md: 25, sm: 20, xs: 5 }}
            data-aos="fade-right"
            data-aos-duration="3000"
            px={{ lg: 0, md: 5, sm: 5, xs: 2 }}
          >
            <Typography variant="h6" className="home_sub_head">
              Legal solutions for Business
            </Typography>
            <Typography
              variant="h3"
              className="home_head"
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              We are recognized <Box component="br"></Box> by honorable awards
            </Typography>
            <Typography
              className="home_sub_head"
              variant="subtitle1"
              pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            >
              Our specialists share skills and resources to obtain optimal
              results for our new clients A full service law firm in New York.
            </Typography>
            <Box pt={{ xl: 5, lg: 8, md: 8, sm: 8, xs: 5 }}>
              <Button
                variant="contained"
                size="large"
                className="primary-bg-color white-color btn_animation"
                sx={{ padding: "15px 20px" }}
              >
                OUR EXPERT TEAM
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            sx={{ display: { lg: "block", xs: "none" } }}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <Box
              component="img"
              src={SIDEBG}
              pt={{ xl: 3, lg: 21 }}
              height="70vh"
            ></Box>
          </Grid>
        </Grid>
      </Box>
      {/* Feature Section */}
      <Box sx={{ marginTop: -5 }}>
        <Grid container maxWidth="lg" margin="auto">
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            px={{ xl: 2, lg: 2, md: 3, sm: 3, xs: 2 }}
            pt={{ md: 0, sm: 8, xs: 8 }}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Card className="feature_card">
              <CardMedia>
                <AccountBalanceIcon
                  sx={{ color: "#c6ac82", fontSize: "50px" }}
                />
              </CardMedia>
              <CardContent>
                <Typography variant="h6">High ethical standard</Typography>
                <Typography
                  variant="body1"
                  sx={{ paddingTop: 2, color: "#bebebe" }}
                >
                  A full service law firm in London that has been recognised
                  internationally with specialisation in Commercial.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            px={{ xl: 2, lg: 2, md: 3, sm: 3, xs: 2 }}
            pt={{ md: 0, sm: 3, xs: 3 }}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Card className="feature_card">
              <CardMedia>
                <GavelIcon sx={{ color: "#c6ac82", fontSize: "50px" }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h6">Compliant HR policy </Typography>
                <Typography
                  variant="body1"
                  sx={{ paddingTop: 2, color: "#bebebe" }}
                >
                  A full service law firm in London that has been recognised
                  internationally with specialisation in Commercial.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            sx={{ zIndex: 1 }}
            px={{ xl: 2, lg: 2, md: 3, sm: 3, xs: 2 }}
            pt={{ md: 0, sm: 3, xs: 3 }}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Card className="feature_card">
              <CardMedia>
                <BalanceIcon sx={{ color: "#c6ac82", fontSize: "50px" }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h6">Specialised lawyers </Typography>
                <Typography
                  variant="body1"
                  sx={{ paddingTop: 2, color: "#bebebe" }}
                >
                  A full service law firm in London that has been recognised
                  internationally with specialisation in Commercial.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/* Home About Section */}
      <Box sx={{ padding: "100px 0px", overflow: "hidden" }}>
        <Grid container maxWidth="lg" margin="auto">
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <Box
              component="img"
              src={AB}
              width="-webkit-fill-available"
              p={{ md: 2, sm: 2, xs: 2 }}
              className="hover_rotate"
            ></Box>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{ padding: 2 }}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <Box>
              <Box>
                <Typography variant="h3" className="homePageHead">
                  We are Professional Law Firm in{" "}
                  <Box component="span" sx={{ color: "#c6ac82" }}>
                    USA
                  </Box>
                  .
                </Typography>
              </Box>
              <Box sx={{ paddingTop: 4 }}>
                <Typography variant="body1" color="#343434">
                  BDLP is one of the leading multi-disciplinary law firms in
                  Dhaka, Bangladesh managed by lawyers in and around Dhaka. The
                  law firm is one of the top law firms in Dhaka and represents
                  both foreign and local clients. The firm operates as a
                  partnership of several leading practicing follow the leading
                  multi-disciplinary .
                </Typography>
              </Box>
              <Box>
                <List>
                  <ListItem sx={{ padding: "10px 0px 0px 0px" }}>
                    <Box px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                      <DoneIcon sx={{ color: "#c6ac82" }} />
                    </Box>
                    Physical and online resources
                  </ListItem>
                  <ListItem sx={{ padding: "10px 0px 0px 0px" }}>
                    <Box px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                      <DoneIcon sx={{ color: "#c6ac82" }} />
                    </Box>
                    Probably the largest law firm
                  </ListItem>
                  <ListItem sx={{ padding: "10px 0px 0px 0px" }}>
                    <Box px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                      <DoneIcon sx={{ color: "#c6ac82" }} />
                    </Box>
                    Practical Commercial Solution
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Practice Section */}
      <Box sx={{ padding: "100px 0px", backgroundColor: "#eee" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" className="homePageHead">
            We assign{" "}
            <Box component="span" sx={{ color: "#c6ac82" }}>
              {" "}
              30+{" "}
            </Box>{" "}
            practice
            <Box component="br"></Box> areas for clients.
          </Typography>
        </Box>
        <Grid container maxWidth="lg" margin="auto" sx={{ paddingTop: 5 }}>
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            data-aos="fade-up"
            data-aos-duration="3000"
            px={{ lg: 0, md: 2, sm: 3, xs: 3 }}
            pt={{ md: 2, sm: 3, xs: 3 }}
          >
            <Card className="practice_card">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" className="practice_card_head">
                  Family & Child <Box component="br"></Box> Law service
                </Typography>
                <CardMedia>
                  <Box
                    component="img"
                    src={FAMILY}
                    className="rotate_img"
                    height="50px"
                  ></Box>
                  {/* <Diversity3Icon sx={{ color: "#c6ac82", fontSize: "50px" }} /> */}
                </CardMedia>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ paddingTop: 2 }}>
                  A full service law firm in London that has been recognised
                  internationally with specialisation in Commercial.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            data-aos="fade-up"
            data-aos-duration="3000"
            px={{ xl: 3, lg: 2, md: 2, sm: 3, xs: 3 }}
            pt={{ md: 2, sm: 3, xs: 3 }}
          >
            <Card className="practice_card">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" className="practice_card_head">
                  Corporate and <Box component="br"></Box> Finance Law
                </Typography>
                <CardMedia>
                  {/* <AccountBalanceIcon
                    sx={{ color: "#c6ac82", fontSize: "50px" }}
                  /> */}
                  <Box
                    component="img"
                    src={COUCRT}
                    className="rotate_img"
                    height="50px"
                  ></Box>
                </CardMedia>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ paddingTop: 2 }}>
                  A full service law firm in London that has been recognised
                  internationally with specialisation in Commercial.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            data-aos="fade-up"
            data-aos-duration="3000"
            px={{ xl: 0, lg: 0, md: 2, sm: 3, xs: 3 }}
            pt={{ xl: 2, lg: 2, md: 2, sm: 3, xs: 3 }}
          >
            <Card className="practice_card">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" className="practice_card_head">
                  rxer Crime Law <Box component="br"></Box> services
                </Typography>
                <CardMedia>
                  {/* <VoiceOverOffIcon
                    sx={{ color: "#c6ac82", fontSize: "50px" }}
                  /> */}
                  <Box
                    component="img"
                    src={BURGLAR}
                    className="rotate_img"
                    height="50px"
                  ></Box>
                </CardMedia>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ paddingTop: 2 }}>
                  A full service law firm in London that has been recognised
                  internationally with specialisation in Commercial.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            data-aos="fade-up"
            data-aos-duration="3000"
            pt={{ xl: 4, lg: 3, md: 2, sm: 3, xs: 3 }}
            px={{ lg: 0, md: 2, sm: 3, xs: 3 }}
          >
            <Card className="practice_card">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" className="practice_card_head">
                  Cross Border <Box component="br"></Box> Law service
                </Typography>
                <CardMedia>
                  {/* <AdminPanelSettingsIcon
                    sx={{ color: "#c6ac82", fontSize: "50px" }}
                  /> */}
                  <Box
                    component="img"
                    src={SECRITY}
                    className="rotate_img"
                    height="50px"
                  ></Box>
                </CardMedia>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ paddingTop: 2 }}>
                  A full service law firm in London that has been recognised
                  internationally with specialisation in Commercial.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            data-aos="fade-up"
            data-aos-duration="3000"
            px={{ xl: 3, lg: 2, md: 2, sm: 3, xs: 3 }}
            pt={{ xl: 4, lg: 3, md: 2, sm: 3, xs: 3 }}
          >
            <Card className="practice_card">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" className="practice_card_head">
                  Foreign Business Investment law
                </Typography>
                <CardMedia>
                  <Box
                    component="img"
                    src={LAW}
                    className="rotate_img"
                    height="50px"
                  ></Box>
                  {/* <ShuffleIcon sx={{ color: "#c6ac82", fontSize: "50px" }} /> */}
                </CardMedia>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ paddingTop: 2 }}>
                  A full service law firm in London that has been recognised
                  internationally with specialisation in Commercial.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            data-aos="fade-up"
            data-aos-duration="3000"
            px={{ xl: 0, lg: 0, md: 2, sm: 3, xs: 3 }}
            pt={{ xl: 4, lg: 3, md: 2, sm: 3, xs: 3 }}
          >
            <Card className="practice_card">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" className="practice_card_head">
                  Cyber Crime <Box component="br"></Box> Law service
                </Typography>
                <CardMedia>
                  {/* <GavelIcon sx={{ color: "#c6ac82", fontSize: "50px" }} /> */}
                  <Box
                    component="img"
                    src={SHUFFLE}
                    className="rotate_img"
                    height="50px"
                  ></Box>
                </CardMedia>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ paddingTop: 2 }}>
                  A full service law firm in London that has been recognised
                  internationally with specialisation in Commercial.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Box
          sx={{ paddingTop: 5, textAlign: "center" }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Button
            variant="contained"
            size="large"
            className="primary-bg-color white-color btn_animation"
            sx={{ padding: "15px 20px" }}
          >
            More Services
          </Button>
        </Box>
      </Box>
      {/* Portfolio Section */}
      <Box sx={{ padding: "100px 0px 50px 0px", overflow: "hidden" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" className="homePageHead">
            We have shown Our Resent
            <Box component="br"></Box>
            <Box component="span" sx={{ color: "#c6ac82" }}>
              Case Studies.
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{ typography: "body1", paddingTop: 5 }}
          className="carousel-container"
        >
          <Slider {...settings}>
            <Box className="carousel-item">
              <Box component="img" src={PRT1} sx={{ margin: "auto" }}></Box>
              <Box className="overlay">
                <Box data-aos="fade-left" data-aos-duration="3000">
                  <Typography variant="caption" className="about_sec_title">
                    criminal case
                  </Typography>
                  <Typography variant="h6">Donald Car Case</Typography>
                </Box>
                <Box
                  className="portfolio_icon_box"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item ">
              <Box component="img" src={PRT2} sx={{ margin: "auto" }}></Box>
              <Box className="overlay">
                <Box>
                  <Typography variant="caption" className="about_sec_title">
                    criminal case
                  </Typography>
                  <Typography variant="h6">Donald Car Case</Typography>
                </Box>
                <Box className="portfolio_icon_box">
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item">
              <Box component="img" src={PRT3} sx={{ margin: "auto" }}></Box>
              <Box className="overlay">
                <Box>
                  <Typography variant="caption" className="about_sec_title">
                    criminal case
                  </Typography>
                  <Typography variant="h6">Donald Car Case</Typography>
                </Box>
                <Box className="portfolio_icon_box">
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item">
              <Box component="img" src={PRT4} sx={{ margin: "auto" }}></Box>
              <Box className="overlay">
                <Box>
                  <Typography variant="caption" className="about_sec_title">
                    criminal case
                  </Typography>
                  <Typography variant="h6">Donald Car Case</Typography>
                </Box>
                <Box className="portfolio_icon_box">
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item">
              <Box component="img" src={PRT5} sx={{ margin: "auto" }}></Box>
              <Box className="overlay">
                <Box>
                  <Typography variant="caption" className="about_sec_title">
                    criminal case
                  </Typography>
                  <Typography variant="h6">Donald Car Case</Typography>
                </Box>
                <Box className="portfolio_icon_box">
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item">
              <Box component="img" src={PRT6} sx={{ margin: "auto" }}></Box>
              <Box className="overlay">
                <Box>
                  <Typography variant="caption" className="about_sec_title">
                    criminal case
                  </Typography>
                  <Typography variant="h6">Donald Car Case</Typography>
                </Box>
                <Box className="portfolio_icon_box">
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item">
              <Box component="img" src={PRT7} sx={{ margin: "auto" }}></Box>
              <Box className="overlay">
                <Box>
                  <Typography variant="caption" className="about_sec_title">
                    criminal case
                  </Typography>
                  <Typography variant="h6">Donald Car Case</Typography>
                </Box>
                <Box className="portfolio_icon_box">
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item">
              <Box component="img" src={PRT8} sx={{ margin: "auto" }}></Box>
              <Box className="overlay">
                <Box>
                  <Typography variant="caption" className="about_sec_title">
                    criminal case
                  </Typography>
                  <Typography variant="h6">Donald Car Case</Typography>
                </Box>
                <Box className="portfolio_icon_box">
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item">
              <Box component="img" src={PRT9} sx={{ margin: "auto" }}></Box>
              <Box className="overlay">
                <Box>
                  <Typography variant="caption" className="about_sec_title">
                    criminal case
                  </Typography>
                  <Typography variant="h6">Donald Car Case</Typography>
                </Box>
                <Box className="portfolio_icon_box">
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item">
              <Box component="img" src={PRT10} sx={{ margin: "auto" }}></Box>
              <Box className="overlay">
                <Box>
                  <Typography variant="caption" className="about_sec_title">
                    criminal case
                  </Typography>
                  <Typography variant="h6">Donald Car Case</Typography>
                </Box>
                <Box className="portfolio_icon_box">
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
          </Slider>
        </Box>
      </Box>
      {/* Counter Section */}
      <Box sx={{ padding: "100px 0px 0px 0px", textAlign: "center" }}>
        <Box
          sx={{
            backgroundImage: `url(${BANNER})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="counter_section"
        >
          <Grid
            container
            maxWidth="lg"
            className="counter_grid"
            sx={{ margin: "auto", color: "#fff" }}
          >
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <Box sx={{ position: "relative" }}>
                <Box className="count_icon_1">
                  <ThumbUpOffAltIcon className="count_icon" />
                </Box>
                <NumberCountingAnimation />
                <Typography variant="h6" className="count_head">
                  Satisfied Customers
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <Box sx={{ position: "relative" }} pt={{ sm: 0, xs: 6 }}>
                <Box className="count_icon_2">
                  <ChatBubbleOutlineIcon className="count_icon" />
                </Box>
                <NumberCountingAnimation />
                <Typography variant="h6" className="count_head">
                  Consulteds
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <Box
                sx={{ position: "relative" }}
                pt={{ lg: 0, md: 5, sm: 5, xs: 6 }}
              >
                <Box className="count_icon_3">
                  <LightbulbIcon className="count_icon" />
                </Box>
                <NumberCountingAnimation />
                <Typography variant="h6" className="count_head">
                  Satisfied Customers
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <Box
                sx={{ position: "relative" }}
                pt={{ lg: 0, md: 5, sm: 5, xs: 6 }}
              >
                <Box className="count_icon_4">
                  <WorkIcon className="count_icon" />
                </Box>
                <NumberCountingAnimation />
                <Typography variant="h6" className="count_head">
                  Satisfied Customers
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Testimonial Section */}
      <Box
        sx={{ padding: "100px 220px", overflow: "hidden" }}
        className="testimonial_section"
      >
        <Box sx={{ textAlign: "center", paddingBottom: "100px" }}>
          <Typography variant="h3" className="homePageHead">
            See What Out Happy
            <Box component="br"></Box>
            <Box component="span" sx={{ color: "#c6ac82" }}>
              Clients
            </Box>{" "}
            Says
          </Typography>
        </Box>
        <Slider {...testimonial}>
          <Box className="portfolio_Card">
            <Box
              sx={{
                backgroundImage: `url(${TESTIMONIAL})`,
                height: "30vh",
                width: "30vw",
                backgroundSize: "cover",
              }}
            >
              <FormatQuoteIcon sx={{ fontSize: 100, color: "#fff" }} />
            </Box>
            <Box pl={{ xl: 5, lg: 5 }}>
              <Typography variant="h6" className="testimonial_card_head">
                Nobilt Gilt
              </Typography>
              <Typography
                variant="subtitle2"
                className="testimonial_card_italic"
              >
                Consulting Manager
              </Typography>
              <Typography variant="body2" className="testimonial_card_p">
                sum dolor sit amet consectetur toward adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </Typography>
            </Box>
          </Box>
          <Box className="portfolio_Card">
            <Box
              sx={{
                backgroundImage: `url(${TESTIMONIAL2})`,
                height: "30vh",
                width: "30vw",
                backgroundSize: "cover",
              }}
            >
              <FormatQuoteIcon sx={{ fontSize: 100, color: "#fff" }} />
            </Box>
            <Box pl={{ xl: 5, lg: 5 }}>
              <Typography variant="h6" className="testimonial_card_head">
                Nobilt Gilt
              </Typography>
              <Typography
                variant="subtitle2"
                className="testimonial_card_italic"
              >
                Consulting Manager
              </Typography>
              <Typography variant="body2" className="testimonial_card_p">
                sum dolor sit amet consectetur toward adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </Typography>
            </Box>
          </Box>
          <Box className="portfolio_Card">
            <Box
              sx={{
                backgroundImage: `url(${TESTIMONIAL})`,
                height: "30vh",
                width: "30vw",
                backgroundSize: "cover",
              }}
            >
              <FormatQuoteIcon sx={{ fontSize: 100, color: "#fff" }} />
            </Box>
            <Box pl={{ xl: 5, lg: 5 }}>
              <Typography variant="h6" className="testimonial_card_head">
                Nobilt Gilt
              </Typography>
              <Typography
                variant="subtitle2"
                className="testimonial_card_italic"
              >
                Consulting Manager
              </Typography>
              <Typography variant="body2" className="testimonial_card_p">
                sum dolor sit amet consectetur toward adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </Typography>
            </Box>
          </Box>
          <Box className="portfolio_Card">
            <Box
              sx={{
                backgroundImage: `url(${TESTIMONIAL2})`,
                height: "30vh",
                width: "30vw",
                backgroundSize: "cover",
              }}
            >
              <FormatQuoteIcon sx={{ fontSize: 100, color: "#fff" }} />
            </Box>
            <Box pl={{ xl: 5, lg: 5 }}>
              <Typography variant="h6" className="testimonial_card_head">
                Nobilt Gilt
              </Typography>
              <Typography
                variant="subtitle2"
                className="testimonial_card_italic"
              >
                Consulting Manager
              </Typography>
              <Typography variant="body2" className="testimonial_card_p">
                sum dolor sit amet consectetur toward adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </Typography>
            </Box>
          </Box>
        </Slider>
      </Box>
      {/* Contact Section */}
      <Box sx={{ padding: "0px 0px" }}>
        <Box
          sx={{
            backgroundImage: `url(${BANNER})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            display: "flex",
            color: "#fff",
          }}
          className="contact_section"
        >
          <Grid container maxWidth="lg" sx={{ margin: "auto" }}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ padding: "80px 0px" }}>
                <Typography variant="h5">Free Consultion</Typography>
                <Box sx={{ paddingTop: 5 }}>
                  <Box sx={{ display: "flex", cursor: "pointer" }}>
                    <LocationOnIcon
                      sx={{
                        verticalAlign: "middle",
                        paddingTop: "12px",
                      }}
                    />
                    <Box
                      component="p"
                      sx={{ color: "#fff" }}
                      px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                    >
                      Address: 309, New Cavendish St, EC1Y 3WK
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", cursor: "pointer" }}>
                    <CallIcon
                      sx={{
                        verticalAlign: "middle",
                        paddingTop: "12px",
                      }}
                    />
                    <Box
                      component="p"
                      sx={{ color: "#fff" }}
                      px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                    >
                      0400 20778972
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", cursor: "pointer" }}>
                    <MailOutlineIcon
                      sx={{
                        verticalAlign: "middle",
                        paddingTop: "15px",
                      }}
                    />
                    <Box
                      component="p"
                      sx={{ color: "#fff" }}
                      px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                    >
                      polpo@traxagency.co.au
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ backgroundColor: "#fff", padding: 5 }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  sx={{ marginTop: 5 }}
                  label="Mail Address"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  sx={{ marginTop: 5 }}
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  sx={{ marginTop: 5 }}
                  label="Message"
                  variant="outlined"
                  rows={6}
                  multiline
                  fullWidth
                ></TextField>
                <Button
                  variant="contained"
                  startIcon={<SendIcon />}
                  sx={{ marginTop: 5 }}
                  fullWidth
                  className="primary-bg-color form_btn"
                >
                  SUBMIT NOW
                </Button>
              </Box>
            </Grid>
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

export default Home;
