import React from "react";
import ProductLinkCard from "./ProductLinkCard";

import grocery from "../Assets/grocery.png";
import sofa from "../Assets/sofa.png";
import womenwears from "../Assets/womenwears.png";
import hoody from "../Assets/hoody.png";
import mobileacc from "../Assets/mobileacc.png";
import baby from "../Assets/baby.png";
import electronics from "../Assets/electronics.png";
import menwears from "../Assets/menwears.png";
import chocolates from "../Assets/chocolates.png";
import cookware from "../Assets/cookware.png";

import ImageSlider from "./imageSlider";
import ImageHolder from "./ImageHolder";
import { SliderData } from "./SliderData";
import ProductHeader from "./ProductHeader";
import "./style.css";

const Productspage = () => {
  return (
    <>
      <ProductHeader />
      <div
        className=" px-2 pb-4 pt-1  text-warning rounded"
        style={{
          // height: "40rem",
          // paddingTop: "10px",
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
          <div className="slides">
            <ImageSlider slides={SliderData} />
            {/* <ImageHolder />   */}
          </div>
        </h1>
      </div>
      <div className="home-page">
        <div className="mt-4">
          <div className="row">
            <ProductLinkCard
              imgsrc={grocery}
              path=""
              title="Grocery Items"
              para="Starting from 49/- only"
            />
            <ProductLinkCard
              imgsrc={hoody}
              path=""
              title="Winter Collection For Men"
              para="Starting from 899/- only"
            />
            <ProductLinkCard
              imgsrc={sofa}
              path=""
              title="Furnitures For Home Decoration"
              para="Starting from 15,999/- only"
            />
            <ProductLinkCard
              imgsrc={womenwears}
              path=""
              title="Women Wears Collection"
              para="Starting from 599/- only"
            />
            <ProductLinkCard
              imgsrc={mobileacc}
              path=""
              title="Mobiles and Accessories"
              para="Starting from 149/- only"
            />
          </div>
          <div className="row">
            <ProductLinkCard
              imgsrc={baby}
              path=""
              title="Baby Dresses Collection"
              para="Starting from 399/- only"
            />
            <ProductLinkCard
              imgsrc={electronics}
              path=""
              title="Electronics and Accessories"
              para="Starting from 5,999/- only"
            />
            <ProductLinkCard
              imgsrc={menwears}
              path=""
              title="Men Wears Collection"
              para="Starting from 599/- only"
            />
            <ProductLinkCard
              imgsrc={chocolates}
              path=""
              title="Chcolates Collection"
              para="Starting from 49/- only"
            />
            <ProductLinkCard
              imgsrc={cookware}
              path=""
              title="Cookware Sets Collection"
              para="Starting from 499/- only"
            />
            {/* </div> */}
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
