import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client.js";

const HeroBanner = (HeroBanner) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />
      </div>
      <div>
        <Link href="/product/ID">
          <button type="button">BUTTON TEXT</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>Description </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
