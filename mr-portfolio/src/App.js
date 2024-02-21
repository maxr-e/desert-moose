import logo from "../src/images/logo.svg";
import cute from "../src/images/cute-moose-flat.svg";
import "./App.css";
// import reactPdfEmbed from "./util/reactPdfEmbed.js";
// import PDFViewerif from "./components/iframepdf.js";
// import PDFViewer from "./components/reactpdf.js";
// import PDFWorker from "./components/reactpdfworker.js";
// import PDFViewerDist from "./components/pdfjsDist.js";


import profilePic from "../src/images/mre_profile.png"
import movieGeek from "../src/images/moviegeek.png";
import cowGiraffeShrimp from "../src/images/rate-my-cow-giraffe-shrimp.png";
import main_screen from "../src/images/main_screen.png";
import meritBadge from "../src/images/programming_merit_badge.png"
import htmlLogo from "../src/images/HTML5_Badge.svg"
import css3Logo from "../src/images/CSS3_logo.svg"
import jsLogo from "../src/images/js_logo_svg.svg"
import nodeLogo from "../src/images/node_js_logo.svg"
import reactLogo from "../src/images/reactLogo.svg"
import MySQLLogo from "../src/images/mysql-official.svg"
import mongoLogoDark from "../src/images/MongoDB_Fores-Green.svg"
import mongoLogoLite from "../src/images/MongoDB_Spring-Green.svg"
import arcLogo from "../src/images/ArcGIS_logo_240.png"
import moon_phase from "../src/images/moon-phase-oakland-screen.png";


