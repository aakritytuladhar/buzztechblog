// import logo from "./logo.svg";
import "./App.css";
//rcc lekhnu
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import Navbar from "./components/NewsItem";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
const App = () => {
  // export default class App extends Component {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  // render() {
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }></Route>
          <Route
            exact
            path="business/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }></Route>
          <Route
            exact
            path="entertainment/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }></Route>
          <Route
            exact
            path="general/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }></Route>
          <Route
            exact
            path="health/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }></Route>{" "}
          <Route
            exact
            path="science/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }></Route>
          <Route
            exact
            path="sports/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }></Route>
          <Route
            exact
            path="technology/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }></Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Routes> */}
        {/* </Routes> */}
      </Router>
    </div>
  );
};
// }
export default App;
