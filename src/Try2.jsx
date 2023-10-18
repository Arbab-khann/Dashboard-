import React from "react";
import { useContext } from "react";
import { Store } from "./component/try";
function Try2() {
  const [data] = useContext(Store);
  console.log(data);
  return (
    <>
      <div>Try2</div>
      {data.map((item, intex) => {
        console.log(item);
        return (
          <>
            <img src={item.img} alt="ad" />
            <p>{item.sideText1}</p>
            <p>{item.sideText2}</p>
          </>
        );
      })}
    </>
  );
}

export default Try2;
