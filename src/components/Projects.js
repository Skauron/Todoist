import React, { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import { IndividualProject } from "./IndividualProject";

export const Projects = ({ activeValue = true }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  //console.log("projects:", projects.length);

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-testid="project-action"
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? "active sidebar__project"
            : "sidebar__project"
        }
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
          onKeyDown={() => {
            setActive(project.projectId);
            setSelectedPorject(project.projectId);
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  );
};
