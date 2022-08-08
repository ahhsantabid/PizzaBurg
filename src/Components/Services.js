import React from 'react'
import ServicesCard from './ServicesCard'
import '../Style/ServicesStyle.css'
import Menu from '../Style/ServiceApiData'

const Services = () => {
  return (
    <div>

      <h2>Teast the Best</h2>

      <div className="container">
       
  

    {Menu.map((values)=>{
              return(
                <>
                 <div className="box">
                  <ServicesCard  title={values.title} para={values.para} image={values.image} price={values.price}/>

                  </div>
                
                
                </>
              )
    })}

  </div>


      
      

 
 </div>
  )
}

export default Services