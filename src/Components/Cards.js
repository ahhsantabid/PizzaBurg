import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/CardStyle.css'
import Team from './Team'



const Cards = ({title,para,image}) => {
  return (
    <div>
      
<div className="colom">
            
              <img src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="para">{para}</p>
                <button className="btn btn-primary">Read more</button> 
              </div>
            </div>
          </div>
         

  )
}

export default Cards