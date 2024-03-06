"use client";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { Products } from "../libs/type";
import Link from "next/link";

const Card = ({ image, brand, description, price, rate, slug }: Products) => {
  const [itemCount, setItemCount] = useState(0);
  const handleAdd = () => {
    setItemCount(itemCount + 1);
  };

  const handleRemove = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  const handleGoCart = () => {
    return (location.href = "/Cart");
  };
  return (
    <div>
      <Link href={`/p/${slug}`} key={slug} className="cards">
        <div className="px-2">
          <svg
            width="9"
            height="9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block   h-[9px] w-[9px]"
          >
            <path
              d="M4.69 7.501l2.181 1.44c.281.184.627-.09.545-.428l-.632-2.582a.406.406 0 01.126-.395L8.866 3.84c.255-.22.125-.666-.208-.688L6.105 2.98a.35.35 0 01-.193-.073.372.372 0 01-.123-.17L4.837.246a.372.372 0 00-.131-.178.35.35 0 00-.412 0 .372.372 0 00-.131.178L3.21 2.738a.372.372 0 01-.123.17.35.35 0 01-.193.073l-2.553.17c-.333.023-.463.468-.208.689L2.09 5.536a.406.406 0 01.125.396l-.584 2.392c-.1.405.316.734.65.513L4.31 7.501a.345.345 0 01.38 0z"
              fill="#F7B543"
            ></path>
          </svg>
          {rate}
        </div>
        <div>
          <Image
            className="m-auto"
            src={image}
            width={200}
            height={200}
            alt=""
          />
        </div>
        <p className="px-2 font-bold">{brand}</p>
        <p className="px-2">{description}</p>
        <p className="px-2">
          {"Php "}
          {price}
        </p>
      </Link>
      {itemCount === 0 ? (
        <>
          <div className="flex items-center justify-center">
            <Button
              onClick={handleRemove}
              name="-"
              disabled
              className="p-2 m-2 border border-blue-950 rounded-md bg-gray-300 text-gray-500"
            />
            <p className="p-2">{itemCount}</p>
            <Button onClick={handleAdd} name="+" />
            <Button
              onClick={handleAdd}
              name="Add to Cart"
              disabled
              className="p-2 m-2 border border-blue-950 rounded-md bg-gray-300 text-gray-500"
            ></Button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <Button onClick={handleRemove} name="-" />
            <p className="p-2">{itemCount}</p>
            <Button onClick={handleAdd} name="+" />
            <Button onClick={handleGoCart} name="Add to Cart"></Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
