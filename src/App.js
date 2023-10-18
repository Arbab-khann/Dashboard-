import "./component/style.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./component/Dashboard";
import Products from "./component/Products";
import Income from "./component/Income";
import Help from "./component/Help";
import Coustomer from "./component/Coustomer";
import Promote from "./component/Promote";
import Sidebar from "./component/Sidebar";
import SaleIteams from "./component/SaleIteams";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <SaleIteams>
            <Routes>
              <Route className="" path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="income" element={<Income />} />
              <Route path="help" element={<Help />} />
              <Route path="coustomer" element={<Coustomer />} />
              <Route path="promote" element={<Promote />} />
            </Routes>
          </SaleIteams>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
