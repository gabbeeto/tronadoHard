import React from 'react';
import "react-dom";
import { renderDialog } from "./dialog/main.js"

// text-In-Different-Language Section
const copyButtonFromH2 = {
  spanish: "copiar",
  english: "copy"
}

const extraInformationButton = {
  spanish: "Extra informacion acerca del server",
  english: "Extra information about the server",
}

const introductionH2FromArticle = {
  spanish: "introduccion a TronadoHard",
  english: "intruction to TronadoHard"
}


const downloadModAndInstaller = {
  spanish: "Descargar mods e instaladores",
  english: "Dwonload mods and installers"
}

const linksToMakeWindowLightweight = {
  spanish: "Enlances para hacer Windows más liviano",
  english: "Links to make Windows lightweight"
}


const downgradeGraphicsManually = {
  spanish: "Bajar graficos manualmente sin bajador de graficos",
  english: "Manually downgrade Graphics without 'The Graphic Downgrader'"
}

const h3TittleForPeopleWhoLikeReading = {
  spanish: "Para gente que les gusta leer",
  english: "For people who like reading"
}
const howToInstallmodButton = {
  spanish: "Como instalar mods",
  english: "How to install mods"
}


const howToDowngradeGraphics = {
  spanish: "Como bajar graficos",
  english: "How to downgrade graphics"
}


// functionsForButtons Section
function copyIp(event) {
  navigator.clipboard.writeText('TronadoHard.aternos.me:25198');
  const ip = document.querySelector('main > h2 > span');
  ip.style.color = "var(--red)";
  event.target.style.color = "var(--yellow)";
  event.target.style.backgroundColor = "black";
  setTimeout(() => {
    ip.style.color = "";
    event.target.style.color = "";
    event.target.style.backgroundColor = "";
  }, 300);
}

function openPopUp(dialogText) {
  let dialog = document.querySelector("dialog");
  renderDialog(dialogText);
  dialog.showModal();
}


export default function Main({ languageString }) {
  return (<>
    <main>
      <h2>ip: <span>TronadoHard.aternos.me:25198</span><button onClick={copyIp} id='inlineButton'>{copyButtonFromH2[languageString]}</button>
        <button onClick={() => openPopUp("extraInformation")}>{extraInformationButton[languageString]}</button>
      </h2>
      <article>
        <h2>{introductionH2FromArticle[languageString]}</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MeCq2c8e8F4?si=LLTJrGDq1sH8U_jW" title="YouTube video player For TronadoHard" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button onClick={() => openPopUp("downloadModAndInstaller")} >{downloadModAndInstaller[languageString]}</button>
        <button onClick={() => openPopUp("linksToMakeWindowLightweight")} >{linksToMakeWindowLightweight[languageString]}</button>
        <button onClick={() => openPopUp("downgradeGraphicsManually")} >{downgradeGraphicsManually[languageString]}</button>
      </article>
      <article>
        <h3>{h3TittleForPeopleWhoLikeReading[languageString]}</h3>
        <button onClick={() => openPopUp("howToInstallModButton")} >{howToInstallmodButton[languageString]}</button>
        <button onClick={() => openPopUp("howToDowngradeGraphics")} >{howToDowngradeGraphics[languageString]}
        </button>
      </article>
    </main>
  </>)
}
