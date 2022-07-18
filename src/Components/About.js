import React from 'react';
import fb from './images/fb.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';

export default function About() {

  return (

    <div className='container my-4'>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{ border: "1px solid #071e22" }}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={{ backgroundColor: "#071e22", color: "white", borderBottom: "1px solid white" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About the Developer
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Murtaza Burhani,</strong> an aspiring IT professional is currently pursuing B.E. in Information Technology from MCT's Rajiv Gandhi Institute of Technology, Mumbai. Currently in the Third Year of his course, Murtaza is passionate about coding and has the working knowledge of different programming languages such as C, C++, Java, Python, HTML, CSS, JavaScript, ReactJS etc.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "1px solid #071e22" }}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={{ backgroundColor: "#071e22", color: "white", borderBottom: "1px solid white" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Contact Us
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Contact us on:</strong>
              <ul style={{ listStyleType: "none", display: "flex" }}>
                <li className='mx-3 my-3'> <img src={fb} alt="fb" /> <a className='mx-1' href="https://www.facebook.com/hamid7653/" target="_blank" rel="noopener noreferrer">Facebook</a> </li>
                <li className='mx-3 my-3'> <img src={instagram} alt="instagram" /> <a className='mx-1' href="https://www.instagram.com/mhamid.7/" target="_blank" rel="noopener noreferrer">Instagram</a> </li>
                <li className='mx-3 my-3'> <img src={linkedin} alt="linkedin" /> <a className='mx-1' href="https://www.linkedin.com/in/murtaza-burhani-ab38a935/" target="_blank" rel="noopener noreferrer">LinkedIn</a> </li>
                <li className='mx-3 my-3'> <img src={twitter} alt="twitter" /> <a className='mx-1' href="https://twitter.com/Murtaza7653" target="_blank" rel="noopener noreferrer">Twitter</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "1px solid #071e22" }}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={{ backgroundColor: "#071e22", color: "white" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Queries
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Please submit your queries at : </strong>
              <a className='mx-1' href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer">murtazaburhani62@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}