import React from "react";
import data from "../../Data/Data.json";
import Section from "../Section/Section";
import Link from "../../Assets/icons/Link";
import Folder from "../../Assets/icons/Folder";
export default function Projects() {
  const projects = [
    {
      id: 0,
      title: data.projects.reactTemplate,
      link: "https://www.github.com/abhiapatel/react-template",
      desc: "React-Template is easy to use, has all files having folder structure that makes it easily changeable.",
      tech: ["JavaScript", "React", "React Router", "Tailwind CSS"],
    },
    {
      id: 1,
      title: data.projects.pxToRem,
      link: "https://www.github.com/abhiapatel/px-to-rem",
      desc: "PX to REM Converter converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16px pixel.",
      tech: ["JavaScript", "React", "React Router", "Tailwind CSS"],
    },
    {
      id: 2,
      title: data.projects.todoList,
      link: "https://github.com/aniketnimkar/to-do-App",
      desc: "A todo app project is a software application that helps users manage their tasks and to-do lists. The app typically allows users to create tasks, set due dates and priorities, categorize tasks, and mark tasks as completed when they are finished.",
      tech: ["JavaScript", "HTML", "CSS", "Git"],
    },
  ];

  return (
    <Section
      className="projects"
      id="projects"
      title={data.projects.projectsTitle}
    >
      <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-10 text-md leading-6 text-slate-400">
        {projects.map((project) => {
          return (
            <div
              className="grid gap-7 p-6 bg-[#112240] shadow-lg rounded-lg"
              key={project.id}
            >
              <div className="flex items-center justify-between">
                <Folder />
                <a href={project.link} target="_blank" rel="noreferrer">
                  <Link />
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-xl">{project.title}</h1>
                <span>{project.desc}</span>
                <code className="mt-5 text-sm text-slate-300">
                  {project.tech.slice(",").join(" ")}
                </code>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
