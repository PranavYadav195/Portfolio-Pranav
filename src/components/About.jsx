import React from "react";
import "../App.css";
export default function About() {
  return (
    <>
      <div  name="about" className="mx-16 my-4 space-y-10">
        <p className="md:text-3xl text-2xl underline">ABOUT</p>
        <p className="text-xl">
          Hello, I'm Akhil, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <h1 className="text-3xl bg-[yellow]">Education</h1>
        <p className="text-2xl">completed BSCIT from vishnu waman thakur collage</p>

        <p className="text-3xl bg-[yellow]">skills</p>

        <ol>
          <li className="text-2xl p-3">Proficient in javascritp,java and famalier with framework like react,tailwind</li>
          <li className="text-2xl p-3">
            Excellent problem-solving skills Effective communicator and
            collaborator
          </li>
          <li></li>
        </ol>

        <p className="text-3xl bg-[yellow]">Mission Statement</p>
        <p className="text-2xl">
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
      <hr />
    </>
  );
}
