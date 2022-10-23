import React from "react";
import { v4 as uuidv4 } from "uuid";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull; {education.description}</span>
            <br />
            <em className="date">
              {education.starting_year} &mdash; {education.ending_year}
            </em>
            <br />
          </p>
          <p className="description">
            <strong>Relevent Courses: </strong>
            {education.coursework}
          </p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull; {work.location}</span>
            <br />
            <em className="date">
              {work.starting_year} &mdash; {work.ending_year}
            </em>
          </p>
          <ul>
            <p>
              {work.description.map((achievements) => {
                return (
                  <li key={uuidv4()} className="description">
                    &bull;&emsp;{achievements}
                  </li>
                );
              })}
            </p>
          </ul>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <h3>{skillmessage}</h3>
          <br />
          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
