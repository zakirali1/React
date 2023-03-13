import React, { useState } from 'react'
import data from './generate.json'
import movie from './images/movie.png'
import readgen from './images/rm.png'
import wd from './images/wd.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProjectDetails from './Project3'
import quiz from './images/quiz.png';
import passwrd from './images/passwordgen.png';
import scheduler from './images/scheduler.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Projects2() {

    const [index, setIndex] = useState(-1)

    const arr = [readgen,movie,wd,quiz, passwrd, scheduler]
        console.log(arr)

        const genImage = (idx) => {
            return arr[idx % arr.length]
        
    }

    const handleClick = (idx) => {
      setIndex(idx);
    }

    const ProjectDetails = ({ project }) => {
      console.log(project)
      return (
        <div>
        <div className="project-card">
          <img src={genImage(project.id)} alt={project.title} />
        </div>
        <div className='project-text'>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        </div>
        </div>
      );
    };

    const listItems = data.map((item,idx) => {
return (
        <Card key={item.id} style={{ width: '24rem' }}>
        <Card.Img variant="top" src={genImage(item.id)} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => handleClick(idx)}>More Details</Button>
        </Card.Body>
      </Card>
);

    })
    
        return (
            <div className="projects">
           {listItems}
           {index !== -1 && <ProjectDetails project={data[index]} />}
           </div>
          );
   

  


}

export default Projects2