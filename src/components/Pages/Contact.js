import React from "react";
import Section from "../Section/Section";
import data from "../../Data/Data.json";
import Github from "../../Assets/icons/Github";
import Mail from "../../Assets/icons/Mail";

export default function Contact() {
  const links = [
    {
      id: 0,
      icon: <Github />,
      href: "https://github.com/aniketnimkar",
    },
    {
      id: 1,
      icon: <Mail />,
      href: "mailto:aniketnimkar88@gmail.com",
    },
  ];
  return (
    <Section
      className="contact"
      id="contact"
      contactSection
      title={data.contact.contactTitle}
    >
      <div className="flex lg:flex-row md:flex-col sm:flex-col lg:justify-between lg:items-center gap-5 text-md leading-6 text-slate-400">
        <div>
          <h1 className="text-xl leading-6 text-slate-200">
            {data.contact.content}
          </h1>
          <p className="mt-2 text-slate-400">{data.app}</p>
        </div>

        <div className="flex lg:gap-10 md:gap-10 justify-between items-center">
          {links.map((link) => {
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
