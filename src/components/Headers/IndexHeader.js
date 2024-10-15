/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button, Row, Col } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/v2_heroBanner.png") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logo-snekti-2024.png")}
              width={"80%"}
              style={{ marginTop: "148px" }}
            ></img>
            <h2
              style={{
                fontWeight: "bold",
                marginTop: "16px",
                color: "#61605e",
              }}
            >
              Renewable Energy Integration In Green Infrastructure : A Pathway
              To Sustainable Development Goals (SDGS)
            </h2>
            {/* <h4
              style={{
                fontWeight: "800",
                margin: 0,
                border: "solid 2px #61605e",
                borderRadius: "20px",
                display: "inline-block",
                padding: "12px",
                color: "#61605e",
              }}
            >
              Wednesday, 11 December 2024
            </h4> */}
            <div>
              <Button
                className="btn-round"
                type="button"
                style={{
                  backgroundColor: "#545454",
                  fontSize: "24px",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={() =>
                  window.open(
                    "https://snekti.jurnal-puslitbangpln.id/submit/index.php/snekti2023/login",
                    "_blank"
                  )
                }
              >
                Submit Your Paper
              </Button>
            </div>
            <div>
              <h2
                style={{
                  fontWeight: "bold",
                  marginTop: "16px",
                  marginBottom: 0,
                  color: "#61605e",
                }}
              >
                Timeline
              </h2>
              <div style={{ textAlign: "center" }}>
                <h3
                  style={{
                    margin: 0,
                    color: "#2c2c2c",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Submit abstract</span> :
                  30 September 2024 - 3 November 2024
                </h3>
                <h3
                  style={{
                    margin: 0,
                    color: "#2c2c2c",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Submit full paper</span>{" "}
                  : 1 October 2024 - 25 November 2024
                </h3>
                <h3
                  style={{
                    margin: 0,
                    color: "#2c2c2c",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Seminar & Parallel Session (Hybrid)
                  </span>
                  : 11 December 2024
                </h3>
                <h3
                  style={{
                    margin: 0,
                    color: "#2c2c2c",
                    fontWeight: "bold",
                  }}
                >
                  <i
                    className="now-ui-icons location_pin"
                    style={{ fontSize: "24px", fontWeight: "bold" }}
                  ></i>
                  Institut Teknologi PLN & Zoom
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
