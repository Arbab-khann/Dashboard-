import React, { createContext, useState } from "react";

import Try2 from "../Try2";

export const Store = createContext();
function SaleIteams() {
  const [data, setData] = useState([
    {
      img: "https://images.pexels.com/photos/5933/color-paint-palette-wall-painting.jpg?auto=compress&cs=tinysrgb&w=600",
      sideText1: "aagdadhajdga",
      sideText2: "skdskdksjdks",
    },
    {
      img: "https://images.pexels.com/photos/2078147/pexels-photo-2078147.jpeg?auto=compress&cs=tinysrgb&w=600",
      sideText1: "hajdga",
      sideText2: "kdksjdks",
    },
  ]);
  console.log("datamaking file", typeof data);
  return (
    <>
      <Store.Provider value={[data, setData]}>
        <Try2 />
      </Store.Provider>
    </>
  );
}

export default SaleIteams;
