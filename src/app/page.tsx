import Image from "next/image";
import Link from "next/link";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen text-7xl ">
      <h1>Mendoza's Shoes Collections</h1>
    </div>
    </>
  );
}
