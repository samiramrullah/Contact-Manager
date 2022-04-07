import Home from "../../Home/Home";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
const Contact = (props) => {
  const [users, setusers] = useState([]);
  const [backshow, setbackshow] = useState(false);
  const [frontshow, setfrontshow] = useState(false);
  const [entredFormData, setentredFormData] = useState(props.formdata);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);

  const buttonBackHandler = () => {
    setbackshow(true);
    setfrontshow(false);
  };
  const buttonFrontHandler = () => {
    setfrontshow(true);
    setbackshow(false);
  };
  const deleteHandler = (id) => {
    console.log(JSON.parse(localStorage.getItem('contact')));
    let newArray = JSON.parse(localStorage.getItem('contact')).filter((item) => item.id !== id);
    localStorage.setItem('contact',JSON.stringify(newArray))
  };
  const contacts = JSON.parse(localStorage.getItem("contact"));
  const clearLocalStorageHandler = () => {
    localStorage.removeItem("contact");
    alert("Data Delated Successfully");
  };
  return (
    <Home>
      <div className="buttons">
        <div>
          <button onClick={buttonBackHandler}>Backend data</button>
        </div>
        <div>
          <button onClick={buttonFrontHandler}>Entered Data</button>
        </div>
        <div onClick={clearLocalStorageHandler}>
          <button>Clear All</button>
        </div>
      </div>

      {backshow && backshow === true && (
        <div>
          {users?.map((i) => (
            <div key={i.id}>
              <ul>
                <Link to={`/details/${i.id}`}>{i.name}</Link>
              </ul>
            </div>
          ))}
        </div>
      )}
      {frontshow && frontshow === true && (
        <div>
          {contacts?.map((itm) => (
            <div key={itm.id} className="front_main">
              <div className="front_top">
                <div className="front_name">
                  <p>Name: {itm.Name}</p>
                </div>
                <div className="font_address">
                  <p>Address: {itm.Address}</p>
                </div>
              </div>
              <div className="front_down">
                <div className="front_Email">{<p>Email : {itm.Email}</p>}</div>
                <div className="front_contact">
                  <p> Contact : {itm.Contact_Number} </p>
                </div>
              </div>
              <button onClick={() => deleteHandler(itm.id)} className="btn">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </Home>
  );
};
export default Contact;
