import React from "react";

import { client } from "./lib/client";

import { Product, FooterBanner, HeroBanner } from "./components";
const Home = ({ products, bannerData, props }) => (
  <div>
    {console.log("Banner Data:", bannerData)}
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Speaker of many variation</p>
    </div>
    <div className="products-container">
      {products?.map((product) => product.name)}
    </div>
    <FooterBanner />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "Banner"]';
  const bannerData = await client.fetch(bannerQuery);

  {
    console.log("This is my Code working");
  }

  return {
    props: { products, bannerData },
  };
};
export default Home;
