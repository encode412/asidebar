import React, { useState } from "react";
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";

const Asidebar = () => {
  var vala = [0, 1, 2, 3];
  const [val, setVal] = useState([]);

  let shuffle = (num) => {
    let newPos, temp;

    for (let i = num.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = num[i];
      num[i] = num[newPos];
      num[newPos] = temp;
    }

    return num;
  };

  const refix = () => {
    setTimeout(() => {
      setVal(shuffle(vala));
    }, 5000);
  };
  

  return (
   // <VerticalTicker>
<div shuffle={refix()}>
        {val.map((v) => (
          <h2>{v}</h2>
        ))}
      </div>
   // </VerticalTicker>

  );
};

export default Asidebar;
