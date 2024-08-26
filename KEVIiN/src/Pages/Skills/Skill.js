import { Col, Container, Row } from "react-bootstrap";
import { BsPatchCheck } from "react-icons/bs";
import "./Skill.css";
function Skill() {
  const fronts = [
    {
      id: 1,
      icon: <BsPatchCheck />,
      tools: "Html",
      desc: "Basic",
    },
    {
      id: 2,
      icon: <BsPatchCheck />,
      tools: "Css",
      desc: "Advance",
    },
    {
      id: 3,
      icon: <BsPatchCheck />,
      tools: "javascript",
      desc: "intermediate",
    },
  ];
  const frontdos = [
    {
      id: 4,
      icon: <BsPatchCheck />,
      tools: "Bootstrap",
      desc: "intermediate",
    },
    {
      id: 5,
      icon: <BsPatchCheck />,
      tools: "Git",
      desc: "intermediate",
    },
    {
      id: 6,
      icon: <BsPatchCheck />,
      tools: "react",
      desc: "intermediate",
    },
  ];
  const backends = [
    {
      id: 1,
      icon: <BsPatchCheck />,
      tools: "PHP",
      desc: "intermediate",
    },
    {
      id: 2,
      icon: <BsPatchCheck />,
      tools: "Node Js",
      desc: "Basic",
    },
    {
      id: 3,
      icon: <BsPatchCheck />,
      tools: "Python",
      desc: "intermediate",
    },
  ];
  const backenddo = [
    {
      id: 4,
      icon: <BsPatchCheck />,
      tools: "My SQL",
      desc: "intermediate",
    },
    {
      id: 5,
      icon: <BsPatchCheck />,
      tools: "Firebase",
      desc: "intermediate",
    },
    {
      id: 6,
      icon: <BsPatchCheck />,
      tools: "SQl",
      desc: "intermediate",
    },
  ];
  return (
    <>
      <Container fluid  style={{ marginTop: "5rem", marginBottom: "8rem" }} >
        <div
          className="headerSkills"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}>Skills</h1>
          <p style={{ color: "#7e7d7d", fontFamily: "cursive" }}>
            My technical level
          </p>
        </div>
        <div className="point" >
          
          <Col className="col-md-12 col-sm-12 skilltable  add" >
            <div >
              <h6
                style={{
                  textAlign: "center",
                  fontFamily: "cursive",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "23px",
                  marginTop:'2rem'
                }}
              >
                Fronted developer
              </h6>
              <div className="skillItems" style={{ display: "flex", flexDirection: "row" }}>
                <span className="tables">
                  {fronts.map((front) => (
                    <div className="part" style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        className="d-flex flex-row"
                        style={{ fontWeight: "bold" }}
                      >
                        <span style={{ fontSize: "23px" }}>{front.icon}</span>
                        <span
                          style={{
                            fontSize: "19px",
                            paddingLeft: "10px",
                            marginTop: "5px",
                          }}
                        >
                          {front.tools}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "cursive",
                          color: "#a4a4a4",
                          fontSize: "13px",
                          marginLeft: "1.9rem",
                        }}
                      >
                        {front.desc}
                      </span>
                    </div>
                  ))}

                </span>
                <span className="tabels">
                  {frontdos.map((front) => (
                    <div className="part" style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        className="d-flex flex-row"
                        style={{ fontWeight: "bold" }}
                      >
                        <span style={{ fontSize: "23px" }}>{front.icon}</span>
                        <span
                          style={{
                            fontSize: "19px",
                            paddingLeft: "10px",
                            marginTop: "5px",
                          }}
                        >
                          {front.tools}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "cursive",
                          color: "#a4a4a4",
                          fontSize: "13px",
                          marginLeft: "1.9rem",
                        }}
                      >
                        {front.desc}
                      </span>
                    </div>
                  ))}
                </span>
              </div>
            </div>
          </Col>
          <Col className="col-md-12 col-sm-12 skilltable">
            <div >
              <h6
                style={{
                  textAlign: "center",
                  fontFamily: "cursive",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "23px",
                  marginRight: "2rem",
                  marginTop:'2rem'

                }}
              >
                Backend developer
              </h6>
              <div className="skillItems" style={{ display: "flex", flexDirection: "row" }}>
                <span className="tables">
                  {backends.map((front) => (
                    <div className="part" style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        className="d-flex flex-row"
                        style={{ fontWeight: "bold" }}
                      >
                        <span style={{ fontSize: "23px" }}>{front.icon}</span>
                        <span
                          style={{
                            fontSize: "19px",
                            paddingLeft: "10px",
                            marginTop: "5px",
                          }}
                        >
                          {front.tools}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "cursive",
                          color: "#a4a4a4",
                          fontSize: "13px",
                          marginLeft: "1.9rem",
                        }}
                      >
                        {front.desc}
                      </span>
                    </div>
                  ))}
                </span>
                <span className="tabels">
                  {backenddo.map((front) => (
                    <div className="part" style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        className="d-flex flex-row"
                        style={{ fontWeight: "bold" }}
                      >
                        <span style={{ fontSize: "23px" }}>{front.icon}</span>
                        <span
                          style={{
                            fontSize: "19px",
                            paddingLeft: "10px",
                            marginTop: "5px",
                          }}
                        >
                          {front.tools}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "cursive",
                          color: "#a4a4a4",
                          fontSize: "13px",
                          marginLeft: "1.9rem",
                        }}
                      >
                        {front.desc}
                      </span>
                    </div>
                  ))}
                </span>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
}
export default Skill;
