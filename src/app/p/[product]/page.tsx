import { products } from "@/app/libs/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/component/Navbar";

export default function Page({ params }: { params: { product: string } }) {
  const item = products.find((product) => product.slug === params.product);
  console.log(item);
  if (!item) {
    notFound();
  } else {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="border border-black rounded-lg p-3">
            <div>
              <Image
                className="hover:scale-125 transition duration-500 cursor-pointer"
                src={item.image}
                width={400}
                height={400}
                alt=""
              />
            </div>
            <p>{item.rate}</p>
            <h1 className="font-bold">{item.brand}</h1>
            <p>{item.description}</p>
            <p>{"Php " + item.price}</p>
          </div>
        </div>
      </div>
    );
  }
}
