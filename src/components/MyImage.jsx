"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const MyImage = forwardRef(function MyImage(props, ref) {
  return (
    <Image
      ref={ref}
      src={props.src}
      alt={props.alt}
      className={props.className}
      {...props}
      //   width={500}
      //   height={500}
    />
  )
})

export const MotionImage = motion(MyImage)
