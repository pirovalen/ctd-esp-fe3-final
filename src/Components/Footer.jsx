import { useContext } from "react"; 
import { GlobalStates } from "./utils/global.context"; 

const Footer = () => {
  const { state } = useContext(GlobalStates); 
  return (
    <footer className={state.theme}>
    
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' /> 
        
        <div className="social-icons">
          <img src="/images/ico-facebook.png" alt="Facebook" className="social-icon"/>
          <img src="/images/ico-instagram.png" alt="Instagram" className="social-icon"/>
          <img src="/images/ico-whatsapp.png" alt="Whatsapp" className="social-icon"/>
          <img src="/images/ico-tiktok.png" alt="Tik-Tok" className="social-icon"/>
        </div>


    </footer>
  )
}

export default Footer;
