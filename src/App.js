import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SetTimeOut from "./components/setTimeOut/setTimeOut";
import Hover from "./components/usehover/hover";
import DebounceApp from "./components/usedebounce/app";

import Phonenumber from "./components/phonenumber/phonenumber";
import UseFocus from "./components/usefocus/app";
import IsMounted from "./components/isMounted/app";
import Application from "./components/useArray/app";
import OutsideClick from "./components/outsideClick/app";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="side-bar">
          <Link className="item" to="/useprev">
            UsePrev
          </Link>
          <Link className="item" to="/usehover">
            useHover
          </Link>
          <Link className="item" to="/usedebounce">
            Use Debounce
          </Link>
          <Link className="item" to="/phonenumber">
            Phone Number{" "}
          </Link>

          <Link className="item" to="/useArray">
            Use Array
          </Link>
          <Link className="item" to="/useFocus">
            Use Focus
          </Link>
          <Link className="item" to="/OutsideClick">
            OutsideClick
          </Link>
          <Link className="item" to="/IsMounted">
            IsMounted
          </Link>
        </div>

        <div className="components">
          <Routes>
            <Route path="/" element={<div>Select from Side Bar</div>} />
            <Route path="/useprev" element={<SetTimeOut />} />
            <Route path="/usehover" element={<Hover />} />
            <Route path="/usedebounce" element={<DebounceApp />} />
            <Route path="/phonenumber" element={<Phonenumber />} />
            <Route path="/useArray" element={<Application />} />
            <Route path="/UseFocus" element={<UseFocus />} />
            <Route path="/OutsideClick" element={<OutsideClick />} />

            <Route path="/IsMounted" element={<IsMounted />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
