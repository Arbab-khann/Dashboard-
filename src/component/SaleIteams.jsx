import React, { createContext, useState } from "react";

export const Store = createContext();
function SaleIteams(props) {
  const [data, setdata] = useState([
    {
      img: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Abstract 3D",
      dec: "A Multidi Canvas Exploring Depth",
      stock: "22 in stock",
      price: "$47",
      totalSale: "20",
    },
    {
      img: "https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "illustrator ",
      dec: "Enhancing Clarity and Precision  ",
      stock: "32 in stock",
      price: "$67",
      totalSale: "30",
    },
  ]);

  return (
    <>
      <Store.Provider value={[data, setdata]}>{props.children}</Store.Provider>
    </>
  );
}

export default SaleIteams;
