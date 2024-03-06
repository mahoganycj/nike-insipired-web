import React from 'react'
import Cards from '../component/Cards'
import { products } from '../libs/data'
import Navbar from '../component/Navbar'

function DashboardPage() {
  return (
    <div>
        <Navbar/>
    <div className="flex items-center justify-center h-screen text-7xl ">
      <h1>Mendoza's Shoes Collections</h1>
    </div>
    </div>
  )
}

export default DashboardPage