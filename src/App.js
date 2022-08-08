import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact '
import Services from './Components/Services'
import Policy from './Components/Policy'
import Navbar from './Components/Navbar'
import Error from './Components/Error'
import Footer from './Components/Footer'
import Team from './Components/Team'

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/services" component={Services}/>
       <Route path="/policy" component={Policy}/>
       <Route component={Error}/>
       <Route path="/team" component={Team}/>
       


    </Switch>
    <Footer/>
    
    
    
    </>
  )
}

export default App