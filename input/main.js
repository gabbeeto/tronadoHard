import React from "react";
import "react-dom";
import "./styling/main.css";
import { createRoot } from "react-dom/client";
import Main from "./MainElement.js";
import Header from "./HeaderElement.js";

window.defaultLang = "spanish"

let root = createRoot(document.querySelector("body"));

const footerContent = {
  spanish: "esta pagina fue hecha por",
  english: "this website was made by",
}

renderRoot();

export function renderRoot() {
  root.render(
    <>
      <Header languageString={window.defaultLang} />
      <Main languageString={window.defaultLang} />
      <footer> {footerContent[window.defaultLang]} <a href="https://gabbeeto.github.io/">Gabbeeto</a></footer>

      <dialog id="instructions">
      </dialog>
    </>
  )
}


