import React from "react"
import "react-dom"

let isSpanishLang = window.defaultLang == "spanish";

function txt(spanishText, englishText) {
  return isSpanishLang ? spanishText : englishText
}


function ModContainer({ name, description, link, version = false, versionText = "version" }) {
  let versionContent;
  if (version) {
    versionContent = (<>
      <dt>{versionText}:</dt>
      <dd>7.0.0-pre36</dd></>)
  }
  else {
    versionContent = '';
  }

  return (<div className="modContainer">
      <dt>{name}</dt>
      <dd>
        <dl>
          <dt>{`${txt("Descripción", "Description")}`}:</dt>
          <dd>{description}</dd>
          {versionContent}
          <dt>Link:</dt>
          <dd><a href={link}>{link}</a></dd>
        </dl>
      </dd>
    </div>)
}

export default function() {

  return (<>
    <div>
      <button><a href="./../zipFiles/windows.zip" download="TronadoHard Para Windows.zip">descargar Instaladores para window</a></button>
      <button><a href="./../zipFiles/linux.zip" download="TronadoHard Para Linux.zip">descargar Instaladores para linux</a></button>
      <h2>links externos por Gabbeeto:</h2>
      <ul>
        <details>
          <summary>
            Mediafire
          </summary>
          <section>
            <button><a target="_blank" href="https://www.mediafire.com/file/cxdtxoqdmc6taq6/windows.zip/file">windows</a></button>
            <button><a target="_blank" href="https://www.mediafire.com/file/rm0fp8n53xfdsdp/linux.zip/file">linux</a></button>
          </section>
        </details>
        <details>
          <summary>
            Google Drive
          </summary>
          <section>
            <button><a target="_blank" href="https://drive.google.com/file/d/19NGye_Zt8lhqHDMHoS_vyfAdhOgInpaG/view?usp=sharing">linux</a></button>
            <button><a target="_blank" href="https://drive.google.com/file/d/1sfVzSSzC_cXrAJzUZ0jpKncmqjEkYZnZ/view?usp=sharing">windows</a></button>
          </section>
        </details>
      </ul>

      <h2>{`${txt("Informacion de mods y links de CurseForge", "mod Information and CurseForge Links")}`} : <span> {`${txt("recomendado leer la seccion de mods opcionales para gente que no usa instalador para saber que hace cada mod opcional", "it's recommended to read the mod descriptions from the 'Optional mods' section for people who do not want to use the installer since it's not necessary to install all the mods so you can choose which mod you want more wisely")}`}</span> </h2>
      <details>
        <summary>mods necesarios para entrar al server</summary>
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
              version="3.19.1.962" />


            <ModContainer
              name="Sophisticated Core"
              description={`${txt("dependencia para 'Sophisticated Backpacks'", "dependency for the Backpack mod")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/sophisticated-core/"
              version="0.5.108.504" />


            <ModContainer
              name="Waystones"
              description={`${txt("Mod para tener una piedra del camino que nos deja telestransportarnos", "Mod that gives us a waystone with the ability to teleport")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/waystones/"
              version="4.0.2" />

            <ModContainer
              name="Balm"
              description={`${txt("Dependencia para 'Waystones", "Waystone dependency")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/balm"
              version="7.1.4" />


            <ModContainer
              name="Music Maker Mod"
              description={`${txt("Mod para hacer musica", "mod so we can make music lol")}`}
              link="https://www.curseforge.com/minecraft/mc-mods/music-maker-mod"
              version="1.0.0" />

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
              version="7.26" />

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
              version={`HD U I6 pre6(${txt("para", "for")} Forge 47.1.43)`}
              versionText={`Version({${txt("si logras hacerlo funcionar con todos los mods, esto no es importante.. Esta es mi recomendacion)", "if you're able to make it work with the remaining mods, this does not matter. The version is just a suggestion")}})`}
            />



            <div className="modContainer">
              <dt>Xaero's Minimap</dt>
              <dd>
                <dl>
                  <dt>{`${txt("Descripción", "Description")}`}:</dt>
                  <dd>{`${txt("ver el mapa y lo que aparece cerca del mapa y guardar ubicacion", "being able to look at the map and the mobs/player that surround the map and being able to save the locations")}`}</dd>

                  <dt>{`${txt("La razon por la cual este mod estuvo ordenado en este puesto", "The reason why this mod was sorted in this way")}`}:</dt>
                  <dd>{`${txt("Te puede ayudar a ver las cordenadas sin precionar el f3 y es muy conveniente mirar si hay monstruos/jugadores cercas dentro del mapa y es muy conveniente tambien si no tenes buena memoria porque podes guardar cordenadas", "it helps you see the f3 coordenates without pressing f3 and it's convinient if there are monsters/player close to you and it's also convinient if you don't have good memory since you can save up the locations")}`}</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap">https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap</a></dd>
                </dl>
              </dd>
            </div>

            <div className="modContainer">
              <dt>Just Enough Items</dt>
              <dd>
                <dl>
                  <dt>{`${txt("Descripción", "Description")}`}:</dt>
                  <dd>{`${txt("Podes ver recipientes avanzados que no te muestra en Vanilla Minecraft y se integra con el mod create muy bien", "you can see advanced recipes that are not shown in vanilla Minecraft and it integrates very well with the create mod")}`}</dd>

                  <dt>{`${txt("La razon por la cual este mod estuvo ordenado en este puesto", "The reason why this mod was sorted in this way")}`}:</dt>
                  <dd>{`${txt("Lo vas a necesitar para saber como craftear cosas de mods como el Mod Create o el mod de decoracion", "You're going to need this if you're going to craft things that are related to some of the mods like the create/furniture mod")}`}</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/jei">https://www.curseforge.com/minecraft/mc-mods/jei</a></dd>
                </dl>
              </dd>
            </div>

            <div className="modContainer">
              <dt>Inventory Profiles Next <span>{`${txt("y sus dependencias", "and its dependency")}`}</span></dt>
              <dd>
                <dl>
                  <dt>{`${txt("Descripción", "Description")}`}:</dt>
                  <dd>{`${txt("Podes ordernar el inventario automaticamente", "you can automatically sort the inventory")}`}</dd>

                  <dt>{`${txt("La razon por la cual este mod estuvo ordenado en este puesto", "The reason why this mod was sorted in this way")}`}:</dt>
                  <dd>{`${txt("es util porque te ahorra mucho tiempo si ordenas el inventario", "it's useful because it saves you a lot of time if you sort the inventory")}`}</dd>

                  <dt>{`${txt("Dependencia", "dependency")}`}:</dt>
                  <dd>Kotlin for Forge</dd>
                  <dd>libIPN</dd>

                  <dt>Links:</dt>
                  <dd>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/inventory-profiles-next">https://www.curseforge.com/minecraft/mc-mods/inventory-profiles-next</a>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge">https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge</a>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/libipn">https://www.curseforge.com/minecraft/mc-mods/libipn</a>
                  </dd>

                </dl>
              </dd></div>

            <div className="modContainer">
              <dt>What the hell is that <span>{`${txt("y sus dependencias", "and its dependency")}`}</span></dt>
              <dd>
                <dl>
                  <dt>{`${txt("Descripción", "Description")}`}:</dt>
                  <dd>{`${txt("podes ver el objeto que esta en frente de ti", "you can see the item that is in front of you")}`}</dd>

                  <dt>{`${txt("Dependencia", "dependency")}`}:</dt>
                  <dd>Bad Packets</dd>

                  <dt>{`${txt("La razon por la cual este mod estuvo ordenado en este puesto", "The reason why this mod was sorted in this way")}`}:</dt>
                  <dd>{`${txt("es conveniente si queres saber cual es el item que esta en frente tuyo. Incluso puedes asignar una tecla para que te aparezca como craftearlo si tenes 'Just Enough Items'", "it's convinient since you can see the item that is in front of you and you can even assing a key so you can see how to craft the item that is in front of you if you have 'Just Enough Items'")}`}</dd>

                  <dt>Link:</dt>
                  <dd>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/wthit-forge">https://www.curseforge.com/minecraft/mc-mods/wthit-forge</a>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/badpackets">https://www.curseforge.com/minecraft/mc-mods/badpackets</a>
                  </dd>
                </dl>
              </dd>
            </div>

            <div className="modContainer">
              <dt>GUI Clock</dt>
              <dd>
                <dl>
                  <dt>{`${txt("Descripción", "Description")}`}:</dt>
                  <dd>{`${txt("muestra la hora de Minecraft", "it's shows you the Minecraft time")}`}</dd>

                  <dt>{`${txt("La razon por la cual este mod estuvo ordenado en este puesto", "The reason why this mod was sorted in this way")}`}:</dt>
                  <dd>{`${txt("si estas en una cueva, podes ver si es de dia o de noche", "if you're in a cave, you can see if daytime or not")}`}</dd>

                  <dt>Link:</dt>
                  <dd>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/gui-clock">https://www.curseforge.com/minecraft/mc-mods/gui-clock</a>
                  </dd>
                </dl>
              </dd>
            </div>


            <div className="modContainer">
              <dt>AppleSkin</dt>
              <dd>
                <dl>
                  <dt>{`${txt("Descripción", "Description")}`}:</dt>
                  <dd>{`${txt("Mod que te brinda informacion extra de la hambre", "it gives you extra information about hunger")}`}</dd>

                  <dt>{`${txt("La razon por la cual este mod estuvo ordenado en este puesto", "The reason why this mod was sorted in this way")}`}:</dt>

                  <dd>{`${txt("Te puede servir un poco y se ve un poco cool ver como te va bajando la hambre con mas detalles, y es un mod muy liviano pero no es algo wow", "it may be useful if you want extra information about hunger. It's lightweight but it doesn't do much")}`}</dd>
                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/appleskin">https://www.curseforge.com/minecraft/mc-mods/appleskin</a></dd>
                </dl>
              </dd>
            </div>


            <div className="modContainer">
              <dt>Better Third Person</dt>
              <dd>
                <dl>
                  <dt>{`${txt("Descripción", "Description")}`}:</dt>
                  <dd>{`${txt("hace posible que puedas jugar en 3ra persona", "it makes it so you can play with in 3rd person")}`}</dd>

                  <dt>{`${txt("La razon por la cual este mod estuvo ordenado en este puesto", "The reason why this mod was sorted in this way")}`}:</dt>
                  <dd>{`${txt("bastante inutil si jugas en primera persona", "really useful if you play in first person")}`}</dd>

                  <dt>Link:</dt>
                  <dd>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/better-third-person">https://www.curseforge.com/minecraft/mc-mods/better-third-person</a>
                  </dd>
                </dl>
              </dd>
            </div>

            <div className="modContainer">
              <dt>Tiny Item Animations</dt>
              <dd>
                <dl>
                  <dt>{`${txt("Descripción", "Description")}`}:</dt>
                  <dd>{`${txt("agrega una animacion pequenia", "add a small animation")}`}</dd>

                  <dt>{`${txt("La razon por la cual este mod estuvo ordenado en este puesto", "The reason why this mod was sorted in this way")}`}:</dt>
                  <dd>{`${txt("no agrega casi nada al gameplay asi que esta al ultimo puesto", "it doesn't add anything important to the game so its sorted as last")}`}</dd>

                  <dt>Link:</dt>
                  <dd>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/tiny-item-animations">https://www.curseforge.com/minecraft/mc-mods/tiny-item-animations</a>
                  </dd>
                </dl>
              </dd>
            </div>

          </dl>
        </section>
      </details>
    </div >
  </>)
}
