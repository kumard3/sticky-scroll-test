/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";

function Nav() {
  return (
    <div className="h-[10vh] z-10 bg-red-500 sticky top-0 float-right justify-center items-center w-40">
      vfcdvfv
    </div>
  );
}
function NavLeft() {
  return (
    <div className="h-[10vh] z-10 bg-red-500 sticky top-0 float-left justify-center items-center w-40">
      vfcdvfv
    </div>
  );
}

export default function Home() {
  return (
    <div className="text-white font-serif text-4xl">
      <div className="h-[100vh] bg-black flex justify-center items-center w-full">
        yeeeppp
      </div>
      <div>
        <div className="relative  bg-yellow-600 ">
          <Nav />
          <div className="h-screen  bg-yellow-600 flex justify-center items-center w-full">
            hfrfvrv
          </div>
        </div>      
        <div className="relative bg-lime-600 ">
        <NavLeft />
          <div className="h-screen  bg-lime-600 flex justify-center items-center w-full">
            hfrfvrv
          </div>
        </div>

        <div className="h-screen  bg-neutral-800 flex justify-center items-center w-full">
          fcgvbhnjc
        </div>
        <div className="h-screen bg-indigo-500 flex justify-center items-center w-full">
          fcgvbhnjc
        </div>
      </div>
    </div>
  );
}
