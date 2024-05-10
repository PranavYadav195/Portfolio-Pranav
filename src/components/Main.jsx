import React from "react";
import { ReactTyped, Typed } from "react-typed";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import pic from "../pranav-image.gif";

export default function Main() {
  return (
    <>
      <div name="home" className="m-10">
        <div className="flex md:flex-row flex-col w-[92%] m-auto">
          <div className="md:w-1/2 mt-6">
            <p className="text-xl">Welcome In My Feed</p>
            <p className="text-2xl md:text-4xl inline-block">Hello,I,m a</p>

            <ReactTyped
              className="text-2xl md:text-4xl ml-5 text-red-700"
              strings={[
                "Developer",
                "Coder",
                "Pubg-Player",
                "Frontend-Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              omnis quidem impedit nobis dolore, est voluptatibus esse
              doloribus! At est enim atque iusto suscipit nam nulla natus
              aperiam sit voluptas.
            </p>
            <div className="flex mt-4">
              <div className="md:w-1/2">
                <p className="text-2xl ">Available on</p>
                <ul className="flex space-x-5 mt-2">
                  <li>
                    <a href="https://www.facebook.com/">
                    <MdFacebook className="text-2xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px]" /></a>
                  </li>
                  <li>
                    <FaInstagramSquare className="text-2xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaLinkedin className="text-2xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <p className="text-2xl">Currently working on</p>
                <ul className="flex space-x-8 mt-2">
                  <li>
                    <FaReact className="text-2xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px] " />
                  </li>
                  <li>
                    <IoLogoJavascript className="text-2xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <RiNextjsFill className="text-2xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-40 md:mt-16 mt-4 ">
            <img
              src={pic}
              alt="loading"
              className=" rounded-full md:w-[350px] md:h-[350px] md:rounded-2xl"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
