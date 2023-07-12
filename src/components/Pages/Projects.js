import React from "react";
import data from "../../Data/Data.json";
import Section from "../Section/Section";
import Link from "../../Assets/icons/Link";
import Folder from "../../Assets/icons/Folder";
export default function Projects() {
  const projects = [
    {
      id: 0,
      title: data.projects.portfolioWebsite,
      link: "https://github.com/aniketnimkar/portfolioV3",
      desc: "This React-based Portfolio website offers a concise yet comprehensive overview of the developer's background, skills, and projects. Visitors can easily explore the developer's work and gain insights into their expertise and accomplishments. With a user-friendly interface, the website provides a seamless browsing experience, showcasing the developer's skills and creativity in a compact and impactful manner.",
      tech: [
        "JavaScript",
        "React",
        "React Router",
        "Tailwind CSS",
        "Git",
        "Parcel",
      ],
    },
    {
      id: 1,
      title: data.projects.foodBytes,
      link: "https://github.com/aniketnimkar/React-food-byte",
      desc: "FoodBytes project is a React-based web application that showcases a variety of restaurants and their menus, all sourced from the Swiggy API. With a user-friendly interface, users can effortlessly explore different dining options, while the integration with the Swiggy API guarantees real-time and accurate restaurant data.",
      tech: [
        "JavaScript",
        "React",
        "React Router",
        "Tailwind CSS",
        "Git",
        "Parcel",
      ],
    },
    {
      id: 2,
      title: data.projects.youtube,
      link: "https://github.com/aniketnimkar/youtube-clone",
      desc: "This YouTube clone project aims to recreate the core functionality of YouTube by fetching and displaying data from the YouTube API. It serves as a practice exercise for developers to work with APIs, focusing on data retrieval and presenting video content within the application. By building this clone, developers can enhance their web development skills and gain hands-on experience in implementing key features of a video-sharing platform.",
      tech: [
        "JavaScript",
        "React",
        "React Router",
        "Tailwind CSS",
        "Git",
        "Parcel",
        "Varcel",
      ],
    },
    {
      id: 3,
      title: data.projects.todoList,
      link: "https://github.com/aniketnimkar/to-do-App",
      desc: "A todo app project is a software application that helps users manage their tasks and to-do lists. The app typically allows users to create tasks, set due dates and priorities, categorize tasks, and mark tasks as completed when they are finished.",
      tech: ["JavaScript", "HTML", "CSS", "Git"],
    },
    {
      id: 4,
      title: data.projects.weather,
      link: "https://www.github.com/abhiapatel/px-to-rem",
      desc: "A weather web app is a type of web application that allows users to get information about the weather in real time. These apps typically use APIs (Application Programming Interfaces) to retrieve weather data from the Open weather map.",
      tech: ["HTML", "CSS", "JavaScript", "API", "Netlify", "Github"],
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
