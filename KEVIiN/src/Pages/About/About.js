import AboutItem from "./AboutItem";
import { IoDocumentTextOutline } from "react-icons/io5";
import './About.css'
function About() {
  return (
    <>
  <div className="aboutSection my-3">
  <div
        className="AboutStation"
        style={{ marginTop: "10rem",textAlign:'center',marginBottom:'2rem' }}
      >
        <h1 className="textAbout" style={{ fontWeight: "bold",marginTop:'16px' }}>
          About Me
        </h1>
        <span
          className="textDec"
          style={{ color: "#6e6c6d", marginBottom: "10px" }}
        >
          My introduction
        </span>


      </div>
      <div
        className="aboutItem"
        style={{
        
          justifyContent: "center",
          alignItems: "center",
          width: "31%",
          
        }}
      >
        <img
          style={{
          
            borderRadius:'20px',
          }}
          src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2021/08/02/d5soRrx/james-rodriguez-tertarik-menjajal-liga-italia56.jpg"
          alt=""
          className="imgAbout"
        />
        <div className="cardAbout" style={{marginLeft:'4rem'}}>
          <AboutItem />
          <p style={{color:'#6e6c6d',fontSize:'16px',fontFamily:'cursive',marginTop:'16px'}}>
            Front-End Developer is someone who creates websites and web
            applications. The difference between Front-End and Back-End is that
            Front-End refers to how a web page looks, while back-end refers to
            how it works.
          </p>
          <button className="btnAbout" style={{backgroundColor:'#000',color:'#fff',width:'30%',padding:'10px',borderRadius:'20px',marginTop:'16px'}}>
            Download Cv <IoDocumentTextOutline />
          </button>
        </div>
      </div>
  </div>
    </>
  );
}
export default About;
