// src/app/page.js
import { promises as fs } from 'fs';
import path from 'path';

async function Home() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="This Page is designed for generate caption for vedios" />
  <meta name="author" content="Mohamed Refat & Adel Hassan" />
  <meta name="keywords" content="Java Sript & HTML & CSS" />
  <link rel="stylesheet" href="styles/index.css" />
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  <link className="photo" rel="icon" href="images/bx-captions.svg" type="image/x-icon" />
  {/* remeber to change the title */}
  <title>CaptionGenerator</title>
  {/* header starts here */}
  <header className="head">
    {/* <a href="#Home" class="logo">CaptionCraftVerse</a> */}
    <img src="images/_e16539b1-761d-4317-9d11-b501217506dc.jpg" alt="logo" className="logo" />
    <nav className="navbar">
      <a href="#Home">Home</a>
      <a href="#Services">Services</a>
      <a href="#Contacts">Contacts</a>
      <a href="login-page/index.html" target="_blank">login-form</a>
    </nav>
  </header>
  {/* header ends here */}
  {/* main page starts here */}
  <section className="home" id="Home">
    <div className="homecontent">
      <h1>Welcome Back</h1> 
      <h2>Save Time, Write Better Captions</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Beatae unde aut sapiente reiciendis velit? Labore, nisi incidunt,
        blanditiis quam voluptatum nulla possimus maiores quo vel perspiciatis, 
        nesciunt et facilis esse?
      </p> 
      {/* this will connect to the actual page to generate the caption if you are already log in */}
      <a href="login-page/index.html" target="_blank">Get Started</a>
      {/* <div class="socialicons">

      </div> */}
    </div>
    <div className="social">
      <a href="#"><i className="bx bxl-meta" /></a>
      <a href="#"><i className="bx bxl-instagram" /></a>
      <a href="#"><i className="bx bx-mail-send" /></a>
    </div>
  </section>
  {/* main page ends here */}
  {/* Services section starts here */}
  <section className="Services" id="Services">
    <h1>Services</h1>
    <div className="content">
      <div className="card">
        <div className="icon">
          <i className="bx bx-text" />
        </div>
        <div className="info">
          <h2>Audio to Text</h2>
          <h3>Transfer audio to Text by any languages you choose</h3>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <i className="bx bxs-captions" />
        </div>
        <div className="info">
          <h2>Generate Caption</h2>
          <h3>Generate Caption For Your Videos to any language you choose</h3>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <i className="bx bx-download" />
        </div>
        <div className="info">
          <h2>Dowload</h2>
          <h3>Dowload Your Video after generation Caption</h3>
        </div>
      </div>
    </div>
  </section>
  {/* Services section ends here */}
  {/* Contacts Section starts here */}
  <section className="Contacts" id="Contacts">
    <h1>Contacts</h1>
    <div className="content">
      <div className="card">
        <div className="icons">
          <i className="bx bx-envelope" />
        </div>
        <div className="information">
          <h2>Mail</h2>
          <p>captiongenerator@gmail.com</p>
        </div>
      </div>
      <div className="card">
        <div className="icons">
          <i className="bx bx-headphone" />
        </div>
        <div className="information">
          <h2>Phone</h2>
          <p>+201123392044</p>
        </div>
      </div>
    </div>
  </section>
  {/* Contacts Section ends here */}
  {/* footer stats here */}
  <footer className="foot">
    <div className="text">
      <p>Copyright <span>CaptionCraftVerse</span> © 2024</p>
    </div>
    <div className="social_con">
      <a href="#"><i className="bx bxl-meta" /></a>
      <a href="#"><i className="bx bxl-instagram" /></a>
      <a href="#"><i className="bx bx-mail-send" /></a>
    </div>
  </footer>
  {/* footer ends here */}
</div>

  );
}

export default Home;
