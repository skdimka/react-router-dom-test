import React from "react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default Contacts;
