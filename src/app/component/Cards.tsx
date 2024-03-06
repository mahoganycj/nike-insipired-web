"use client";

import React, { useState } from "react";
import Card from "./Card";
import { Products } from "../libs/type";
import Link from "next/link";
import Button from "./Button";

type CardsProps = {
  products: Products[];
};

const Cards = ({ products }: CardsProps) => {
  return (
    <div className="block md:flex justify-center items-center h-screen m-5">
      {products.map((product) => {
        return (
          <div
            key={product.slug}
            className="hover:scale-125 transition duration-500 cursor-pointer shadow-lg p-6 m-5 bg-white"
          >
            <Card
              brand={product.brand}
              image={product.image}
              slug={product.slug}
              description={product.description}
              price={product.price}
              rate={product.rate}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
