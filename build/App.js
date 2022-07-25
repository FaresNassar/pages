import React, { Fragment } from "react";
import Header from "./components/Nav/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import NB from "./components/Nav/NB";
import Face from "./components/gallery/Face";
import Mnav from "./components/UI/Mnav";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jerusalem from "./components/Pages/Jerusalem";
import Hebron from "./components/Pages/Hebron";
import Genin from "./components/Pages/Genin";
import Bethlehem from "./components/Pages/Bethlehem";
import Home from "./components/Home/Home";
import ContactForm from "./components/Form/ContactForm";



function App() {
  return (
    <Fragment>
      <NB />
      <Router>
        <Routes>
          <Route path="/" element={
            <>

              <Header />
              <Mnav />
              <Face />
            </>
          } />
          <Route path="/t" element={<ContactForm/>} />
          <Route path="/h" element={<Home/>} />
          <Route path="/jerusalem" element={<Jerusalem />} />
          <Route path="/Hebron" element={<Hebron />} />
          <Route path="/Genin" element={<Genin />} />
          <Route path="/Beth" element={<Bethlehem />} />

        </Routes>

      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
