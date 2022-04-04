import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import "./Home.css";
const Home = ({ showForm, children }) => {
  return (
    <div className="Home_main">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="children">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