function App() {
  return (
    <div className="App">
      {/* <header className="header"> */}
        {/* <img src={cute} className="logo" alt="logo"></img> */}
      {/* </header> */}
      <div className="animated delayed"></div>
      <div className="section">
        <div className="header">
          <h1>Welcome to my Portfolio Page</h1>
        </div>
        <nav>
          <ul className="navbar">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="howdy">
          <p>
            Greetings, I'm Max. You've found my little corner of the internet!
          </p>
        </div>
        <div className="about">
          <img src={profilePic} alt="Portrait of Max"></img>
          <div className="about-body">
            <p>
            I've had a pretty eclectic life. Pet supply sales, animal clinic assistant, university housing counselor, pedicab operator, science instructor, municipal aquarium volunteer, wood boat renovator, construction project bid facilitator, water service technician, water system inspector, handyman... all experiences that have given me a well-rounded set of hard and soft skills. But the one constant interest in my life that has had an effect in everything I set myself to is... programming! GIS/GPS projects with pedicabbing and sailing, automation with aquarium and construction project analysis, coding with water service technology, handheld sensors and sales databases- all roads lead to Rome, and my Rome is programming!
            </p>
          </div>
        </div>
        <h2 id="projects">
          <b>PROJECTS</b>
        </h2>
        <div className="projects">
          <div className="project-card-wrapper">
            <div className="project-card">
              <div className="project-header">
                <h3>
                  <a
                    href="https://jogomez.github.io/MovieDetails/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Movie Geek
                  </a>
                </h3>
                <p>
                  A webpage where you can learn more about your favorite movies.
                </p>
              </div>
              <div className="project-image">
                <img src={movieGeek} alt="Screenshots of Movie Geek"></img>
              </div>
            </div>
          </div>
          <div className="project-card-wrapper">
            <div className="project-card">
              <div className="project-header">
                <h3>
                  <a
                    href="https://polar-temple-53244.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rate My Cow, Giraffe or Shrimp
                  </a>
                </h3>
                <p>
                  A blog dedicated to sharing pictures of and commenting on cute
                  animals.
                </p>
              </div>
              <div className="project-image">
                <img
                  src={cowGiraffeShrimp}
                  alt="Screenshot of Rate My Cow, Giraffe or Shrimp"
                  height="80px"
                  width="auto"
                ></img>
              </div>
            </div>
          </div>
          <div className="project-card-wrapper">
            <div className="project-card">
              <div className="project-header">
                <h3>
                  <a
                    href="https://ancient-ravine-85592.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Star Gazers
                  </a>
                </h3>
                <p>
                  A group project that utilizes the full MERN stack to deliver
                  an app that lets users explore the night sky via stars,
                  constellations, moon phase calendars and other celestial
                  events.
                </p>
              </div>
              <div className="project-image">
                <img
                  src={main_screen}
                  alt="Screenshot the main page of Star Gazers"
                  height="80px"
                  width="auto"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <h2 id="resume">
          <b>RESUME</b>
        </h2>
        <div className="resume-wrapper">
          <div className="skills-wrapper">
            <div className="skills">
              <div className="tech-skills">
                <h3>Technical Skills</h3>
                <img
                  src={meritBadge}
                  className="tech-logo"
                  alt="programming merit badge"
                ></img>
                <ul className="tech-list">
                  <li>
                    <img
                      src={htmlLogo}
                      className="tech-logo"
                      alt="html5 logo"
                    ></img>
                    HTML5
                  </li>
                  <li>
                    <img
                      src={css3Logo}
                      className="tech-logo"
                      alt="css3 logo"
                    ></img>
                    CSS3
                  </li>
                  <li>
                    <img
                      src={jsLogo}
                      className="tech-logo"
                      alt="javascript logo"
                    ></img>
                    JavaScript
                  </li>
                  <li>
                    <img
                      src={nodeLogo}
                      className="tech-logo"
                      alt="node.js logo"
                    ></img>
                    Node.js
                  </li>
                  <li>
                    <img
                      src={reactLogo}
                      className="tech-logo"
                      alt="react logo"
                    ></img>
                    React
                  </li>
                  <li>
                    <img
                      src={MySQLLogo}
                      className="tech-logo"
                      alt="MySQL logo"
                    ></img>
                    MySQL
                  </li>
                  <li>
                    <img
                      src={mongoLogoLite}
                      className="tech-logo"
                      alt="mongoDB logo"
                    ></img>
                  </li>
                  <li>
                    <img
                      src={arcLogo}
                      className="tech-logo"
                      alt="arcGIS logo"
                    ></img>
                    ArcGIS
                  </li>
                  <li></li>
                </ul>
              </div>
              <div className="customer-service">
                <h3>Customer Service</h3>
                <p>
                Customer empathy has been another common theme throughout my professional career. It's easy for everyone to see the benefits of a pet stroller unless you understand how a pet parent of a sick animal feels! Knowing the common speed-bumps customers run into when looking for, trying out, or returning a product allows for anticipating issues before they occur. Being able to meet a customer at their level helps develop trust and better communication, a standard in regularly exceeding expectations. My 15+ years of customer care  over several fields has given me many tools for championing the customer's voice.
                </p>
              </div>
              <div className="collab-problem">
                <h3>Collaborative Problem-solving</h3>
                <p>
                Working in several large organizations has given me the opportunity to participate in projects with diverse teammates, skill-sets, authority and stake-holders. I know how to assist in a supportive role, participate as an expert advisor, or lead the project within any scope required, across several departments. Learning about your teammate's strengths and areas of improvement can speed development and build trust and broaden colleague's skills. Communication is critical in order to roll with dynamic demands and constraints. Innovation and encouraging different ideas among the team will ultimately surpass the customer's expectations. These are hallmarks of effective collaboration I've become very familiar with.
                </p>
              </div>
              <div className="detail-focused">
                <h3>Detail-focused</h3>
                <p>
                My attention to detail has served me well through challenges I face. Precision and reliability can conflict with time-management, but I have delivered results from scheduled and emergency field-calls, to audits of thousands of customer consumption and billing accounts, to flawless inventory ordering and control. I am keenly observant and persistent, sharpened through my studies of the natural, dynamic world of marine biology and marketing to customers in real-time. I have practiced high-level technical, emotional and logical communication from reporting on water equipment evaluation, treatment processes and BMPs, counseling, college and grade school instruction to presenting for public stakeholders. These experiences have lent to clean code and quick bug fixing in my programming.
                </p>
              </div>
            </div>
          </div>
          <div className="embedded-resume-box">
            <embed
              src="/Royal-Eisenberg_Resume.pdf"
              type="application/pdf"
              id="pdf-container"
            />
          </div>
            <a
              href="/Royal-Eisenberg_Resume.pdf" download id="download-link-btn">Download Resume
            </ a>
        </div>
        <div></div>
        <h2 id="contact">
          <b>REACH OUT</b>
        </h2>
        <div className="footer">
          <div className="contact-methods">
            Email me at maxroyal.eisenberg@gmail.com, find me at LinkedIn and GitHub, and give me a shout at X (formerly Twitter)
          </div>
          
          {/* TODO: Make icons links to my media pages */}
          <div className="flex row-span-1 items-center py-16">
        <a href="https://github.com/ryansheehy0" target="_blank">
          <img src="/logos/github.svg"/>
        </a>
        <a href="https://www.linkedin.com/in/ryan-sheehy-8513a5249/" target="_blank">
          <img src="/logos/linked-in.svg"/>
        </a>

      </div>
          <aside className="aside">
            <h2>Want a lovely e-card?</h2>
            <p>I'll send you a random and unique short dialog of two popular fictional characters quoting an inspitational historic figure! Who knows, maybe it will forever change the trajectory of your life for the better.</p>
            <form>
              <input type="text" placeholder="E-mail address" />
              <button>Submit</button>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
