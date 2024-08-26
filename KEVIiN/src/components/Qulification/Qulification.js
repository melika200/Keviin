import { Container } from "react-bootstrap";
import "./Qulification.css";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
function Qulification() {
  return (
    <>
      <Container style={{ maxWidth: "330px" }} className="my-5">
        <div className="d-flex flex-column justify-content-center text-center">
          <h3 style={{ fontFamily: "monospace", fontWeight: "bold" }}>
            Qulification
          </h3>
          <span style={{ color: "#a6a6a6" }}>My personal journey</span>
          <div
            className=" d-flex flex-row justify-content-between text-center "
            style={{ fontFamily: "cursive" ,marginTop:'3.5rem'}}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                padding: "0 6px",
                color: "#000",
                display:'flex',
                flexDirection:'row',
              }}
            >
              <RiGraduationCapLine style={{ paddingRight: "8px",fontSize:'35px' }} />
              Education
            </span>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                padding: "0 6px",
                color: "#000",
                  display:'flex',
                flexDirection:'row'
              }}
            >
              <BsBriefcase style={{ paddingRight: "8px",fontSize:'35px' }} />
              Experance
            </span>
          </div>
        </div>
          <div className="ComponentQulification my-5 justify-content-center" style={{display:'flex',flexWrap:'wrap'}}>
          <div className="Qcomponent col-md-12 col-sm-12 d-flex flex-row">
          <div className="Qpart d-flex flex-column ">
            <h3 className="title" style={{fontSize:'16px',fontWeight:'bold',fontFamily:'cursive'}}>Web Designer</h3>
            <span className="subtitle" style={{color:'#a4a4a4',fontSize:'15px'}}>Spain-institute</span>
            <p className="calender" style={{color:'#a4a4a4'}}>
              <FaCalendarAlt />
              <span style={{paddingLeft:'8px',fontFamily:'monospace'}}>2021-Present</span>
            </p>
          </div>
          <div className="">
            <span className="rounder"></span>
            <div className="line"></div>
          </div>
        </div>
        {/* items */}
        <div className="col-md-12 col-sm-12 d-flex flex-row bety">
        <div className="">
            <span className="rounder"></span>
            <div className="line"></div>
          </div>
          <div className=" d-flex flex-column">
            <h3 className="title"style={{fontSize:'16px',fontWeight:'bold',fontFamily:'cursive'}}>Art Designer</h3>
            <span className="subtitle"style={{color:'#a4a4a4',fontSize:'15px'}}>Spain-institute</span>
            <p className="calender"style={{color:'#a4a4a4'}}>
              <FaCalendarAlt />
              <span style={{paddingLeft:'8px',fontFamily:'monospace'}}>2020-2021</span>
            </p>
          </div>
       
        </div>
        <div className="col-md-12 col-sm-12 d-flex flex-row oew" >
          <div className="d-flex flex-column">
            <h3 className="title"style={{fontSize:'16px',fontWeight:'bold',fontFamily:'cursive'}}>Web Development</h3>
            <span className="subtitle"style={{color:'#a4a4a4',fontSize:'15px'}}>Germany-institute</span>
            <p className="calender"style={{color:'#a4a4a4'}}>
              <FaCalendarAlt />
              <span style={{paddingLeft:'8px',fontFamily:'monospace'}}>2018-2020</span>
            </p>
          </div>
          <div className="">
            <span className="rounder"></span>
            <div className="line"></div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 d-flex flex-row akhar" >
        <div className="">
            <span className="rounder"></span>
            <div className="line"></div>
          </div>
          <div className="">
            <h3 className="title"style={{fontSize:'16px',fontWeight:'bold',fontFamily:'cursive'}}>Ux Expert</h3>
            <span className="subtitle"style={{color:'#a4a4a4',fontSize:'15px'}}>USA-institute</span>
            <p className="calender"style={{color:'#a4a4a4'}}>
              <FaCalendarAlt />
              <span style={{paddingLeft:'8px',fontFamily:'monospace'}}>2017-2018</span>
            </p>
          </div>
        
        </div>
          </div>
      </Container>
    </>
  );
}
export default Qulification;
