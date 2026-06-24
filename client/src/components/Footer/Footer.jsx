import { BiHomeAlt } from "react-icons/bi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <div className="flexCenter" style={{ gap: "0.5rem", flexWrap: "nowrap" }}>
            <BiHomeAlt size={28} color="var(--blue)" />
            <span style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--primary)", letterSpacing: "0.5px" }}>YourFutureHome</span>
          </div>
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
