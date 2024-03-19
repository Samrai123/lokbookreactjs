import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../images/mylogo.png";
import "./header.css"


const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "10vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Category",
  link3Text: "Login for User",
  link4Text: "Add Category",
  link1Url: "/admin/home",
  link2Url: "/admin/category",

 
  link3Url:"/",
  link4Url: "/admin/addcategory",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return (
    <div className="container">
      <ReactNavbar {...options} />
      {/* <Navbar/> */}
    </div>
  );
};

export default Header;