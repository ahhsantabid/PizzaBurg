import React from 'react'
import '../Style/AboutStyle.css'
import '../Style/ContactStyle.css'
import { MdLocationOn } from "react-icons/md";



const Contact  = () => {
  return (
    <div>
         <div className="aboutFlied">
        <div className="heading"><h2>Location <span>PizzaBarg <MdLocationOn/></span> </h2>
          <p>House#12/A,road#45, section#B, Mirpur-1, besides Sony Cinema Hall .</p>
          <p>Phone: 018596254224, 01256987432, 236541258654</p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui iusto eveniet.</p>
          

        </div>


        <div className="aboutImg">
          <img src="../location.png" alt="" />
        </div>
      </div>
           


      <div className="text-center"><h2>Contact US</h2></div>
      <div className="contactus">
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Emter your name "/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Mobile</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="+8801######### "/>
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Address</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Emter your Address "/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Describe your issue</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
      </div>

      </div>
  )
}

export default Contact 