import React, { useState } from "react";

const BasicForm = () => {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error,setError]=useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    if((formData.firstName!=="" && formData.lastName!=="" && formData.email !=="")){
        setError(false)
    }else{
        setError(true)
    }
    setIsSubmitted(true);
  };

  return (
    <>
      <form>
        <label>First Name</label>{" "}
        <input
          type="text"
          placeholder="enter first name"
        required

          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <br />
        <label>Last Name</label>{" "}
        <input
          type="text"
          placeholder="enter last name"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <br />
        <label>Email</label>{" "}
        <input
          type="email"
          placeholder="abc@gmail.com"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <br />
      </form>
      <br/>
      <button onClick={submitHandler}>Submit</button>
      {error && <div style={{color:"red"}}>please enter all fields</div>}
      {isSubmitted && !error &&<h1>Hello {formData.firstName}</h1>}
    </>
  );
};

export default BasicForm;
