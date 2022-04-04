import Home from "../../Home/Home";
import Form from "./Form/Form";
import { useState } from "react";
const Addcontact = ({ setShowForm, showForm, onsave }) => {
  const [value, setvalue] = useState("");
  const [formvalue, setformvalue] = useState([]);
  const Formdata = (data) => {
    setformvalue(data);
    onsave(formvalue);
  };
  return (
    <Home onClick={() => setShowForm(!showForm)}>
      <Form onSaveFormdata={Formdata} />
      {value}
    </Home>
  );
};
export default Addcontact;
