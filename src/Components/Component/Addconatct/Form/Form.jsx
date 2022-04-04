import { useState, useEffect } from "react";
import "./Form.css";
const Form = (props) => {
  const [details, setdetails] = useState({});
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [contact, setcontact] = useState("");
  const [allUserdetails, setallUserdetails] = useState([]);

  useEffect(() => {
    const contact = localStorage.getItem("contact");
    if (contact) setallUserdetails(JSON.parse(contact));
  }, []);

  const Errors = { id: "", Name: "", Email: "", address: "", phonenumber: "" };
  let status = true;

  const nameChangeHandler = (event) => {
    setname(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setemail(event.target.value);
  };
  const addressChangehandler = (event) => {
    setaddress(event.target.value);
  };
  const conatactChangeHandler = (event) => {
    setcontact(event.target.value);
  };
  const fromSubmitHandler = (event) => {
    event.preventDefault();
    formValidate();
    const formData = {
      id: Math.trunc(Math.random() * 10000),
      Name: name,
      Email: email,
      Address: address,
      Contact_Number: contact,
    };
    function formValidate() {
      if (!details.fName) {
        Errors.Name = "First name is required";
        status = false;
      }
      if (!details.lName) {
        Errors.Email = "Last name is required";
        status = false;
      }
      if (!details.contact) {
        Errors.address = "Contact is Required";
        status = false;
      }
      if (!details.email) {
        Errors.phonenumber = "Email is required";
        status = false;
      }
    }
    setdetails(formData);
    setallUserdetails([...allUserdetails, formData]);
    localStorage.setItem(
      "contact",
      JSON.stringify([...allUserdetails, formData])
    );
    setname("");
    setemail("");
    setaddress("");
    setcontact("");
  };
  console.log(allUserdetails, "allUserdetailsallUserdetails");
  return (
    <div className="from_main">
      <form onSubmit={fromSubmitHandler}>
        <div className="form_top">
          <div className="f_name">
            <label className="lbl">Name</label>
            <input
              className="input_form"
              onChange={nameChangeHandler}
              type={"text"}
              value={name}
            ></input>
            {!status && !status === true && (
              <div className="Error">
                <p>{Errors?.Name}</p>
              </div>
            )}
          </div>
          <div className="l_name">
            <label className="lbl">Email</label>
            <input
              className="input_form"
              onChange={emailChangeHandler}
              type={"email"}
              value={email}
            ></input>
          </div>
        </div>
        <div className="from_down">
          <div className="form_contact">
            <label className="lbl">Address</label>
            <input
              className="input_form"
              onChange={addressChangehandler}
              type={"text"}
              value={address}
            ></input>
          </div>
          <label className="lbl">Contact</label>
          <input
            className="input_form"
            onChange={conatactChangeHandler}
            type={"number"}
            value={contact}
          ></input>
        </div>
        <div className="form_btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
