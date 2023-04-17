import React from "react";
import Card from "./Card";

const Test = () => {
  // const style = {
  //     marginTop:50
  // };

  return (
    <>
  <div
    style={{
      marginTop: 50,
      maxWidth: "80%",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <div style={{ width: "65%" }} className="border">
      <div
        style={{ overflow: "scroll", height: "600px" }}
      >
        <div className="row  row-cols-1 row-cols-md-3 g-3" style={{marginTop:3, marginLeft:0.1}}>
        {[...Array(10)].map((_, index) => (
          <Card key={index} />
        ))}
        </div>
      </div>
    </div>
    <div style={{ width: "34.5%" }} className="border">
      CHARTS
    </div>
  </div>
</>

  );
};

export default Test;
