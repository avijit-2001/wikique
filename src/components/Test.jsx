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
          marginLeft: 120,
          overflow: "scroll",
          height: "600px",
        }}
      >
        <div className="row  row-cols-1 row-cols-md-3 g-4 border">
          {[...Array(20)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Test;
