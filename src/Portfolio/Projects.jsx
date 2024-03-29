import React, { useEffect, useState } from "react";
import "./Projects.css";
import TSPModal from "./Modals/TSPModal";
import CatanModal from "./Modals/CatanModal";
import LinterModal from "./Modals/LinterModal";
import OMLModal from "./Modals/OMLModal";
import TreesModal from "./Modals/TreesModal";
import CookbookModal from "./Modals/CookbookModal";
import StockWatchModal from "./Modals/StockWatchModal";


const projectData = [
  {
    header: "Web Stock Watch",
    modalName: "StockWatchModal",
    image: "images/thumbnailStockWatch.PNG",
    date: "October 2023",
    description: "Project description 1",
  },
  {
    header: "Organize my Life",
    modalName: "OMLModal",
    image: "images/OMLLogo.PNG",
    date: "August 2023",
    description: "Project description 1",
  },
  {
    header: "TSP Genetic Algorithm",
    modalName: "TSPModal",
    image: "images/TSPRoute.PNG",
    date: "August 2023",
    description: "Project description 1",
  },
  {
    header: "Catan Test Suite",
    modalName: "CatanModal",
    image: "images/catanboard.png",
    date: "May 2023",
    description: "Project description 2",
  },
  {
    header: "Java Linter",
    modalName: "LinterModal",
    image: "images/Linter.png",
    date: "February 2023",
    description: "Project description 2",
  },
  {
    header: "Cookbook Database",
    modalName: "CookbookModal",
    image: "images/Cookbook.PNG",
    date: "May 2022",
    description: "Project description 2",
  },
  {
    header: "Editor Trees",
    modalName: "TreesModal",
    image: "images/bst2.png",
    date: "October 2021",
    description: "Project description 2",
  },

  // Add more project data as needed
];

function Projects({isModalOpen, setIsModalOpen}) {
  const [selectedProject, setSelectedProject] = useState({});

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'unset';
    setIsModalOpen(false);
  };

  // useEffect(() => {
  //   document.body.style.overflow = 'unset';
  // }, ) 

  return (
    <div className="projContainer">
      <h1 className="projHeader">Projects</h1>
      <div className="projHeader2">
        Below are some projects I worked on. Most are not likely kept up to date
        but have served as great experiences.
      </div>
      <div className="projBoxTable">
        {projectData.map((project, index) => (
          <ProjectBox
            key={index}
            project={project}
            openModal={() => openModal(project)}
          />
        ))}
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}

function ProjectBox({ project, openModal }) {
  return (
    <div className="projBoxContainer" onClick={openModal}>
      <div className="projBoxheader">{project.header}</div>
      <img className="projImage" src={`${process.env.PUBLIC_URL}/${project.image}`} alt="" />
      <div className="projDate">{project.date}</div>
    </div>
  );
}

function ProjectModal({ isOpen, onRequestClose, project }) {
  var modal = null;
  if (project.modalName === "TSPModal") {
    modal = (
      <TSPModal isOpen={isOpen} onRequestClose={onRequestClose} project={project} />
    );
  } else if (project.modalName === "CatanModal") {
    modal = (
      <CatanModal isOpen={isOpen} onRequestClose={onRequestClose} project={project} />
    );
  } else if (project.modalName === "StockWatchModal") {
    modal = (
      <StockWatchModal isOpen={isOpen} onRequestClose={onRequestClose} project={project} />
    );
  } else if (project.modalName === "LinterModal") {
    modal = (
      <LinterModal isOpen={isOpen} onRequestClose={onRequestClose} project={project} />
    );
  } else if (project.modalName === "OMLModal") {
    modal = (
      <OMLModal isOpen={isOpen} onRequestClose={onRequestClose} project={project} />
    );
  } else if (project.modalName === "TreesModal") {
    modal = (
      <TreesModal isOpen={isOpen} onRequestClose={onRequestClose} project={project} />
    );
  } else if (project.modalName === "CookbookModal") {
    modal = (
      <CookbookModal isOpen={isOpen} onRequestClose={onRequestClose} project={project} />
    );  }

  return <>{modal}</>;
}

export default Projects;