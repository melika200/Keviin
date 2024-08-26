import About from "../../Pages/About/About"
import Portfolio from "../../Pages/Portfolio/Portfolio"
import Services from "../../Pages/Services/Services"
import Skill from "../../Pages/Skills/Skill"
import Data from "../Data/Data"
import Header from "../header/header"
import Qulification from "../Qulification/Qulification"
import Social from "../social/Social"
import Contact from "../../Pages/Contact/Contact"
import './Home.css'
function Home(){
    return(
        <>
        <Header/>
        <section className="home section " id="home" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className="homeContainer container grid">
                <div className="homeContent">
                    <Social/>
                   
                    <Data/>
                    <div >
                        <img className="homeImg" style={{borderRadius:'50%',width:'250px',height:'250px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShf0bITMFfqMFd_jNu9pRjRp0CrELZSaUzSam9qX-UymX0EDW52y_d292peXTP6dyIYTs&usqp=CAU" alt="Smith" />
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <br />
        <Skill/>
        <Services/>
        <Qulification/>
        <Portfolio/>
        <Contact/>
        </>
    )
}

export default Home