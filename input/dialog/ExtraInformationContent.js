import React from "react"
import "react-dom"
import { txt } from "./DownloadModAndInstallerContent"


export default function() {
  return (<div>
    <dl>
      <dt className="titleForInformation">{txt("Version de minecraft", "Minecraft version")}:</dt>
      <dd>1.20.1</dd>

      <dt className="titleForInformation">{txt("Version de Forge", "Forge version")}:</dt>
      <dd>47.2.18({txt("Recomendado para usar OptiFine HD U I6 para minecraft 1.20.1 pero puedes usar cualquiera que sea arriba de 47.1.0. Versiones inferiores tendran problemas de compatiblidad con algunos mods requeridos","Recommended for OptiFine HD U I6 for Minecraft 1.20.1 but you can actually use whatever version you like for Forge unless it's below 41.1.0 because you won't be able to play because of some mods otherwise")})</dd>

      <dt className="titleForInformation">{txt("es necesario usar el instalador?","is it necessary to use the installer?")}</dt>
      <dd>{txt(`Si sabes instalar mods de minecraft, no es necesario usar instalador. En los links donde descargas el instalador, vienen con los mods separados en sus respectivas carpetas. Lo unico que hace el instalador es copiar esos mods que estan dentro de la carpeta de "mods recomendados"/"mods opcionales importantes"/"mods opcionales no importantes" a la carpeta de mods que esta dentro de la carpeta de Minecraft"`,`if you know how to install mods, it's not necessary to do so. inside the download links themselves, you're going to find the mods in 3 seperate folders. The only thing that the installer does is to copy those mods that are inside those 3 folders("required mods","important optional mods", "not important optional mods") inside the Minecraft Mod folder`)}</dd>


      <dt className="titleForInformation">{txt(`No quiero usar tus links. Como bajo los mods?`,`I don't want to use your links. How can I download the mods`)}</dt>
      <dd>


        cuando haces click en "Descargar mods e instaladores" tenes informacion de los nombre de los mods. Si son necesario o no para entrar al server y la version para que puedas ver que version del mod es compatible con el servidor. Tienes que bajar todos los mods necesarios para entrar al server y puedes elejir cual mod opcional agregar o no</dd>
    </dl>
  </div>

  )

}
