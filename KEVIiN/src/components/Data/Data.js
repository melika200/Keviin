import { GiHand } from "react-icons/gi";
import "./Data.css";
import { PiTelegramLogo } from "react-icons/pi";
function Data() {
  return (
    <>
      <div
        className="homeData"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          marginTop:'10px'
        }}
      >
        <h1
          className="homeTitle"
          style={{ fontSize: "45px", fontWeight: "bold" }}
        >
          John Smith
          <span style={{ color: "#e9ed27", padding: "0 16px" }}>
            <GiHand />
          </span>
        </h1>
        <h3 className="homeSubtitle">Visual Designer</h3>
        <p
          style={{ fontSize: "15px", color: "#989595"}}
          className="homeDesc"
        >
          A designer is a person who plans the form or structure of something
          before it is made, by preparing drawings or plans.
        </p>
        <a
          href="#contact"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "15px",
            display:'flex',
            justifyContent:'center',
            textAlign:'center',
            alignItems:'center',
            padding: "13px",
            borderRadius: "15px",
            marginTop:'1rem'
          }}
          className="btnHi"
        >
       <span>
           say Hello
          <span>
            {" "}
            <PiTelegramLogo style={{paddingLeft:'11px',fontSize:'28px'}} />
          </span>
       </span>
        </a>
      </div>
    </>
  );
}
export default Data;

