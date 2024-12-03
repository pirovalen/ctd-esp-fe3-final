import { useContext } from "react"; 
import { GlobalStates } from "./utils/global.context"; 

const Footer = () => {
  const { state } = useContext(GlobalStates); 
  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
