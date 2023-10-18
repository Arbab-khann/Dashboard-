import React from "react";
import img from "../image/img.png";
import {
  FaDiceD6,
  FaAd,
  FaTwitch,
  FaDollyFlatbed,
  FaHandHoldingUsd,
  FaStreetView,
  FaRegMap,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
  const menuitems = [
    {
      path: "/",
      name: "Dashboard ",
      icon: <FaDiceD6 />,
    },
    {
      path: "/products",
      name: "Product ",
      icon: <FaAd />,
    },
    {
      path: "/coustomer",
      name: "Coustomer",
      icon: <FaTwitch />,
    },
    {
      path: "/income",
      name: "Income",
      icon: <FaDollyFlatbed />,
    },
    {
      path: "/promote",
      name: "Promote",
      icon: <FaHandHoldingUsd />,
    },
    {
      path: "/help",
      name: "Help",
      icon: <FaStreetView />,
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top-bar">
          <div className="logo">
            <FaRegMap />
          </div>
          <h3 className="header">Dashboard</h3>
        </div>
        {menuitems.map((item, index) => (
          <NavLink
            to={item.path}
            className="link"
            activeclassName="active"
            key={index}
          >
            <div className="icon">{item.icon}</div>
            <div className="name">{item.name}</div>
          </NavLink>
        ))}
        <div className="bottom-bar">
          <div className="bottom-bar-img">
            <img className="bottom-bar-user-image" src={img} alt="img"></img>
          </div>
          <div className="bottom-bar-user-name">
            <p>
              Arbab <FaChevronDown />
            </p>
            <span>Software Devloper.</span>
          </div>
          <p></p>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
