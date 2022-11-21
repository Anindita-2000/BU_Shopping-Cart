import React from "react";
import LinkCard from "./LinkCard";
import poco1 from "../Assets/poco1.png";
import realme9proplus from "../Assets/realme9proplus.png";
const Productspage = () => {
  return (
    <>
      <div
        className="mt-2 px-5 pb-4 pt-1 bg-primary text-warning rounded"
        style={{
          height: "10rem",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "white",
          fontWeight: "500",
        }}
      >
        <h1
          className="display-4 text-center pb-3"
          style={{
            paddingTop: "40px",
            paddingBottom: "30px",
          }}
        >
          Explore thousands of premium products
        </h1>
      </div>
      <div className="home-page">
        <div className="mt-4">
          <div className="row">
            <LinkCard
              imgsrc={poco1}
              path="/product/1"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={realme9proplus}
              path="/product/2"
              title="REALME 9 PRO PLUS"
              para="Price: 23,999 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/3"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/4"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/5"
              title="POCO X3"
              para="Price: 14000 INR"
            />
          </div>
          <div className="row">
            <LinkCard
              imgsrc={poco1}
              path="/product/6"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/7"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/8"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/9"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/10"
              title="POCO X3"
              para="Price: 14000 INR"
            />
          </div>
        </div>
        {/* <marquee direction="right">
          <div>
            <img
              //src={img5}
              style={{ width: "180px", height: "150px", paddingTop: "10px" }}
              alt=""
            />
          </div>
        </marquee> */}
      </div>
    </>
  );
};

export default Productspage;
