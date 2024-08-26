import { BiSolidMedal } from "react-icons/bi";
import { GrCompliance } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Card, Col } from "react-bootstrap";
function AboutItem() {
  const aboutitems = [
    {
      id: 1,
      icon: <BiSolidMedal />,
      title: "Experance",
      subtitle: "8years Working",
    },
    {
      id: 1,
      icon: <GrCompliance />,
      title: "Completed",
      subtitle: "48+project",
    },
    {
      id: 1,
      icon: <BiSupport />,
      title: "Support",
      subtitle: "Online24/7",
    },
  ];
  return (
    <>
      <Col style={{display:'flex',flexDirection:'row'}}>
        {aboutitems.map((aboutitem) => (
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              width: "38%",
              textAlign: "center",
              margin:'0 5px',
              padding:'10px 30px'
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "19px" }}>
              {aboutitem.icon}
            </span>

            <span style={{ fontWeight: "bold" }}>{aboutitem.title}</span>
            <span style={{ color: "#ccc", fontFamily: "cursive" }}>
              {aboutitem.subtitle}
            </span>
          </Card>
        ))}
      </Col>
    </>
  );
}
export default AboutItem;
