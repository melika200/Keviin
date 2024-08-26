import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import './Social.css'
function Social(){
    return(
        <>
        <div className="homeSocial  mt-5 ">
        <a href="https://www.instagram.com/" target="-blank" className="homeSocialIcon">
        <FaInstagram />

        </a>
        <a href="https://dribbble.com/" target="-blank" className="homeSocialIcon">
        <FaDribbble />
        </a>
        <a href="https://github.com/" target="-blank" className="homeSocialIcon">
        <FaGithub />
        </a>
        </div>
        </>
    )
}
export default Social