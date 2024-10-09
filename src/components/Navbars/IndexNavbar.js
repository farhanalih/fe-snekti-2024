import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top " + navbarColor}
        expand="lg"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
              target="_blank"
              id="navbar-brand"
            >
              <h3 style={{ fontWeight: "bold", margin: 0, color: "#2c2c2c" }}>
                SNEKTI 2024
              </h3>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("how-to")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{ color: "#2c2c2c", cursor: "pointer" }}
                >
                  <i
                    className="now-ui-icons travel_info"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    How to Submit & Payment
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://drive.google.com/file/d/1h6E8t2R4_euo_XWkX3x39BX2W9Q4qGvM/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2c2c2c" }}
                >
                  <i
                    className="now-ui-icons files_paper"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Article Template
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("conference-fee");

                    if (target) {
                      // Get the position of the target element
                      const elementPosition =
                        target.getBoundingClientRect().top + window.pageYOffset;
                      const navbarHeight =
                        document.querySelector(".navbar").offsetHeight; // Adjust for the navbar height

                      // Scroll to the target with an offset for the navbar
                      window.scrollTo({
                        top: elementPosition - navbarHeight, // Subtract the navbar height from the scroll position
                        behavior: "smooth",
                      });
                    }
                  }}
                  style={{ color: "#2c2c2c", cursor: "pointer" }}
                >
                  <i
                    className="now-ui-icons shopping_tag-content"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Conference Fee
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://snekti.jurnal-puslitbangpln.id/submit/index.php/snekti2023/user/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "1px solid #2c2c2c",
                    borderRadius: "15px",
                    color: "#2c2c2c",
                  }}
                >
                  <i
                    className="now-ui-icons files_single-copy-04"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Register
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://snekti.jurnal-puslitbangpln.id/submit/index.php/snekti2023/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "1px solid #2c2c2c",
                    borderRadius: "15px",
                    color: "#2c2c2c",
                  }}
                >
                  <i
                    className="now-ui-icons users_circle-08"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>Login</p>
                </NavLink>
              </NavItem>

              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Components</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-index-navbar"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Upgrade to PRO</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem> */}
              {/* <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
