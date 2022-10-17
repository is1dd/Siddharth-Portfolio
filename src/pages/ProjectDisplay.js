import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} height="300px" />
      <p>
        <b>Tech Stack: </b> {project.skills}
      </p>
      <h3 className="description">{project.des}</h3>
      {/* <GitHubIcon /> */}
      <div className="buttons">

      <button onClick={()=>window.open(project.url , '_blank')}>Demo</button>
      <button onClick={()=>window.open(project.git , '_blank')}>Code</button>
      </div>
    </div>
  );
}

export default ProjectDisplay;
