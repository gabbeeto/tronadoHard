import React from 'react';
import "react-dom";
import {renderRoot} from "./main.js"

const buttonFromHeader = {
  english: "Español",
  spanish: "English",
}


export default function Header({languageString}) {
  return (<header>
    <h1>TronadoHard</h1>
    <button onClick={() => {
    window.defaultLang = (window.defaultLang == "spanish") ? "english" : "spanish";
    renderRoot();
    }}> {buttonFromHeader[languageString]} </button>
  </header>)
}
