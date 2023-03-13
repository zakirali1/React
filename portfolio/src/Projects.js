import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import data from './generate.json'
import movie from './images/movie.png'
import readgen from './images/rm.png'
import wd from './images/wd.png'

function Projects() {

    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };

        const arr = [readgen,movie,wd]
        console.log(arr)

        const genImage = () => {
            return arr[index]
        
    }

    const listItems = data.map((item) => (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={genImage()} alt="First slide" />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
      
      ));

     
    
      return (
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={null}>
            {listItems}
           { console.log(index)}
        </Carousel>
      )
    
      
      
}

export default Projects