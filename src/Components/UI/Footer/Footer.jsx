import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_main">
      <a
        className="footer_link"
        href="https://www.linkedin.com/in/samir-alam-52b59a12a/"
        target={"linkdin"}
      >
        <LinkedInIcon />
      </a>
      <a
        className="footer_link"
        href="https://github.com/samiramrullah"
        target={"Git Hub"}
      >
        <GitHubIcon />
      </a>
      <a
        className="footer_link"
        href="https://www.instagram.com/_beingsamir/"
        target={"instagram"}
      >
        <InstagramIcon />
      </a>
    </div>
  );
};
export default Footer;
