import React from 'react';
import './ProjectCard.css';
import LazyLoad from 'react-lazyload';
import ReactGA from 'react-ga';

function ProjectCard(props) {
  const clickEvent = (title, type) => {
    ReactGA.event({
      category: 'User',
      action: `Clicked ${type} link for ${title}`
    });
  }

  return (
    <div className='project-card'>
      <LazyLoad offset={200} once>
        <img className='project-image' src={props.project.image} alt={props.project.title + ' landing page.'} />
      </LazyLoad>
      <div className='project-wrapper'>
        <h5 className='project-title'>{props.project.title}</h5>
        <p>{props.project.description}</p>
        <p>{props.project.languages.map((language, i) => <span key={i} className='language'>{language}{i + 1 === props.project.languages.length ? '' : ', '}</span>)}</p>
        <div className='project-links'>
          <a onClick={() => clickEvent(props.project.title, 'Live')} target='_blank' rel="noopener noreferrer" href={props.project.live}>Live</a>
          <a onClick={() => clickEvent(props.project.title, 'Repo')} target='_blank' rel="noopener noreferrer" href={props.project.repo}>Repo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;