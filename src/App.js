import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/Component/About/About";
import Contact from "./Components/Component/Contact/Contact";
import Addcontact from "./Components/Component/Addconatct/Addcontact";
import "./App.css";
import { useState } from "react";
import HomeWrapper from "./Components/Home/HomeWrapper/HomeWrapper";
import Details from "./Components/Component/Deatilsapi/Details";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [allData,setallData]=useState([]);
  const onFormSaveHandler=(data)=>{
    setallData(data);
    console.log(allData,'I am from App js');
  }
  const onChangeData=(data)=>{
    console.log(data,'I am onChhange');
     setallData(data);
  }
  return (
    <div className="App">
      <Router>
        <div className="routes">
          <Routes>
            <Route path="/" element={<HomeWrapper showForm={showForm} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact formdata={allData} onChange={onChangeData} />} />
            <Route path="/addcontact" element={<Addcontact setShowForm={setShowForm} showForm={showForm} onsave={onFormSaveHandler}/>}/>
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
