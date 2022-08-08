import React from 'react'
import '../Style/AboutStyle.css'

import Team from './Team'


const About = () => {
  return (
    <div>
      <div className="aboutFlied">
        <div className="heading"><h2>Know More About <span>PizzaBarg</span> </h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ad. Ipsam dolorem veritatis atque ex, voluptatem amet consequatur excepturi nulla!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui iusto eveniet.</p>
         

        </div>


        <div className="aboutImg">
          <img src="https://images.pexels.com/photos/2918521/pexels-photo-2918521.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </div>

      <div className="aboutFlied">
        <div className="aboutImg">
          <img src="https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>


        <div className="heading"><h2>History of <span>PizzaBurg</span> </h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ad. Ipsam dolorem veritatis atque ex, voluptatem amet consequatur excepturi nulla!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui iusto eveniet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at exercitationem odio? Nobis deleniti temporibus necessitatibus nemo eaque maiores natus.</p>
        </div>

      </div>

     

     

    </div>
  )
}

export default About
