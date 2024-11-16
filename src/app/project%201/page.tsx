
import Image from "next/image";
import git from "../public/git.webp"
import Link from "next/link";

import React from 'react'

export default function page() {
  return (
    <div className=' bg-gradient-to-r from-pink-400 to-rose-500 h-screen w-screen absolute bg-cover'>
      <br />
      <br />
      <br />
      <br />
      <div className="bg-rose-400 shadow-2xl shadow-black w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4  ">
      <div className="min-h-[256px]">
        <Image src={git} alt="git" className="w-full" />
      </div>

      <div className="p-6">
        <h3 className="text-rose-900 text-2xl font-serif">Projects</h3>
        <p className="mt-4 text-md text-rose-900 leading-relaxed font-serif">
         To Explore My Projects Visit My Github Account ...
        </p>
        <br />
        <Link href="https://github.com/BushraAli834" className="bg-gradient-to-r from-rose-900 to-pink-400 shadow-2xl shadow-black text-rose-900 font-normal py-2 px-4 rounded-md hover:bg-red-900 hover:text-pink-200 duration-200">
          Github
        </Link>
        <div>
        </div>
      </div>
    </div>
    </div>
  )
}
