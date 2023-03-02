import React from 'react';
import './App.css';
import Projects from './components/Projects';
import ContactFooter from './components/Contact';
import Header from './components/Navbar';

const App = () => {
  return (
    <div className='container'>
        <Header />
      <hr></hr>
      <div className='about-section'>
          <h1 id='about'>About Me</h1>
          <p className='paragraph-about'>I am a self-taught software developer that enjoys developing creative and efficient solutions. Throughout my self-learning adventure, I have gained proficiency in a variety of programming languages, including Python, HTML, CSS, React js and JavaScript. 
           I'm also experienced with database management technologies such as MySQL and MongoDB.
          <br></br>
          <br></br>
          <br/>Here is a full list of all the languages and frameworks I am well versed in:
          <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Redux</li>
            <li>React js</li>
            <li>JavaScript</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
          <br></br>
          <br></br>
          <img src='https://i.pinimg.com/originals/ff/8e/17/ff8e17fb79bb973189be6d315e9fb4a9.png' className='languages-image' alt='new photot' />
          <br></br>
          <br></br>
          <br></br>
          I've been working on a variety of personal projects that have given me hands-on expertise in areas such as: Data Visualization, Game Development and Web Scraping. 
          I've also participated in open-source communities, contributing to a variety of projects.
          <br></br>
          <br></br>
          <br></br>
          I am constantly interested in learning new technologies and programming languages. 
          I am a quick learner who is always searching for new challenges to help me better. 
          I am delighted to continue my education in the field of software development and to work on initiatives that will benefit society.
</p>
      <hr></hr>
      </div>
      <Projects />
      <hr></hr>
      <ContactFooter />
    </div>
  )
}

export default App
