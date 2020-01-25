import React from 'react';
import './About.css';
import WordList from '../WordList/WordList';

function About() {
  return (
    <section className='about-section'>
      <div className='section-wrapper'>
        {/* <h2>About Me</h2> */}
        <h2 className='title'>I'm a web developer.</h2>
        <p>I spend my time building new websites and tools while simultaneously willing quirky side-projects into existence. I also have an unhealthy obsession with Elon Musk, I tend to impulsively learn new things for no apparent reason, and I think Indie music is pretty cool.</p>
        <p className='test'><br></br>Things I speak:</p>
        <WordList words={['HTML5', 'CSS3', 'Javascript', 'jQuery', 'React', 'Git', 'AJAX', 'Node', 'Postgres', 'Python']} />
        <p>But don't worry, I also speak human languages like English and French.</p>
      </div>
    </section>
  );
}

export default About;