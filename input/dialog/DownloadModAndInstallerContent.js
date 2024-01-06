import React from "react"
import "react-dom"


export function txt(spanishText, englishText) {
  let isSpanishLang = window.defaultLang == "spanish";

  return isSpanishLang ? spanishText : englishText
}


function ModContainer({ name, description, link, version = false, versionText = "version", reasonWhy = false, nameSpan = false, dependencies = false }) {
  let versionContent;
  if (version) {
    versionContent = (<>
      <dt>{versionText}:</dt>
      <dd>{version}</dd></>)
  }
  else {
    versionContent = '';
  }


  let reasonWhyContent;
  if (reasonWhy) {
    reasonWhyContent = (<>
      <dt>{`${txt("La razon por la cual este mod estuvo ordenado en este puesto", "The reason why this mod was sorted in this way")}`}:</dt>
      <dd>{reasonWhy}</dd></>)
  }
  else {
    reasonWhyContent = '';
  }


  let dependencyContent;
  if (dependencies) {
    dependencyContent = (<>
      <dt>{`${txt("Dependencia", "dependency")}`}:</dt>
      {dependencies.map(dependency => (<dd>{dependency}</dd>))}</>)
  }
  else {
    dependencyContent = '';
  }


  let nameSpanContent;
  if (nameSpan) {
    nameSpanContent = (<span>{nameSpan}</span>)
  }
  else {
    nameSpanContent = '';
  }
  let linkContent;
  if (typeof link == "string") {
    linkContent = (<><dt>Link:</dt>
      <dd><a href={link}>{link}</a></dd>
    </>
    )
  }

  else {
    linkContent = (<><dt>Link:</dt>
      {link.map(linkContent => {
        return (
          <>
            <dd><a href={linkContent}>{linkContent}</a></dd>
          </>
        )
      })}
    </>)
  }

  return (<div className="modContainer">
    <dt>{name}{nameSpanContent}</dt>
    <dd>
      <dl>
        <dt>{`${txt("Descripción", "Description")}`}:</dt>
        <dd>{description}</dd>
        {versionContent}
        {reasonWhyContent}
        {dependencyContent}
        {linkContent}
      </dl>
    </dd>
  </div>)
}

