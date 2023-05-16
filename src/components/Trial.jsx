import React, { useEffect, useState } from "react";

function Trial() {
  const [myData, setMyData] = useState("");
  const [count, setCount] = useState();

  useEffect(() => {
    setCount(count+1);
  },[])
  return (
    <div>
      <input
        type="text"
        value={myData}
        onChange={(e) => {setMyData(e.target.value); setCount(count+1);}}
      ></input>
      <p>The number of times remdere:{count}</p>
      <p>{myData}</p>
    </div>
  );
}

export default Trial;
