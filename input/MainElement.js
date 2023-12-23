import React from 'react';
import "react-dom";

const copyButtonFromH2 = {
  spanish: "copiar",
  english: "copy"
}

const extraInformationButton = {
  spanish: "Extra informacion acerca del server",
  english: "Extra information about the server",
}

const introductionH2FromArticle = {
  spanish:"introduccion a TronadoHard",
  english:"intruction to TronadoHard" 
}


const downloadModAndInstaller = {
  spanish:"Descargar mods e instaladores",
  english:"Dwonload mods and installers" 
}

const linksToMakeWindowLightweight = {
  spanish:"Enlances para hacer Windows más liviano",
  english:"Links to make Windows lightweight" 
}


const downgradeGraphicsManually = {
  spanish:"Bajar graficos manualmente sin bajador de graficos",
  english:"Manually downgrade Graphics without 'The Graphic Downgrader'" 
}

const h3TittleForPeopleWhoLikeReading = {
  spanish:"Para gente que les gusta leer",
  english:"For people who like reading" 
}
const howToInstallmodButton = {
  spanish:"Como instalar mods",
  english:"How to install mods" 
}


const howToDowngradeGraphics = {
  spanish:"Como bajar graficos",
  english:"How to downgrade graphics" 
}

export default function Main({languageString}) { 
  return (<>
    <main>
      <h2>ip: <span>TronadoHard.aternos.me:25198</span><button id='inlineButton'>{copyButtonFromH2[languageString]}</button>
        <button data-id='5'>{extraInformationButton[languageString]}</button>
      </h2>
      <article>
        <h2>{introductionH2FromArticle[languageString]}</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MeCq2c8e8F4?si=LLTJrGDq1sH8U_jW" title="YouTube video player For TronadoHard" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button data-id='0'>{downloadModAndInstaller[languageString]}</button>
        <button data-id='3'>{linksToMakeWindowLightweight[languageString]}</button>
        <button data-id='4'>{downgradeGraphicsManually[languageString]}</button>
      </article>
      <article>
        <h3>
          {h3TittleForPeopleWhoLikeReading[languageString]}
        </h3>
        <button data-id='1'>{howToInstallmodButton[languageString]}</button>
        <button data-id='2'>
          {howToDowngradeGraphics[languageString]}
          </button>
      </article>
    </main>
  </>)
}