export default function() {

  return (<>
    <div>
      <h2>{`${txt("enlaces externos de mods con instaladores", "external links for the installer and the mods")}`}:</h2>
      <ul>
        <details>
          <summary>
            Mediafire
          </summary>
          <section>
            <button><a target="_blank" href={`${txt("https://www.mediafire.com/file/icd3evk3wpcbge6/windowEspaniol.zip/file", "https://www.mediafire.com/file/p1e1kioxm50tbzv/windowEngrish.zip/file")}`}>windows</a></button>
            <button><a target="_blank" href={`${txt("https://www.mediafire.com/file/6s2amg25jrz8u28/linuxEspaniol.zip/file", "https://www.mediafire.com/file/4477jafsvijaey1/linuxEngrish.zip/file")}`}>linux</a></button>
          </section>
        </details>
        <details>
          <summary>
            Google Drive
          </summary>
          <section>
            <button><a target="_blank" href={`${txt("https://drive.google.com/file/d/1xCFheAxWtFVN3e_VGq-nd4Eq9UL3_vgZ/view?usp=sharing", "https://drive.google.com/file/d/17dM-xvXbB1GPL0aLjbhSnEDuihApI9Qe/view?usp=sharing")}`}>linux</a></button>
            <button><a target="_blank" href={`${txt("https://drive.google.com/file/d/1yHRVvsG6yzdHIITpxNu5rwZ3ckpS_VBX/view?usp=sharing", "https://drive.google.com/file/d/1V1DYPfgn7WWGqYudbfOTJEUYKoJR0od0/view?usp=sharingttps://drive.google.com/file/d/1D3YrS76rT23zFDfSNxsPiJHDmK3cYWQZ/view?usp=sharing")}`}>windows</a></button>
          </section>
        </details>
      </ul>

      <h2>{`${txt("Informacion de mods y links de CurseForge", "mod Information and CurseForge Links")}`} : <span> {`${txt("recomendado leer la seccion de mods opcionales para gente que no usa instalador para saber que hace cada mod opcional", "it's recommended to read the mod descriptions from the 'Optional mods' section for people who do not want to use the installer since it's not necessary to install all the mods so you can choose which mod you want more wisely")}`}</span> </h2>
      <details>
        <summary>{`${txt("mods necesarios para entrar al server", "neccesary mods to get into the server")}`}</summary>
        <section>
          <h2>
            {`${txt("todos los mods requeridos son 100% requeridos para entrar al server", "mods that are 100% required to get into the server")}`}</h2>
          <dl>

            <ModContainer
              name="MrCrayfish's Furniture Mod"
              description={`${txt("mod de decoracion", "Decoration mod")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod"
              version="7.0.0-pre36" />

            <ModContainer
              name="Create Mod"
              description={`${txt("Mod de fabricas y automatizacion", "Mod about factories and automation")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/create"
              version="0.5.1.f" />

            <ModContainer
              name="End Remastered"
              description={`${txt("Mods que aumenta la dificultad para ir al end", "mod so it's harder to reach 'The End'")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/endremastered"
              version="R-1.20.X" />


            <ModContainer
              name="Farmer's Delight"
              description={`${txt("Mod que expande la agricultura", "Mod to expand agriculture")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/farmers-delight/"
              version="1.2.3" />

            <ModContainer
              name="Lootr"
              description={`${txt("Mod que cambia mecanicas del loot", "Mod so we have a different loot mechanics")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/lootr/"
              version="0.7.30.73" />

            <ModContainer
              name="Sophisticated Backpacks"
              description={`${txt("mod de mochila", "backpack mod lol")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks"
              version="3.19.5.988" />


            <ModContainer
              name="Sophisticated Core"
              description={`${txt("dependencia para 'Sophisticated Backpacks'", "dependency for the Backpack mod")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/sophisticated-core/"
              version="0.5.113.524" />


            <ModContainer
              name="Waystones"
              description={`${txt("Mod para tener una piedra del camino que nos deja telestransportarnos", "Mod that gives us a waystone with the ability to teleport")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/waystones/"
              version="4.0.2" />

            <ModContainer
              name="TrashSlot"
              description={`${txt("te hace capaz de remover objectos inutiles de tu inventario", "you're able to remove useless items from your inventory")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/trashslot"
              version="15.1.0" />

            <ModContainer
              name="Balm"
              description={`${txt("Dependencia para 'Waystone' mod y 'trashlot' mod", "dependency to make waystone/trashlot mod work")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/balm"
              version="7.2.1" />


            <ModContainer
              name="Music Maker Mod"
              description={`${txt("Mod para hacer musica", "mod so we can make music lol")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/music-maker-mod"
              version="1.0.1" />

            <ModContainer
              name="Joy of Painting"
              description={`${txt("Mod para artistas que quieren dibujar", "Mod so artists can draw")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/joy-of-painting"
              version="1.0.0" />

            <ModContainer
              name="Simple Voice Chat"
              description={`${txt("Hablar con las demas personas y escuchar a las demas personas", "being able to talk/listen to other people")}`}
              link="https://modrinth.com/plugin/simple-voice-chat"
              version="2.4.32" />

            <ModContainer
              name="Advanced Netherite"
              description={`${txt("mejorar armaduras y otras cosas", "get better armor and other stuff related to netherite")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/advanced-netherite"
              version="2.0.2" />


            <ModContainer
              name="Infinite Trading"
              description={`${txt("ser capaz de tradear con aldeanos infinitamente", "being able to  trade with villagers in an infinite way")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/infinite-trading/"
              version="4.3" />

            <ModContainer
              name="Collective"
              description={`${txt("dependencia para el infinite trading mod", "dependency for the infinite-trading mod")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/collective"
              version="7.30" />


            <ModContainer
              name="SecurityCraft"
              description={`${txt("agregar objetos relacionado a la seguridad como camaras", "add items related to secuity such as cameras")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/security-craft"
              version="1.9.8" />


            <ModContainer
              name="Serene Seasons"
              description={`${txt("agrega temporadas con sus respecivo clima en minecraf", "it add seasons with their own respective weather in minecraft")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/serene-seasons"
              version="9.0.0.46" />

            <ModContainer
              name="Enchanting infuser"
              description={`${txt("una mejor mesa de encantamiento que te deja elejir encantamientos", "a better enchanting table that lets you choose the enchantment istead of relying on randomness")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/enchanting-infuser-forge"
              version="8.0.2" />

            <ModContainer
              name="Puzzles Lib"
              description={`${txt("Dependencia para enchanting infuser", "dependency to make Enchanting infuser work")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/puzzles-lib"
              version="8.1.11" />



          </dl>
        </section>
      </details>
      <details>
        <summary>{`${txt("Mods opcionales", "Optional Mods")}`}</summary>
        <section>
          <h2>{`${txt("todos los mods opcionales(no necesario para entrar al server). Estaran ordenados en base a 'importancia de mod'/'consumo de pc' con la opinion de Gabbeeto", "Every Optional Mod(Not required to get into the server). This will be sorted with  the \"Mod Importance\"/\"Performance\" criteria in mind from Gabbeto's pov")}`} </h2>
          <dl>


            <ModContainer
              name={`Optifine(${txt("esta en la carpeta de mod requeridos", "it's in the 'required mod' folder")})`}
              description={`${txt("Mod para modificar gráficos", "Mod so we can modify graphics even further")}`}
              link="https://optifine.net/downloads"
              version={`HD U I6 (${txt("para", "for")} Forge 47.2.18)`}
              versionText={`Version({${txt("si logras hacerlo funcionar con todos los mods, esto no es importante.. Esta es mi recomendacion)", "if you're able to make it work with the remaining mods, this does not matter. The version is just a suggestion")}})`}
            />


            <ModContainer
              name="Xaero's Minimap"
              description={`${txt("ver el mapa y lo que aparece cerca del mapa y guardar ubicacion", "being able to look at the map and the mobs/player that surround the map and being able to save the locations")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap"
              reasonWhy={`${txt("Te puede ayudar a ver las cordenadas sin precionar el f3 y es muy conveniente mirar si hay monstruos/jugadores cercas dentro del mapa y es muy conveniente tambien si no tenes buena memoria porque podes guardar cordenadas", "it helps you see the f3 coordenates without pressing f3 and it's convinient if there are monsters/player close to you and it's also convinient if you don't have good memory since you can save up the locations")}`}
            />

            <ModContainer
              name="Just Enough Items"
              description={`${txt("Podes ver recipientes avanzados que no te muestra en Vanilla Minecraft y se integra con el mod create muy bien", "you can see advanced recipes that are not shown in vanilla Minecraft and it integrates very well with the create mod")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/jei"
              reasonWhy={`${txt("Lo vas a necesitar para saber como craftear cosas de mods como el Mod Create o el mod de decoracion", "You're going to need this if you're going to craft things that are related to some of the mods like the create/furniture mod")}`}
            />


            <ModContainer
              name="Inventory Profiles Next"
              spanName={`${txt("y sus dependencias", "and its dependency")}`}
              description={`${txt("Podes ordernar el inventario automaticamente", "you can automatically sort the inventory")}`}
              link={["https://www.curseforge.com/minecraft/mc-mods/inventory-profiles-next", "https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge", "https://www.curseforge.com/minecraft/mc-mods/libipn"]}
              reasonWhy={`${txt("es util porque te ahorra mucho tiempo si ordenas el inventario", "it's useful because it saves you a lot of time if you sort the inventory")}`}
              dependencies={["Kotlin for Forge", "libIPN"]}
            />


            <ModContainer
              name="What the hell is that"
              spanName={`${txt("y sus dependencias", "and its dependency")}`}
              description={`${txt("podes ver el objeto que esta en frente de ti", "you can see the item that is in front of you")}`}
              link={["https://www.curseforge.com/minecraft/mc-mods/wthit-forge", "https://www.curseforge.com/minecraft/mc-mods/badpackets"]}
              reasonWhy={`${txt("es conveniente si queres saber cual es el item que esta en frente tuyo. Incluso puedes asignar una tecla para que te aparezca como craftearlo si tenes 'Just Enough Items'", "it's convinient since you can see the item that is in front of you and you can even assing a key so you can see how to craft the item that is in front of you if you have 'Just Enough Items'")}`}
              dependencies={["Bad Packets"]}
            />


            <ModContainer
              name="GUI Clock"
              description={`${txt("muestra la hora de Minecraft", "it's shows you the Minecraft time")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/gui-clock"
              reasonWhy={`${txt("si estas en una cueva, podes ver si es de dia o de noche", "if you're in a cave, you can see if daytime or not")}`}
            />


            <ModContainer
              name="AppleSkin"
              description={`${txt("Mod que te brinda informacion extra de la hambre", "it gives you extra information about hunger")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/appleskin"
              reasonWhy={`${txt("Te puede servir un poco y se ve un poco cool ver como te va bajando la hambre con mas detalles, y es un mod muy liviano pero no es algo wow", "it may be useful if you want extra information about hunger. It's lightweight but it doesn't do much")}`}
            />

            <ModContainer
              name="Better Third Person"
              description={`${txt("hace posible que puedas jugar en 3ra persona", "it makes it so you can play with in 3rd person")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/better-third-person"
              reasonWhy={`${txt("bastante inutil si jugas en primera persona", "really useful if you play in first person")}`}
            />


            <ModContainer
              name="Tiny Item Animations"
              description={`${txt("agrega una animacion pequenia", "add a small animation")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/tiny-item-animations"
              reasonWhy={`${txt("no agrega casi nada al gameplay asi que esta al ultimo puesto", "it doesn't add anything important to the game so its sorted as last")}`}
            />
          </dl>
        </section>
      </details>
    </div >
  </>)
}
