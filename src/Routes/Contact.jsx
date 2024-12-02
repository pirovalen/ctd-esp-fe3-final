import { useState, useContext } from 'react'; 
import Form from '../Components/Form';
import Message from '../Components/Message'; 
import { GlobalStates } from "../Components/utils/global.context"; 

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [formData, setFormData] = useState({ nombre: "", email: "" }); 

  const { state } = useContext(GlobalStates); 

  const handleFormSubmit = (data) => {
    setFormData(data); 
    setIsSubmitted(true); 
    console.log("Datos del formulario:", data);
  };

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}> 
    <div>
      {!isSubmitted ? ( 
        <>
          <h2>Want to know more?</h2>
          <p>Send us your questions and we will contact you</p>
          <Form onSubmit={handleFormSubmit} /> 
        </>
      ) : (
        <Message nombre={formData.nombre} /> 
      )}
    </div>
    </main>
  );
};

export default Contact;
