import { useState } from 'react'; 
import Form from '../Components/Form';
import Message from '../Components/Message'; 

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [formData, setFormData] = useState({ nombre: "", email: "" }); 

  const handleFormSubmit = (data) => {
    setFormData(data); 
    setIsSubmitted(true); 
    console.log("Datos del formulario:", data);
  };

  return (
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
  );
};

export default Contact;
