import React from "react";
import SearchBar from "./Searchbar";
import {
  FaArrowUp,
  FaBalanceScale,
  FaArrowDown,
  FaCalculator,
  FaClipboard,
  FaCoins,
} from "react-icons/fa";
import CircularProgressBar from "./Circularbar";
import { useContext } from "react";
import { Store } from "./SaleIteams";
import Chart from "./chart";

function Dashboard() {
  const [data] = useContext(Store);

  const handleSearch = (searchTerm) => {
    // Handle search logic here (e.g., fetch data based on the searchTerm)
  };

  return (
    <>
      {/*  main container  */}

      <div className="dashboard-main-block">
        {/* first block of name and search bar */}

        <div className="d-Block-1">
          <h3>hello Arbab 👋,</h3>
          <div>
            <SearchBar onSearch={handleSearch} />{" "}
            {/* calling searchbar compo here for serach bar */}
          </div>
        </div>
        {/* second block of cards */}

        <div className="d-block-2">
          <div className=" card card1">
            <div
              className="card1-icon card-icon"
              style={{ backgroundColor: "#D0E7D2" }}
            >
              <FaCoins size={40} color="#79AC78" />
            </div>
            <div className="card1-text">
              <p>Earning</p>
              <h3>$198K</h3>
              <p>
                <span style={{ color: "#38E54D" }}>
                  <FaArrowUp />
                  31%
                </span>
                This month
              </p>
            </div>
          </div>
          <div className=" card card2">
            <div
              className="card2-icon card-icon"
              style={{ backgroundColor: "#E1AEFF" }}
            >
              <FaBalanceScale size={40} color="5D12D2" />
            </div>
            <div className="card2-text">
              <p>Balance</p>
              <h3>$2.4K</h3>
              <p>
                <span style={{ color: "red" }}>
                  <FaArrowDown />
                  2%
                </span>
                This month
              </p>
            </div>
          </div>
          <div className=" card card3">
            <div
              className="card3-icon card-icon"
              style={{ backgroundColor: "#DAFFFB" }}
            >
              <FaClipboard size={40} color="#64CCC5" />
            </div>
            <div className="card3-text">
              <p>Other</p>
              <h3>$2.4K</h3>
              <p>
                <span style={{ color: "red" }}>
                  <FaArrowDown />
                  2%
                </span>
                This month
              </p>
            </div>
          </div>
          <div className="card card4">
            <div
              className="card4-icon card-icon"
              style={{ backgroundColor: "#F5C6EC" }}
            >
              <FaCalculator size={40} color="#E11299" />
            </div>
            <div className="card4-text">
              <p>Total Sale</p>
              <h3>$89K</h3>
              <p>
                <span style={{ color: "#38E54D" }}>
                  <FaArrowUp />
                  11%
                </span>
                This month
              </p>
            </div>
          </div>
        </div>

        {/*  third block of chart and coustomer */}

        <div className="d-block-3">
          <div className="chart-container">
            <div className="chart-container-block1">
              <h3>Overview</h3>
              <select name="" className="option">
                <option value="0">Quantity</option>
                <option value="1">Price</option>
                <option value="2">Service</option>
              </select>
            </div>
            <Chart /> {/* calling cahrt to render chart in our third block */}
          </div>
          <div className="coustomer-container">
            <div className="coustomer-container-text">
              <h3>Coustomer</h3>
              <p>Coustomer that buy products</p>
            </div>
            <div className="coustomer-container-ring">
              <CircularProgressBar percentage={70} />
              {/* calling CircularProgressBar for circular bar */}
            </div>
          </div>
        </div>

        {/* forth block of product sale */}

        <div className="d-block-4">
          <div className="d-block4-container1">
            <h2 style={{ fontSize: "1.2rem" }}>Products Sell</h2>
            <div className="d-block4-container1-right-block">
              <input
                type="text"
                className="d-block4-container1-right-block-search"
                placeholder="    search"
                style={{
                  border: "0px",
                  borderRadius: "25px",
                  backgroundColor: "rgb(233, 238, 233)",
                  height: "1.5rem",
                  width: "50%",
                }}
              />
              <select name="" class=" option1">
                <option value="0">Last 30days</option>
                <option value="1">Last 20days</option>
                <option value="2">Last 10days</option>
              </select>
            </div>
          </div>
          <div className="d-block4-container2">
            <div className="d-block4-container1-block1">
              <p>Product name</p>
            </div>
            <div className="d-block4-container1-block2">
              <p>stock</p>
              <p className="d-block4-container1-block2-text">price</p>
              <p>Total Sales</p>
            </div>
          </div>
          <hr></hr>

          {/* using map method to render product sale items in below */}

          <div className="d-block4-container3">
            {data.map((item, index) => {
              return (
                <div className="d-block4-products" key={index}>
                  <div className="d-block4-products-left-block">
                    <img
                      style={{ height: 50, width: 100, borderRadius: "5px" }}
                      className="d-block4-img"
                      src={item.img}
                      alt="img"
                    />
                    <div className="image-side-text">
                      <h3 className="d-block4-name">{item.name}</h3>
                      <p
                        style={{ fontSize: "13px", color: "#61677A" }}
                        className="d-block4-dec"
                      >
                        {item.dec}
                      </p>
                    </div>
                  </div>
                  <div className="d-block4-products-right-block">
                    <p className="d-block4-stock">{item.stock}</p>
                    <h4 className="d-block4-price">{item.price}</h4>
                    <p className="d-block4-total-sale">{item.totalSale}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export { Dashboard };
