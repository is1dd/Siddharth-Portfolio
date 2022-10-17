import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../styles/Footer.css";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={event =>  window.location.href='https://www.instagram.com/is1dd/'}/>
        <TwitterIcon/>
        <GithubIcon onClick={event =>  window.location.href='https://github.com/is1dd'} />
        {/* <FacebookIcon /> */}
        <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/is1dd/' }/>
      <a href="mailto:siddharthsharma9660@gmail.com?body=My custom mail body">
        <EmailIcon/>
      </a>
      </div>
      <p> &copy; 2022 Sid.com</p>
    </div>
  );
}

export default Footer;
