import Home from "../../Home/Home";
import Form from "./Form/Form";
import { useState, useEffect } from "react";
const Addcontact = ({ setShowForm, showForm, onsave }) => {
  const [value, setvalue] = useState("");
  const [formvalue, setformvalue] = useState([]);
  const [status, setstatus] = useState('okay');

  const errorstatus = localStorage.getItem("Error_status");

  useEffect(() => {
    if (errorstatus) setstatus(errorstatus);
  }, [errorstatus]);
  const Formdata = (data) => {
    setformvalue(data);
    onsave(formvalue);
  };
  console.log(errorstatus,'errorstatuserrorstatuserrorstatuserrorstatuserrorstatus');
  return (
    <Home onClick={() => setShowForm(!showForm)}>
      {status && <Form onSaveFormdata={Formdata} />}
      {value}
    </Home>
  );
};
export default Addcontact;
