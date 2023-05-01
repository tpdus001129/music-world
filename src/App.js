import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./component/Home.js";
import Guest from "./component/Guest.js";
import Top3 from "./component/Top3.js";
import Help from "./component/Help.js";
import {
  faHouseChimney,
  faPencil,
  faRankingStar,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <header className="flex">
        <div className="music-world">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/img/music_world.png"} />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">
              홈&nbsp;
              <FontAwesomeIcon icon={faHouseChimney} />
            </Link>
          </li>
          <li>
            <Link to="/top3">
              Top 3&nbsp;
              <FontAwesomeIcon icon={faRankingStar} />
            </Link>
          </li>
          <li>
            <Link to="/guest">
              댓글&nbsp;
              <FontAwesomeIcon icon={faPencil} />
            </Link>
          </li>
          <li>
            <Link to="/help">
              도움말&nbsp;
              <FontAwesomeIcon icon={faQuestion} />
            </Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top3" element={<Top3 />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
