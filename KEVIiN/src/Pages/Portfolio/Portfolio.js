import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Portfolio.css";
function Portfolio() {
  const items = [
    {
      id: 1,
      img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NvbXB1dGVyLXR5cGVzLTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
      header: "sara Cilii",
      span: "A designer is a person who plans the form or structure of something before it is made, by preparing drawings or plans.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xpl4eNK_nNGXG598w4fBp5ituxHzPNoxbwh0Bjbd1HMZswDEppkbyR2SILQ6Adt41Bc&usqp=CAU",
      header: "aref vahdat",
      span: "This can include creating graphics for social media, invitations, or other digital materials, or designing fashion, furniture, or other products.",
    },
    {
      id: 1,
      img: "https://images.squarespace-cdn.com/content/v1/5f4304909f9f8d5592cc6494/1598229417965-I6X8P9LYOXQ69Q40A5HB/pexels-proxyclick-visitor-management-system-2451645-shads.jpg",
      header: "hatef moghemi",
      span: "Development refers to the process of growth, improvement, or advancement over time.",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_ntZMV4TkR5pAuatFHIsH7DIl6e7BgHC5QyCQ5tKfTGW8BgkrfTD25pw-_WCd3_iX-U&usqp=CAU",
      header: "melika vahdat",
      span: "It can apply to individuals, organizations, or even entire societies.",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YHYNJSBKVtyQy1S6Qyl91k3s1SFeghqOEulbWevNDOKUKzGP8aDlGS1szicw1ddxMQM&usqp=CAU",
      header: "mahor ghafori",
      span: "It encompasses all aspects of a interaction with a product, service, or system, including usability, accessibility, and overall satisfaction.",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL8oFho_TPu9UYDkIdg62d8TwyJYrQkawZV-wzdWrUwb_0y0qx889hSIHOvGZlxBivEc&usqp=CAU",
      header: "melika jafari",
      span: "It refers to the way humans interact with a machine, such as a computer, phone, or other electronic device. ",
    },
  ];
  return (
    <>
      <Container  style={{ maxWidth: "550px",margin:'8rem auto' }}>
        <div className="text-center">
          <h3 style={{fontFamily:'cursive'}}>My clients say</h3>
          <span style={{color:'#ccc'}}>testimental</span>
        </div>
        <Carousel data-bs-theme="dark" className="slider-portfolio">
          {items.map((item) => (
            <Carousel.Item className="">
              <img
                style={{ width: "75px", borderRadius: "3rem", height: "75px",marginBottom:'0.75rem' }}
                src={item.img}
              ></img>
              <div className="">
                <h5 style={{ color: "#000" }}>{item.header}</h5>
                <p style={{ color: "#a4a4a4" }}>{item.span}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
export default Portfolio;
