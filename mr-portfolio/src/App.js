import logo from "../src/images/logo.svg";
import cute from "../src/images/cute-moose-flat.svg";
import "./App.css";

import profilePic from "../src/images/mre_profile.png"
import movieGeek from "../src/images/moviegeek.png";
import cowGiraffeShrimp from "../src/images/rate-my-cow-giraffe-shrimp.png";
import main_screen from "../src/images/main_screen.png";
import moon_phase from "../src/images/moon-phase-oakland-screen.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={cute} className="logo" alt="logo"></img>
      </header>
      <div className="section">
        <div className="blockus">
        <h1>Welcome to my Portfolio Page</h1>
        </div>
        <div className="blockus">
          <p>Greetings, I'm Max. You've found my little corner of the internet!</p>
        </div>
        <break></break>
        <div className="about">
          <img src={profilePic} alt="Photo of Max"></img>
          <div className="about-body">
            <p>Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet.</p>
          </div>
        </div>
        <h2><b>PROJECTS</b></h2>
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
                  A blog dedicated to sharing pictures of and commenting on cute animals.
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
        <div className="resume-wrapper">Resume
          <div></div>
        </div>
        <div></div>
        <div className="footer">
          <div className="tail">
            This will be colorful! Nunc pharetra finibus est at efficitur.
            Praesent sed congue diam. Integer gravida dui mauris, ut interdum
            nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac
            finibus porta. Nam quis arcu non lectus tincidunt fermentum.
            Suspendisse aliquet orci porta quam semper imperdiet. Praesent
            euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus
            mollis diam, sit amet facilisis lectus blandit at.
          </div>
          <aside class="aside">
            <h2>Want a lovely e-card?</h2>
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
