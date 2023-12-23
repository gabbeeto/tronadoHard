import React from 'react';
import "react-dom";



export default function Main() {

  return (<>
    <main>
      <h2>ip: <span>TronadoHard.aternos.me:25198</span><button id='inlineButton'>Copiar</button>
        <button data-id='5'>Extra informacion acerca del server</button>
      </h2>
      <article>
        <h2>introduccion a TronadoHard</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MeCq2c8e8F4?si=LLTJrGDq1sH8U_jW" title="YouTube video player For TronadoHard" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button data-id='0'>Descargar mods e instaladores</button>
        <button data-id='3'>Links para hacer Windows más liviano</button>
        <button data-id='4'>bajar graficos manualmente sin bajador de graficos</button>
      </article>
      <article>
        <h3>Para gente que les gusta leer</h3>
        <button data-id='1'>Como instalar mods</button>
        <button data-id='2'>Como bajar graficos de Minecraft</button>
      </article>
    </main>
  </>)
}
