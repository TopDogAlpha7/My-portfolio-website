import React, { Component } from 'react';
import './Projects.css'


class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "Spotify Api",
        description: "This is a program I made using spotipy and the spotify API, it basically takes the date you enter at the beginning and it searches for the top 100 songs from that time, scrapped from the billboard 100 website and then it compiles a playlist using the data it gathered on spotify",
        technologies: ["Python", "JSON", "Spotify API"],
        imageUrl: "https://community.spotify.com/t5/image/serverpage/image-id/134184i72175B8A0BD45C59/image-size/medium?v=v2&px=400",
        codeUrl: "https://github.com/TopDogAlpha7/Web-Scrapped-Songs-For-Spotify"
      },
      {
        id: 2,
        title: "Calculator",
        description: "A simple calculator program made using the React library. It works just as a normal calculator with all the functions, this is just a showcase of my skills",
        technologies: ["JavasScript", "React", "HTML", "CSS"],
        imageUrl: "https://img.freepik.com/premium-vector/calculator-with-modern-flat-style_3322-74.jpg?size=338&ext=jpg",
        codeUrl: "https://github.com/TopDogAlpha7/calculator"
      },
      {
        id: 3,
        title: "Crossing Road",
        description: "A simple replica of the popular game: 'Crossing Road' made using python and pygame. The difficulty gets harder as you level up, thus making it fun and competitive",
        technologies: ["Python", "Pygame"],
        imageUrl: "http://4.bp.blogspot.com/_1zhGC3jiUeY/TG0DbEzAeAI/AAAAAAAAADc/SAcgAZTebmI/s1600/Frogger.png",
        codeUrl: "https://github.com/TopDogAlpha7/Crossing-Road-Game"
      },
      {
        id: 4,
        title: "Todo List",
        description: "A simple todo list program made using the react library, it works just as a normal todo list where you are able to add and remove tasks",
        technologies: ["JavasScript", "React", "HTML", "CSS"],
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgJu1HwvczJ2Eh43vdzGwGbivwkWS2sq1Cw&usqp=CAU",
        codeUrl: "https://github.com/TopDogAlpha7/TodoList"
      }
    ]
  };

  render() {
    const { projects } = this.state;

    return (
      <div>
        <h1 id='project'>Projects</h1>
        {projects.map(project => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Technologies used: {project.technologies.join(", ")}</p>
            <img src={project.imageUrl} alt={project.title} className='project-images'/>
            <p>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Code</a>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
