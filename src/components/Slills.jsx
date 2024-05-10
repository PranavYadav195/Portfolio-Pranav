import React from "react";

import react from "../reactjs.png";
import js from "../javascript.png";
import html from "../html.png";
import css from "../css.jpg";

export default function Slills() {
  const arr = [
    {
      id: 1,
      pic: react,
      txt: "react js",
    },
    {
      id: 2,
      pic: js,
      txt: "javascript",
    },
    {
      id: 3,
      pic: html,
      txt: "html",
    },
    {
      id: 4,
      pic: css,
      txt: "css",
    },
  ];
  return (
    <>
      <div name="experience" className="mx-16 my-4 space-y-10">
        <h1 className="md:text-3xl text-2xl underline">Skills</h1>

        <div className="grid md:grid-cols-4 grid-cols-2">
          {arr.map(({ id, pic, txt }) => (
            <div key={id} className="rounded-xl hover:scale-150 duration-200 mb-6 flex flex-col items-center">
              <img src={pic} alt="loading" className="w-[100px] h-[100px] rounded-full p-2 border-[2px]" />
              <div className="">{txt}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
