import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cards from './Cards'
import Data from './ApiDataTeam'
import '../Style/CardStyle.css'




const Team = () => {
  return (
    <div>
         <div className="text-center text-info"><h2>Meet Our Team</h2></div>

<Switch>
<Route exact path="/team" component={Team} />

</Switch>
<div className="container">
  

    {Data.map((values)=>{
              return(
                <>
                <div className="box">
                  <Cards  title={values.title} para={values.para} image={values.image}/>

                </div>
                
                </>
              )
    })}
  
  </div>
</div>
   
  )
}

export default Team