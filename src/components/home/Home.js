import Expert from "../expert/Expert";
import Course from "../course/Course";
import Article from "../article/Article";
import { NavLink } from "react-router-dom";
import { Button, Container } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="home_welcome">You're Welcome Babies!</h1>
        <p className="home_title">
          Meet Education <br /> Industry Experts
        </p>
        <p className="home_title__under">
          Get 1-on-1 consultations from top experts in the field and improve
          your skills through free educational content.
        </p>
        <Button
          variant="contained"
          size="large"
          style={{
            color: "#8c1c4c",
            fontSize: "20px",
            borderRadius: 10,
            marginTop: 40,
            background: "white",
          }}
        >
          Find experts
        </Button>
      </div>

      <Container>
        <section className="experts">
          <div className="experts_header">
            <div className="text_wrapper">
              <h2 className="experts_title">Featured experts</h2>
              <p className="experts_subtitle">
                Best experts of the motivation industry are here to share their
                experience, consult, and educate.
              </p>
            </div>
            <Button
              variant="outlined"
              style={{
                color: "#8c1c4c",
                border: "1px solid",
                borderRadius: 10,
              }}
              size="large"
            >
              <NavLink to="/teachers">View all experts</NavLink>
            </Button>
          </div>
          <div className="experts_tape">
            <Expert />
            <Expert />
            <Expert />
          </div>
        </section>
      </Container>

      <section className="homeCourses">
        <Container>
          <div className="homeCourses_header">
            <div className="text_wrapper">
              <h2 className="homeCourses_title">Popular courses</h2>
              <p className="homeCourses_subtitle">
                Get fundamental knowledge online and for free.
              </p>
            </div>
            <Button
              variant="outlined"
              style={{
                color: "#fff",
                border: "1px solid",
                borderRadius: 10,
              }}
              size="large"
            >
              <NavLink to="/courses">View all courses</NavLink>
            </Button>
          </div>
        </Container>
        <div className="homeCourses_tape">
          <Course />
          <Course />
          <Course />
        </div>
      </section>

      <section className="blogs">
        <Container>
          <div className="blogs_header">
            <div className="text_wrapper">
              <h2 className="blogs_title">Blogs</h2>
              <p className="blogs_subtitle">
                General knowledge blogs, long reads, glossaries, and overviews -
                check the best and most relevant content on T-Education.
              </p>
            </div>
            <Button
              variant="outlined"
              style={{
                color: "#8c1c4c",
                border: "1px solid",
                borderRadius: 10,
              }}
              size="large"
            >
              <NavLink to="/teachers">View all articles</NavLink>
            </Button>
          </div>
        </Container>
        <div className="blogs_wrapper">
          <Article />
          <Article />
          <Article />
        </div>
      </section>

      <section className="footer">
        <div className="footer_body">
          <div className="footer_company-name">
            <div className="footer_company-title">T-EDUCATION</div>
            <div className="footer_company_small-text">
              T-Education is the platform for sharing experiences in motivation.
              Get personal consultations from top experts in the field and
              improve your skills through free educational content.
            </div>
          </div>

          <div className="footer_menu">
            <div className="footer_sections">
              <div className="footer_sections-header">Sections</div>
              <div className="footer_sections-item">Courses</div>
              <div className="footer_sections-item">Teachers</div>
              <div className="footer_sections-item">Other</div>
            </div>
            <div className="footer_company">
              <div className="footer_company-header">Company</div>
              <div className="footer_company-item">Terms of Use</div>
              <div className="footer_company-item">Privacy Policy</div>
              <div className="footer_company-item">Cookies Policy</div>
            </div>
            <div className="footer_platform">
              <div className="footer_platform-header">Platform</div>
              <div className="footer_platform-item">Career</div>
              <div className="footer_platform-item">FAQ</div>
              <div className="footer_platform-item">Support</div>
            </div>
          </div>

          <Button
            variant="contained"
            size="large"
            style={{
              color: "white",
              fontSize: "16px",
              borderRadius: 10,
              background: "rgb(52, 86, 218)",
            }}
          >
            T-Education for Business
          </Button>
        </div>
        <div className="footer_footer">
          <div className="footer_copyright">
            <span>© 2023, T-Education Inc. All rights reserved.</span>
          </div>
          <div className="footer_social">
            <div className="footer_social_icon">
              <LinkedInIcon fontSize="large"/>
            </div>
            <div className="footer_social_icon">
              <FacebookIcon fontSize="large" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
