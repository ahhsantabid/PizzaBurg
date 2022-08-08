import React from 'react'
import '../Style/HomeStyle.css'
import About from '../Components/About'
import Team from './Team'
import Policy from './Policy'
import Services from './Services'
import Contact from './Contact '


const Home = () => {
  return (

      <>
      <div className="home-container">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>BBQ Chicken Pizza</h5>
        <p>More spicy, more tendy and different in test.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Chees Velvate Pizza</h5>
        <p>We are trying to introducing with you the best Pizza in town.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5> Spanish Dessert Mello</h5>
        <p>Most Famous Dessert In our Resturant</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


       
      </div>
   
      <About/>
      <Team/>
      <Services/>
      <Contact/>
      <Policy/>
      
      </>
   
  )
}

export default Home




