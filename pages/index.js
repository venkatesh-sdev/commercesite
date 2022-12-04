import Head from "next/head";
import Image from "next/image";
import axios from 'axios'
import { client } from "../lib/client";
import React, { useEffect, useState } from "react";
import MainBanner from "../Components/MainBanner/MainBanner";
import Product from "../Components/Product/product";
import FooterBanner from "../Components/FooterBanner/FooterBanner";

const index = ({ products, banners }) => {
  return (
    <div className="home">
      <MainBanner mainBanner={banners.length && banners[0]} />
      <div className="Products__Heading">
        <h2>Best Product in the Market </h2>
        <p>Now available for sale in our Store</p>
      </div>

      <div className="Products__Containers__Container">
        <div className="grad-left"></div>
        <div className="Products__Container">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="grad-right"></div>
      </div>

      <div className="Products__Heading">
        <h2>The Recently Available </h2>
        <p>Now available for sale in our Store</p>
      </div>
      <div className="Products__Containers__Container">
        <div className="grad-left"></div>
        <div className="Products__Container">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="grad-right"></div>
      </div>
      <div className="Products__Heading">
        <h2>The Most Valuable </h2>
        <p>Now available for sale in our Store</p>
      </div>
      <div className="Products__Containers__Container">
        <div className="grad-left"></div>
        <div className="Products__Container">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="grad-right"></div>
      </div>
      <div className="Products__Heading">
        <h2>The Highly Recommended </h2>
        <p>Now available for sale in our Store</p>
      </div>
      <div className="Products__Containers__Container">
      <div className="grad-left"></div>
      <div className="Products__Container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="grad-right"></div>
    </div>
      <div className="Products__Heading">
        <h2>The Popular Products </h2>
        <p>Now available for sale in our Store</p>
      </div>
      <div className="Products__Containers__Container">
        <div className="grad-left"></div>
        <div className="Products__Container">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="grad-right"></div>
      </div>
      <div className="Products__Heading">
        <h2>The Popular Products </h2>
        <p>Now available for sale in our Store</p>
      </div>
      <div className="Products__Containers__Container">
        <div className="grad-left"></div>
        <div className="Products__Container">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="grad-right"></div>
      </div>

      <div className="Products__Heading">
        <h2>The Recently Available </h2>
        <p>Now available for sale in our Store</p>
      </div>

      <div className="Products__Containers__Container">
        <div className="grad-left"></div>
        <div className="Products__Container">
          {products && products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="grad-right"></div>
      </div>

      <FooterBanner footerBanner={banners.length && banners[0]} />
    </div>
  );
};

export default index;

export const getServerSideProps = async () => {
 
  const productQuery = '*[_type=="product"]';
  const products = await client.fetch(productQuery);
  const bannerQuery = '*[_type=="banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
};
