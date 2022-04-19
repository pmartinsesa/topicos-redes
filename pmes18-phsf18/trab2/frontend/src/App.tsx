import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Forms } from "./components/Forms";

import "./App.css";

function App(): any {
  return (
    <>
      <Header />
      <Forms />
      <Footer />
    </>
  );
}

export default App;
