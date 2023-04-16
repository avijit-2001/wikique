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
    <div style={{ maxWidth: "65%" }}>
      <div
        style={{ overflow: "scroll", height: "600px" }}
        className="border"
      >
        <div className="row  row-cols-1 row-cols-md-3 g-4 border">
        {[...Array(10)].map((_, index) => (
          <Card key={index} />
        ))}
        </div>
      </div>
    </div>
    <div style={{ maxWidth: "35%" }}>
      <div
        style={{ overflow: "scroll", height: "600px" }}
        className="border"
      >
        <div className="row  row-cols-1 row-cols-md-1 g-4 border">
        {[...Array(10)].map((_, index) => (
          <Card key={index} />
        ))}
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default Test;
