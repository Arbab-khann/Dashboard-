import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Products from "./component/Products";
import Income from "./component/Income";
import Help from "./component/Help";
import Coustomer from "./component/Coustomer";
import Promote from "./component/Promote";

import {
  FaDiceD6,
  FaAd,
  FaTwitch,
  FaDollyFlatbed,
  FaHandHoldingUsd,
  FaStreetView,
} from "react-icons/fa";

function RoutCompo() {
  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <div className="Dashboard">
            <div className="Dashboard-items">
              <span>
                <FaDiceD6 />
                <NavLink
                  to="/"
                  // style={({ isActive }) => ({
                  //   color: isActive ? "greenyellow" : "white",
                  // })}
                  className="navbar-item"
                  activeClassName="active"
                >
                  Dashboard
                </NavLink>
              </span>

              <span>
                <FaDollyFlatbed />
                <NavLink
                  to="/products"
                  // style={({ isActive }) => ({
                  //   color: isActive ? "greenyellow" : "white",
                  // })}
                  className="navbar-item"
                  activeClassName="active"
                >
                  Products
                </NavLink>
              </span>
              <span activeClassName="active">
                <FaHandHoldingUsd />
                <NavLink
                  // style={({ isActive }) => ({
                  //   color: isActive ? "greenyellow" : "white",
                  // })}
                  className="navbar-item"
                  activeClassName="active"
                  to={"/income"}
                >
                  Income
                </NavLink>
              </span>
              <span>
                <FaTwitch />
                <NavLink
                  // style={({ isActive }) => ({
                  //   color: isActive ? "greenyellow" : "white",
                  // })}
                  className="navbar-item"
                  activeClassName="active"
                  to={"/help"}
                >
                  Help
                </NavLink>
              </span>
              <span>
                <FaStreetView />
                <NavLink
                  // style={({ isActive }) => ({
                  //   color: isActive ? "greenyellow" : "white",
                  // })}
                  className="navbar-item"
                  activeClassName="active"
                  to={"/coustomer"}
                >
                  Coustomer
                </NavLink>
              </span>
              <span>
                <FaAd />
                <NavLink
                  // style={({ isActive }) => ({
                  //   color: isActive ? "greenyellow" : "white",
                  // })}
                  className="navbar-item"
                  activeClassName="active"
                  to={"/promote"}
                >
                  Promote
                </NavLink>
              </span>
              {/* </div> */}
            </div>
          </div>
          <div className="Right-container">
            <Routes>
              <Route className="" path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="income" element={<Income />} />
              <Route path="help" element={<Help />} />
              <Route path="coustomer" element={<Coustomer />} />
              <Route path="promote" element={<Promote />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default RoutCompo;
