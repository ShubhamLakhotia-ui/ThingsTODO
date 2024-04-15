import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "./landing.css"
import image1 from '../image/O6XzLOum4NKKMfZZNstpiKnUJRsC6yrgaRBRFgWf.webp';
import image2 from '../image/MXrpSCMtviJrXwsIrJzYKn1lDxODtLILJc3Ahtxp.webp';
import image3 from '../image/mzTGePUGW8N0xQoD0aT6UosoRudmneTQ65Tr2pAG.webp';
import image4 from '../image/gbpUhoB7rp6JWE2HN4pn0OCGgnUDVuGwFAQUOlkq.webp';
import image5 from "../image/adventure.jpg";
import image6 from "../image/hbd.jpg";
import image7 from "../image/date.jpg";
import image8 from "../image/at-home.jpg";
const Landing = () => {
  // State to hold exclusive experiences fetched from the API
  const [exclusiveExperiences, setExclusiveExperiences] = useState([]);

  // Function to fetch exclusive experiences from the API
  const fetchExclusiveExperiences = async () => {
    try {
      const response = await axios.get('http://localhost:4000/thingstodo/get-all-images');
      setExclusiveExperiences(response.data.images); 
      console.log(exclusiveExperiences)// Assuming the API returns an array of exclusive experiences
    } catch (error) {
      console.error('Error fetching exclusive experiences:', error);
    }
  };

  // Fetch exclusive experiences when the component mounts
  useEffect(() => {
    fetchExclusiveExperiences();
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-warning">Things</span>ToDO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">
                  Login/Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel */}
   
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block" src={image1} alt="First slide"  />
          </div>
          <div className="carousel-item">
            <img className="d-block" src={image2} alt="Second slide"  />
          </div>
          <div className="carousel-item">
            <img className="d-block" src={image3} alt="Third slide"  />
          </div>
          <div className="carousel-item">
            <img className="d-block" src={image4} alt="Fourth slide"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
 
      <div className="bg-warning py-4 text-center">
      <span style={{ fontWeight: 'bold', fontSize: '30px' }}>Exclusive Experience by ThingsToDo</span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto" style={{ marginTop: '60px', position: 'relative' }}>
            <div>
              <img src={image5} className="rounded mx-auto d-block" alt="Adventure" />
              <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>Adventure</p>
            </div>
          </div>
          <div className="col-auto" style={{ marginTop: '60px', position: 'relative' }}>
            <div>
              <img src={image6} className="rounded mx-auto d-block" alt="Birthday" />
              <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>Birthday</p>
            </div>
          </div>
          <div className="col-auto" style={{ marginTop: '60px', position: 'relative' }}>
            <div>
              <img src={image7} className="rounded mx-auto d-block" alt="Date Nights" />
              <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>Date Nights</p>
            </div>
          </div>
          <div className="col-auto" style={{ marginTop: '60px', position: 'relative' }}>
            <div>
              <img src={image8} className="rounded mx-auto d-block" alt="At Home" />
              <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>At Home</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="portfolio section-padding" id="portfolio" style={{ marginTop: '20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Our Services</h2>
              <p>
                At the heart of every event management team is the event manager, the mastermind behind the entire operation.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {exclusiveExperiences.map((service, index) => (
            <div className="col-12 col-md-12 col-lg-4" key={index}>
              <div className="card text-light text-center bg-white pb-2 h-100">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img alt="" className="img-fluid" src={`data:image/png;base64,${service.image.data}`} />
                  </div>
                  <h3 className="card-title">{service.type}</h3>
                  <p className="lead">{service.description}</p>
                  <button className="btn bg-warning text-dark">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   
    <section className="team section-padding" id="team" style={{ marginTop: '20px', marginBottom: '20px' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header text-center pb-5">
          <h2>Meet Our Team Memebers</h2>
          <p>
            At the heart of every event management team is the event manager, the mastermind behind the entire operation.
          </p>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
   
      <div className="col">
        <div className="card h-100 text-center">
          <div className="card-body d-flex flex-column justify-content-between" style={{ height: '400px', overflowY: 'auto' }}>
            <img alt="" className="img-fluid rounded-circle mb-3" src="img/team-1.jpg" />
            <h3 className="card-title">Creative Director</h3>
            <p className="card-text">
              The creative director is the visionary responsible for transforming ideas into tangible and awe-inspiring realities. They infuse events with creativity and innovation, crafting immersive environments that transport attendees to different worlds.
            </p>
            <div className="socials">
              <i className="bi bi-twitter text-dark mx-1"></i>
              <i className="bi bi-facebook text-dark mx-1"></i>
              <i className="bi bi-linkedin text-dark mx-1"></i>
              <i className="bi bi-instagram text-dark mx-1"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 text-center">
          <div className="card-body d-flex flex-column justify-content-between" style={{ height: '400px', overflowY: 'auto' }}>
            <img alt="" className="img-fluid rounded-circle mb-3" src="img/team-1.jpg" />
            <h3 className="card-title">Production Operations</h3>
            <p className="card-text">
            The creative director is the visionary responsible for transforming ideas into tangible and awe-inspiring realities. They infuse events with creativity and innovation, crafting immersive environments that transport attendees to different worlds.
            </p>
            <div className="socials">
              <i className="bi bi-twitter text-dark mx-1"></i>
              <i className="bi bi-facebook text-dark mx-1"></i>
              <i className="bi bi-linkedin text-dark mx-1"></i>
              <i className="bi bi-instagram text-dark mx-1"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 text-center">
          <div className="card-body d-flex flex-column justify-content-between" style={{ height: '400px', overflowY: 'auto' }}>
            <img alt="" className="img-fluid rounded-circle mb-3" src="img/team-1.jpg" />
            <h3 className="card-title">Technical Manager</h3>
            <p className="card-text">
            Behind the scenes, a technical wizard ensures that the audio, lighting, and video production aspects of a major event run flawlessly.
            </p>
            <div className="socials">
              <i className="bi bi-twitter text-dark mx-1"></i>
              <i className="bi bi-facebook text-dark mx-1"></i>
              <i className="bi bi-linkedin text-dark mx-1"></i>
              <i className="bi bi-instagram text-dark mx-1"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 text-center">
          <div className="card-body d-flex flex-column justify-content-between" style={{ height: '400px', overflowY: 'auto' }}>
            <img alt="" className="img-fluid rounded-circle mb-3" src="img/team-1.jpg" />
            <h3 className="card-title">Venue Manager</h3>
            <p className="card-text">
            The venue serves as the canvas on which the event’s narrative unfolds. The venue manager is responsible for overseeing every aspect of the event space, ensuring that it is transformed into a captivating setting.
            </p>
            <div className="socials">
              <i className="bi bi-twitter text-dark mx-1"></i>
              <i className="bi bi-facebook text-dark mx-1"></i>
              <i className="bi bi-linkedin text-dark mx-1"></i>
              <i className="bi bi-instagram text-dark mx-1"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 text-center" style={{alignItems:"center"}}>
          <div className="card-body d-flex flex-column justify-content-between" style={{ height: '400px', overflowY: 'auto' }}>
            <img alt="" className="img-fluid rounded-circle mb-3" src="img/team-1.jpg" />
            <h3 className="card-title">Venue Manager</h3>
            <p className="card-text">
            The venue serves as the canvas on which the event’s narrative unfolds. The venue manager is responsible for overseeing every aspect of the event space, ensuring that it is transformed into a captivating setting.
            </p>
            <div className="socials">
              <i className="bi bi-twitter text-dark mx-1"></i>
              <i className="bi bi-facebook text-dark mx-1"></i>
              <i className="bi bi-linkedin text-dark mx-1"></i>
              <i className="bi bi-instagram text-dark mx-1"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Repeat the same structure for other team members */}
    </div>
  </div>
</section>






   

      {/* Footer */}
      <footer className="bg-light p-2 text-center">
        <div className="container">
          <p className="text-warning">All Right Reserved By @ThingsToDo</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
