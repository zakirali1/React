import React from 'react'
import {NavLink} from 'react-router-dom';
import vsc from './images/vsc.svg'

function Home() {
  return (
    <div>
      <div className="jumbotron" style={{ backgroundColor: 'black', color: 'white'}}>
  <h1 className="display-4">Hi, I'm Zakir</h1>
  <p className="lead">Welcome!</p>
  <hr className="my-4" />
  <p>I am a front-end developer</p>
  <NavLink to="https://drive.google.com/file/d/1yus-vtllPinCTGIpaoDtEWJEYvW_7dUa/view?usp=sharing" className="btn btn-primary btn-lg" role="button">CV</NavLink>
</div>
{/* <div className="img-vsc">
<img  src={vsc} alt="" />
</div> */}
    </div>
  )
}

export default Home