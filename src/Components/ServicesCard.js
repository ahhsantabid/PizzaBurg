import React from 'react'
import '../Style/ServicesStyle.css'


const ServicesCard = ({title,image,para,price}) => {
  return (
    <div>
        <div className="cardShow">
              <img src={image} class="cardImage" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p className="para">{para}</p>
                <p className="price">{price}</p>
                <button className="btn btn-primary">Order now</button> 

              </div>
            </div>
            </div>
  )
}

export default ServicesCard
