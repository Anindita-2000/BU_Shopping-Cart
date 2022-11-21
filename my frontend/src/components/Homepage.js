import React from "react";
import img2 from "../static/2.jpg";
import ProductLinkCard from "./ProductLinkCard";
import { Link } from "react-router-dom";
import NewHeader from "./NewHeader";

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

import img28 from "../static/28.jpg";

const Homepage = () => {
  return (
    <>
      <NewHeader />
      <div
        className="mt-2 px-5 pb-4 pt-1 bg-danger text-white rounded"
        style={{
          height: "30rem",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "white",
          fontWeight: "900",
          textAlign: "left",
          fontFamily: "cursive",
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
                color: "white",
              }}
            >
              STARBUY
            </h1>
            Since 1995, Starbuy is facilitating people of Kolkata to get the
            right product for their very specific usage. Location is very well
            accessible from any point in Kolkata. Faculties are polite,
            well-behaved and stay updated with the latest information. Not only
            various brands and models of smartphones but also related
            accessories and other electronics are also available. Prices are
            good. The store inside is comfy. Online and cash both payment
            options are available in here.
            <br />
            <br />
            <Link to="/products" className="btn btn-warning">
              Shop Now
            </Link>
            <br />
          </div>
          <div>
            <img src={img2} style={{ marginTop: "5rem" }} />
          </div>
        </div>
      </div>
      <div
        className="home-page"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
