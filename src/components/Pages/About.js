import React from "react";
import Section from "../Section/Section";

import data from "../../Data/Data.json";

export default function About() {
  const skills = [
    "JavaScript (ES6+)",
    "BootStrap",
    "React",
    "Redux",
    "Tailwind",
    "HTML",
    "CSS/Sass",
    "Git",
    "Windows/mac",
    "Postman",
  ];

  return (
    <Section className="background" id="about" title={data.about.background}>
      <div className="flex flex-col gap-5 text-md leading-6 text-slate-400">
        <p>
          {data.about.detailIntro}{" "}
          <a
            href="https://www.thetfpl.com/"
            target="_blank"
            rel="noreferrer"
            className="underline-link cursor-pointer text-slate-100"
          >
            {data.experience.techFlitter}
          </a>{" "}
          {data.about.detail}
        </p>
        <p>{data.about.detailSecond}</p>
        <p>{data.about.skills}</p>

        <ul className="skills-list grid grid-rows-5 grid-flow-col">
          {skills.map((skill, id) => {
            return (
              <li
                key={id}
                className="font-mono before:content-['▹'] relative before:mr-2 text-sm text-slate-400 leading-loose"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
