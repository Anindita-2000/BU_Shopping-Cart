import React, { Component } from "react";
// import ImageHolder from "./ImageHolder";
import ImageSlider from "./imageSlider";
import { SliderData } from "./SliderData";
import img2 from "../static/2.jpg";
import saree from "../Assets/saree.png";
import realme9proplus from "../Assets/realme9proplus.png";
import bluerefrigerator from "../Assets/bluerefrigerator.png";
import silverrefrigerator from "../Assets/silverrefrigerator.png";
import tshirt2 from "../Assets/tshirt2.png";
import washingmachine from "../Assets/washingmachine.png";
import hoody from "../Assets/hoody.png";
import punjabi from "../Assets/punjabi.png";
import womenjewellery from "../Assets/womenjewellery.png";
import westernwear from "../Assets/westernwear.png";

//import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import { Link } from "react-router-dom";
import ProductLinkCard from "./ProductLinkCard";

function Home() {
  return (
    <div>
      <div
        className="mt-2 px-5 pb-4 pt-1 bg-warning text-white rounded"
        style={{
          height: "40rem",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "white",
          fontWeight: "500",
          textAlign: "left",
        }}
      >
        <div className="d-flex">
          <div
            style={{ marginRight: "2rem", marginTop: "6rem", color: "black" }}
          >
            <h1
              className="display-3  pb-3"
              style={{
                paddingTop: "40px",
                paddingBottom: "30px",
                fontWeight: "bold",
                textAlign: "left",
                color: "black",
              }}
            >
              Your Mobi Shop
            </h1>
            Since 1995, Mobility World is facilitating people of Kolkata to get
            the right mobile phone for theirvery specific usage. Location is
            very well accessible from any point in Kolkata. Faculties are
            polite, well-behaved and stay updated with the latest information.
            Not only various brands and models of smartphones but also related
            accessories and other electronics are also available. Prices are
            good. The store inside is comfy. Online and cash both payment
            options are available in here.
            <br />
            <br />
            <Link to="/products" className="btn btn-dark btn-lg">
              Shop Now
            </Link>
          </div>
          <div>
            <img src={img2} style={{ marginTop: "5rem" }} />
          </div>
        </div>
      </div>
      <div
        className="home-page"
        // style={{
        //   backgroundColor: "#ededed",
        //   height: "510px",
        // }}
      >
        <p
          className="display-6 text-center text-black my-2"
          style={{ fontWeight: "bold" }}
        >
          Featured Products
        </p>

        <div className="mt-4">
          <div className="row">
            <ProductLinkCard
              imgsrc={saree}
              path="/product/1"
              title="BLOCKED PRINTED BANARASI JACQUARD, ART SILK SAREE (PINK)"
              para="Price: 1,299 INR"
            />
            <ProductLinkCard
              imgsrc={realme9proplus}
              path="/product/2"
              title="REALME 9 PRO PLUS"
              para="Price: 23,999 INR"
            />
            <ProductLinkCard
              imgsrc={tshirt2}
              path="/product/3"
              title="BLUE T-SHIRT FOR MEN"
              para="Price: 799 INR"
            />
            <ProductLinkCard
              imgsrc={bluerefrigerator}
              path="/product/4"
              title="LG 190 L DIRECT COOL SINGLE DOOR 5 STAR REFRIGERATOR"
              para="Price: 18,190 INR"
            />
            <ProductLinkCard
              imgsrc={silverrefrigerator}
              path="/product/5"
              title="SAMSUNG 324 L FROST FREE DOUBLE DOOR 5 STAR CONVERTIBLE REFRIGERATOR"
              para="Price: 47,699 INR"
            />
          </div>
          <div className="row">
            <ProductLinkCard
              imgsrc={westernwear}
              path="/product/6"
              title="WHITE FLORAL WESTERN WEAR FOR WOMEN"
              para="Price: 899 INR"
            />
            <ProductLinkCard
              imgsrc={hoody}
              path="/product/7"
              title="STYLISH HOODY FOR MEN"
              para="Price: 2,999 INR"
            />
            <ProductLinkCard
              imgsrc={washingmachine}
              path="/product/8"
              title="IFB 8 KG 5 STAR FULLY AUTOMATIC FRONT LOAD WITH IN-BUILT HEATER SILVER "
              para="Price: 36,090 INR"
            />
            <ProductLinkCard
              imgsrc={womenjewellery}
              path="/product/9"
              title="ALLOY RHODIUM JEWELLERY SET FOR WOMEN (SILVER)"
              para="Price: 5,999 INR"
            />
            <ProductLinkCard
              imgsrc={punjabi}
              path="/product/10"
              title="MEN PRINTED DUPION SILK STRAIGHT KURTA (MULTICOLOR)"
              para="Price: 1,190 INR"
            />
          </div>
        </div>

        {/* <div className="mt-4">
          <div className="row">
            <ProductLinkCard
              imgsrc={poco1}
              path="/product/1"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <ProductLinkCard
              imgsrc={poco1}
              path="/product/2"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <ProductLinkCard
              imgsrc={poco1}
              path="/product/3"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <ProductLinkCard
              imgsrc={poco1}
              path="/product/4"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <ProductLinkCard
              imgsrc={poco1}
              path="/product/5"
              title="POCO X3"
              para="Price: 14000 INR"
            />
          </div>
          {/*  */}
      </div>
      {/* <div className="slides">
        <ImageSlider slides={SliderData} />
         <ImageHolder />  
      </div> */}
    </div>
    //</div>
  );
}
//}

export default Home;
