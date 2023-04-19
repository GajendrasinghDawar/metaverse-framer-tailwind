"use client"
import { motion } from "framer-motion"
import styles from "../styles"
import { navVariants } from "../utils/motion"
import Image from "next/image"
import search from "@public/search.svg"
import menu from "@public/menu.svg"
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={` sm:px-16 px-6 py-8 relative`}
  >
    <div className="absolute inset-0 gradient-01 w-[50%]" />
    <div
      className={`2xl:max-w-[1280px] w-full mx-auto flex items-center justify-between gap-8`}
    >
      <Image
        src={search}
        alt="search logo"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] text-white leading-[30px] uppercase">
        Metaverse
      </h2>
      <Image
        src={menu}
        alt="hamburger"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
)

export default Navbar
