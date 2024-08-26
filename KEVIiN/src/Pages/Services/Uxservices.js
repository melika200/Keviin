import React from "react";
import { Button } from "react-bootstrap";
import "./CloseButton.css";
import { FaRegCircleCheck } from "react-icons/fa6";

const Uxservices = ({ show, handleClose }) => {
  const btnItems = [
    {
      id: 1,
      icon: <FaRegCircleCheck />,
      text: "idevelope the User iterface",
    },
    {
      id: 2,
      icon: <FaRegCircleCheck />,
      text: "Web page developement",
    },
    {
      id: 3,
      icon: <FaRegCircleCheck />,
      text: "i createux element interactions",
    },
    {
      id: 4,
      icon: <FaRegCircleCheck />,
      text: "i position your company brand",
    },
    {
      id: 5,
      icon: <FaRegCircleCheck />,
      text: "design and mockups of products for companies.",
    },
  ];
  return (
    <div className={`component ${show ? "show" : ""}`}>
      <div className="component-dialog">
        <div className="component-content">
          <div className="component-header">
            <h5 className="component-title">Ux/Ui Designer</h5>
            <span style={{ color: "#a4a4a4",textAlign:'center',display:'flex',justifyContent:'center',paddingBottom:'1.8rem' }}>
              A designer is a person who plans and creates designs <br /> for a variety
              of purposes, such as fashion, websites, <br /> or graphic materials
            </span>
            <div className="d-flex flex-column">
              {btnItems.map((btnitem) => (
                <div className="d-flex flex-row">
                  <span style={{fontSize:'18px'}} > {btnitem.icon} </span>
                  <span style={{paddingLeft:'1rem',color:'#a5a5a5'}}>{btnitem.text}</span>
                </div>
              ))}
            </div>
            <Button
              className="close"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <span aria-hidden="true">×</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uxservices;
