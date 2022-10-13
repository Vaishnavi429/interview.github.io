import { flexbox } from "@mui/system";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import "./Navbar.scss";

export default function Navbar() {
  const navbarList = [
    { text: "Home", link: "" },
    { text: "Service", link: "" },
    { text: "Blog", link: "" },
    { text: "About Us", link: "" },
    { text: "Contact Us", link: "" },
    { text: "Order Now", link: "" },
  ];
  return (
    <div className="navbar_container">
      <div className="navbar_container_list">
        <div className="navbar_container_list--leftSide">
          <div style={{ display: "flex" }}>
            <div>Logo</div>
            <div className="navbar-company-name">HoLoKitab</div>
          </div>
          <div className="navbar_container_list--middle">
            {navbarList.map((list, index) => (
              <a
                key={index}
                style={{ textDecoration: "none" }}
                href={list.link}
              >
                {list.text}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="navbar_container_list--RightSide">
            <TiShoppingCart />
            <button className="navbar-btn">Sign In</button>
            <button className="navbar-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
