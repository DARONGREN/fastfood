import React, { useEffect, useState } from 'react'
import Delivery from '../img/delivery.png'
import HomeContainer from './HomeContainer'
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import RowContainer from './RowContainer';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();


  useEffect(() => {}, [cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center
    justify-center overflow-x-hidden">
      <HomeContainer />

      <section className="w-full ">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-400 to-red-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>


        </div>
        <RowContainer 
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}/>
      </section>
      <MenuContainer />

      {cartShow && (
        <CartContainer />
      )}
      
    </div>
  )
}

export default MainContainer
