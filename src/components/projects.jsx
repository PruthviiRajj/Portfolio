import React from 'react'
import '../css/card.css';
const Projects = ({img,title,skills,link}) => {
  return (
    <div className='col-4 mt-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top p-1" alt="..."/>
            <div className="card-body">
                {
                    skills.map((skill)=> <p className='btn btn-light ms-1'>{skill}</p>)
                }
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={link} className="btn btn-primary">App</a>
            </div>
        </div>
    </div>
  )
}

export default Projects