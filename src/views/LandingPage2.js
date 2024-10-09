import React from "react";

// reactstrap components
import { Col, Container, Row } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
// import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";

function LandingPage2() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <div
            className="section"
            style={{
              padding: "10px",
              backgroundImage:
                "url(" + require("assets/img/v1_bgFee.png") + ")",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              backgroundPosition: "center",
            }}
            id="conference-fee"
          >
            <Container>
              <Row className="justify-content-center">
                <Col md="12" className="text-center ">
                  <h2 className="title">Conference Fee</h2>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs="auto" className="text-center ">
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Pemakalah Dosen & Umum
                  </h3>
                  <h4 style={{ margin: 0 }}>Rp 500.000</h4>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Non Pemakalah
                  </h3>
                  <h4 style={{ margin: 0 }}>Gratis</h4>
                </Col>
                <Col xs="auto" className="text-center ">
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Pemakalah Mahasiswa (S1 / S2)
                  </h3>
                  <h4 style={{ margin: 0 }}>Rp 250.000</h4>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Pemakalah Mahasiswa ITPLN (S1 / S2)
                  </h3>
                  <h4 style={{ margin: 0 }}>Rp 175.000</h4>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className="section"
            style={{
              padding: "10px",
              // backgroundImage:
              //   "url(" + require("assets/img/bg-focus&scope.png") + ")",
              // backgroundSize: "cover",
              // height: "100%",
              // width: "100%",
              // backgroundPosition: "center",
            }}
            id="conference-fee"
          >
            <Container>
              <Row className="justify-content-center">
                <Col md="12" className="text-center">
                  <h2 className="title">Focus & Scope</h2>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs="auto" md="6" className="text-center">
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Green Contruction
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Renewable Energy
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Sustainable Urban
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Economic Environment
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Clean Energy Technologies
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Distribution Management
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Disaster Mitigation
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>BIG DATA</h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Artificial Intelligence
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Machine Learning
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Building Information Modelling
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Water Resources Engineering and Management
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Regional and Human Development
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Computer Engineering
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Nano Technology
                  </h3>
                </Col>
                <Col xs="auto" md="6" className="text-center">
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Waste Management
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Energi Baru dan Terbarukan (EBT)
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Technology Enterpreneurships
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Eco-Material Infrastructure
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Environmental Management
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Environmental Modelling
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>Smart Grid</h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Control Instruments
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Power Electronic
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>Power System</h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Project Energy
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Risk Management
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Asset Management
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Project Management
                  </h3>

                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Economy and Business of Energy
                  </h3>
                  <h3 style={{ margin: 0, fontWeight: "700" }}>
                    Economy and Social Engineering
                  </h3>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage2;
