import waed from "./waed.jpg"
import dana from "./dana.jpg"
import jenan from "./jenan.jpg"
import sarah from "./sarah.jpg"
import taima from "./taima.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function App() {
  function edit() {
    alert("Great Shot!");
  }

  return (
    <div>
      <div className="card">
        <div className="cover">

        </div>
        <div className="container">
          <i onClick={edit}> <FontAwesomeIcon icon={faEdit} /></i>

          <img src={waed} />

          <h1>Waed Dawaghreh</h1>
          <p className="title">Jordan, Irbid</p>
          <h2 style={{ fontSize: "24px" }}>Trainee</h2>
          <p style={{ padding: "0 1rem 1rem 1rem" }}>Trainee at Coding Academy by Orange || Full stack developer in process</p>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>

        </div>
      </div>

      <div className="card">
        <div className="cover">

        </div>
        <div className="container">
          <i onClick={edit}> <FontAwesomeIcon icon={faEdit} /></i>

          <img src={dana} />
          <h1>Dana Toughoj</h1>
          <p className="title">Jordan, Amman</p>
          <h2 style={{ fontSize: "24px" }}>Trainee</h2>
          <p style={{ padding: "0 1rem 1rem 1rem" }}>Trainee at Coding Academy by Orange || Full stack developer in process</p>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>

      <div className="card">
        <div className="cover">

        </div>
        <div className="container">
          <i onClick={edit}> <FontAwesomeIcon icon={faEdit} /></i>

          <img src={jenan} />
          <h1>Jenan Musallam</h1>
          <p className="title">Jordan, Amman</p>
          <h2 style={{ fontSize: "24px" }}>Trainee</h2>
          <p style={{ padding: "0 1rem 1rem 1rem" }}>Trainee at Coding Academy by Orange || Full stack developer in process</p>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>


      <div className="card">
        <div className="cover">

        </div>
        <div className="container">
          <i onClick={edit}> <FontAwesomeIcon icon={faEdit} /></i>

          <img src={sarah} />
          <h1>Sarah Eswed</h1>
          <p className="title">Jordan, Amman</p>
          <h2 style={{ fontSize: "24px" }}>Trainee</h2>
          <p style={{ padding: "0 1rem 1rem 1rem" }}>Trainee at Coding Academy by Orange || Full stack developer in process</p>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>


      <div className="card">
        <div className="cover">

        </div>
        <div className="container">
          <i onClick={edit}> <FontAwesomeIcon icon={faEdit} /></i>

          <img src={taima} />
          <h1>Taima’ Al-fokaha’</h1>
          <p className="title">Jordan, Irbid</p>
          <h2 style={{ fontSize: "24px" }}>Trainee</h2>
          <p style={{ padding: "0 1rem 1rem 1rem" }}>Trainee at Coding Academy by Orange || Full stack developer in process</p>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>



    </div>




  );
}

export default App;
