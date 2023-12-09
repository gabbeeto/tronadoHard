const inlineButton = document.querySelector("#inlineButton");
inlineButton.addEventListener('click', (event) => {
  navigator.clipboard.writeText('TronadoHard.aternos.me:25198');
  const ip = document.querySelector('main > h2 > span');
  ip.style.color = "var(--red)";
  event.target.style.color = "var(--yellow)";
  event.target.style.backgroundColor = "black";
  setTimeout(() => {
  ip.style.color = "";
  event.target.style.color = "";
  event.target.style.backgroundColor = "";
  },300);
}
)
let dialog = document.querySelector('dialog');
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', openDialog)
}

function quit(){
let dialog = document.querySelector('dialog');
dialog.close();
}

let srcForJavaInstalation = `./images/basicInstalation`
let javaInstalation = `
        <details>
        <summary>haz click aqui si no tienes java instalado en tu pc</summary>
        <p>deberias ir a la <a tittle="link de la pagina oficial" href="https://www.java.com/en/">pagina oficial de java</a> para bajartelo en windows</p>
        ${anchorAndImgTag(srcForJavaInstalation, '051', 'pagina oficial arriba en donde dice "pagina oficial de java"')}
        <p>despues deberias hacer click donde dice "Download Java" </p>
        ${anchorAndImgTag(srcForJavaInstalation, '052', 'referencia al botom que tenes que hacer click')}
        <p>despues deberias abrir el archivo ejecutable que se te bajo que es relacionado a java</p>
        ${anchorAndImgTag(srcForJavaInstalation, '053', 'instalar java')}
        <p>una vez que se abrio el ejecutable, deberias poner donde dice "instalar"</p>
        ${anchorAndImgTag(srcForJavaInstalation, '054', 'referencia al boton que dice instalar')}
        <p>tendras que esperar que esa barra se termine(es el proceso de instalacion de java)</p>
        ${anchorAndImgTag(srcForJavaInstalation, '055', 'muestra de la barra')}
        <p>una vez terminado aparecera "java se ha instalado correctamente" y solamente tienes que darle a "cerrar" y en windows ya esta</p>
        ${anchorAndImgTag(srcForJavaInstalation, '056', 'muestra de la barra')}
        <p class="linux">si usas linux con una distribucion que se basa en debian como ubuntu/linux mint o pop os como yo... Deberias abrir el terminal y escribir "sudo apt install openjdk-17-jdk", poner tu contrasenia y ya</p>
        ${anchorAndImgTag(srcForJavaInstalation, '057', 'como hacerlo en linux', true)}
        </details>`

function openDialog() {
  console.log(this)
  let src = `./images/basicInstalation`;
  let src2 = `./images/basicGraphicDowngrader`

  switch (this.dataset.id) {
    case "0":
      dialog.innerHTML = `
      <div>
      <button id="quit">salir</button>
        <button><a href="zipFiles/windows.zip" download="TronadoHard Para Windows.zip">descargar Instaladores para window</a></button>
        <button><a href="zipFiles/linux.zip" download="TronadoHard Para Linux.zip">descargar Instaladores para linux</a></button>
        <h2>links externos por Gabbeeto:</h2>
        <ul>
          <details>
            <summary>
             Mediafire
            </summary>
            <section>
              <button><a target="_blank" href="https://www.mediafire.com/file/cxdtxoqdmc6taq6/windows.zip/file">windows</a></button>
              <button><a target="_blank" href="https://www.mediafire.com/file/rm0fp8n53xfdsdp/linux.zip/file">linux</a></button>
          </details>
          </section>
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

        <h2>Informacion de mods y links de curseforge:</h2>
        <details>
          <summary>mods necesarios para entrar al server</summary>
          <section>
            <h2>todos los mods requeridos son mods que si o si necesitas para entrar al server</h2>
            <dl>
            <div class="modContainer">
              <dt>MrCrayfish's Furniture Mod</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mod de decoracion</dd>

                  <dt>version:</dt>
                  <dd>7.0.0-pre36</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod">https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod</a></dd>
                </dl>
              </dd>

              </div>

            <div class="modContainer">
              <dt>Create Mod</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mod de fabricas y automatizacion</dd>

                  <dt>version:</dt>
                  <dd>0.5.1.f</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/create">https://www.curseforge.com/minecraft/mc-mods/create</a></dd>
                </dl>
              </dd>
                </div>
            <div class="modContainer">
              <dt>End Remastered</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mods que aumenta la dificultad para ir al end</dd>

                  <dt>version:</dt>
                  <dd>R-1.20.X</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/endremastered">https://www.curseforge.com/minecraft/mc-mods/endremastered</a></dd>
                </dl>
              </dd></div>

              <div class="modContainer">
              <dt>Farmer's Delight</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mod que expande la agricultura</dd>

                  <dt>version:</dt>
                  <dd>1.2.3</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/farmers-delight/">https://www.curseforge.com/minecraft/mc-mods/farmers-delight/</a></dd>
                </dl>
              </dd>
</div>
              <div class="modContainer">
              <dt>Lootr</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mod que cambia mecanicas del loot</dd>

                  <dt>version:</dt>
                  <dd>0.7.30.73</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/lootr/">https://www.curseforge.com/minecraft/mc-mods/lootr/</a></dd>
                </dl>
              </dd>
          </div>

    <div class="modContainer">
              <dt>Sophisticated Backpacks</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mod de mochila</dd>

                  <dt>version:</dt>
                  <dd>3.19.1.962</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks">https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks</a></dd>
                </dl>
              </dd>
      </div>

<div class="modContainer">
              <dt>Sophisticated Core</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>dependencia para 'Sophisticated Backpacks'</dd>

                  <dt>version:</dt>
                  <dd>0.5.108.504</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/sophisticated-core/">https://www.curseforge.com/minecraft/mc-mods/sophisticated-core/</a></dd>
                </dl>
              </dd>
</div>

<div class="modContainer">
              <dt>Waystones</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mod para tener una piedra del camino que nos deja telestransportarnos</dd>

                  <dt>version:</dt>
                  <dd>4.0.2</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/waystones/">https://www.curseforge.com/minecraft/mc-mods/waystones/</a></dd>
                </dl>
              </dd>
</div>
<div class="modContainer">
              <dt>Balm</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Dependencia para 'Waystones'</dd>

                  <dt>version:</dt>
                  <dd>7.1.4</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/balm">https://www.curseforge.com/minecraft/mc-mods/balm</a></dd>
                </dl>
              </dd>
</div>

              <div class="modContainer">
              <dt>Music Maker Mod</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mod para hacer musica</dd>

                  <dt>version:</dt>
                  <dd>1.0.0</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/music-maker-mod">https://www.curseforge.com/minecraft/mc-mods/music-maker-mod</a></dd>
                </dl>
              </dd>
</div>

              <div class="modContainer">
              <dt>Joy of Painting</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mod para artistas que quieren dibujar</dd>

                  <dt>version:</dt>
                  <dd>1.0.0</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/joy-of-painting">https://www.curseforge.com/minecraft/mc-mods/joy-of-painting</a></dd>
                </dl>
              </dd></div>



            </dl>
          </section>
        </details>
        <details>
          <summary>mods opcionales</summary>
          <section>
            <h2>todos los mods que son opcionales. Estaran ordenados en base a 'importancia de mod'/'consumo de pc' con la opinion de Gabbeeto</h2>
            <dl>

            <div class="modContainer">
              <dt>Optifine(esta en la carpeta de mod requeridos)</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mod para modificar graficos</dd>

                  <dt>Razon de puesto:</dt>
                  <dd>No importa si tenes buena o mala pc, te vas a beneficiar de esto</dd>

                  <dt>Version(si logras hacerlo funcionar con todos los mods, esto no es importante.. Esta es mi recomendacion)</dt>
                  <dd>HD U I6 pre6(para Forge 47.1.43)</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://optifine.net/downloads">https://optifine.net/downloads</a></dd>
                </dl>
              </dd>
</div>

<div class="modContainer">
              <dt>Plasmo Voice</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Hablar con las demas personas y escuchar a las demas personas</dd>

                  <dt>Razon de puesto:</dt>
                  <dd>No podras escuchar los que usan microfono en el server</dd>

                  <dt>Version(si logras hacerlo funcionar bien con otra version, esto no es importante.. Esta es mi recomendacion):</dt>
                  <dd>2.0.7</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/plasmo-voice">https://www.curseforge.com/minecraft/mc-mods/plasmo-voice</a></dd>
                </dl>
              </dd>
</div>

            <div class="modContainer">
              <dt>Xaero's Minimap</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>ver el mapa y lo que aparece cerca del mapa y guardar ubicacion</dd>

                  <dt>Razon de puesto:</dt>
                  <dd>Te puede ayudar a ver en el mapa si hay mobs cerca tullo o te puede ayudar guardando cordenadas si no tienes buena memoria</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap">https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap</a></dd>
                </dl>
              </dd>
</div>

            <div class="modContainer">
              <dt>Just Enough Items</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>

                  <dd>Podes ver recipientes avanzados que no te muestra en Vanilla Minecraft</dd>
                  <dt>Razon de puesto:</dt>
                  <dd>Lo vas a necesitar para saber como craftear cosas de mods como el Mod Create o el mod de decoracion</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/jei">https://www.curseforge.com/minecraft/mc-mods/jei</a></dd>
                </dl>
              </dd>
</div>

            <div class="modContainer">
              <dt>Inventory Profiles Next <span>y sus dependencias</span></dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Podes ordernar el inventario automaticamente</dd>

                  <dt>Razon de puesto:</dt>
                  <dd>Es util porque te puede ahorrar mucho tiempo pero esta en este puesto porque necesitas 3 mods para tener esa funcionalidad</dd>

                  <dt>dependencia:</dt>
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

<div class="modContainer">
              <dt>What the hell is that <span>y su dependencia</span></dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>poder ver items que esta en frente tullo</dd>

                  <dt>dependencia:</dt>
                  <dd>Bad Packets</dd>

                  <dt>Razon de puesto:</dt>
                  <dd>es util para saber cual es el item que esta en frente tuyo. Incluso puedes asignar una tecla para que te aparezca como craftearlo si tenes 'Just Enough Items'</dd>

                  <dt>Link:</dt>
                  <dd>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/wthit-forge">https://www.curseforge.com/minecraft/mc-mods/wthit-forge</a>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/badpackets">https://www.curseforge.com/minecraft/mc-mods/badpackets</a>
                  </dd>
                </dl>
              </dd>
</div>

            <div class="modContainer">
              <dt>AppleSkin</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>Mod que te brinda informacion extra de la hambre</dd>

                  <dt>Razon de puesto:</dt>
                  <dd>Te puede servir un poco y se ve un poco cool ver como te va bajando la hambre con mas detalles, y es un mod muy liviano pero no es algo wow</dd>

                  <dt>Link:</dt>
                  <dd><a href="https://www.curseforge.com/minecraft/mc-mods/appleskin">https://www.curseforge.com/minecraft/mc-mods/appleskin</a></dd>
                </dl>
              </dd>
      </div>

            <div class="modContainer">
              <dt>GUI Clock</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>muestra la hora de Minecraft</dd>

                  <dt>Dependencia:</dt>
                  <dd>Collective</dd>

                  <dt>Razon de puesto:</dt>
                  <dd>creo que es mas util que AppleSkin porque si estas en una cueva, podes ver si es de dia o de noche</dd>

                  <dt>Link:</dt>
                  <dd>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/gui-clock">https://www.curseforge.com/minecraft/mc-mods/gui-clock</a>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/collective">https://www.curseforge.com/minecraft/mc-mods/collective</a>
                  </dd>
                </dl>
              </dd>
      </div>

            <div class="modContainer">
              <dt>Better Third Person</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>hace posible que puedas jugar en 3ra persona</dd>

                  <dt>Razon de puesto:</dt>
                  <dd>bastante inutil si jugas en primera persona</dd>

                  <dt>Link:</dt>
                  <dd>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/better-third-person">https://www.curseforge.com/minecraft/mc-mods/better-third-person</a>
                  </dd>
                </dl>
              </dd>
      </div>

            <div class="modContainer">
              <dt>Tiny Item Animations</dt>
              <dd>
                <dl>
                  <dt>Descripcion:</dt>
                  <dd>agrega una animacion pequenia</dd>

                  <dt>Razon de puesto:</dt>
                  <dd>no agrega casi nada al gameplay asi que esta al ultimo puesto</dd>

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
      </div>
      `;
      break;
    case '1':
      dialog.innerHTML = `
      <div>
      <button id="quit">salir</button>
      <p>hacele click a las imagenes si quieres verlos en pantalla completa</p>
      <p class="linux">si eres usuario de windows, ignora las letras azules o las imagenes con bordes azules. Son para usuarios de linux</p>
      <p>este tutorial se resume en:</p>
        <ol>
          <li>instalar forge con el instalador para forge</li>
          <li>instalar los mods con el instalador para los mods(leyendo lo que dice el instalador)</li>
          <li>elijiendo la version correcta de minecraft a la hora de entrar a tronadoHard(forge version "tronadoHard")</li>
        </ol>
      <p>y ya... Pero eso no seria util para mucha gente asi que este un tutorial detallado de la forma simple de instalar mods<span>(tambien se puede instalar en la manera tradicional. Solo tienes que instalar forge y copiar los mods de la carpeta de "mods requeridos" a la carpeta de mods de minecraft si solo quieres entrar al server o/y lo mismo con los mods que estan dentro de la carpeta de "mods opcionales" si quieres que tu experiencia sea mejor, recomiendo que leas en la informacion de mods opcionales que esta dentro de la pagina cuando haces click en "Descargar mods e instaladores" si vas a instalarlo de esta manera)</span></p>
      ${anchorAndImgTag(src, '00', 'welcome image')}
      <p>despues de bajar el instalador tienes que extraerlos(probablemente el archivo zip tenga otro nombre)</p>
      ${anchorAndImgTag(src, '01', 'muestra de archivo')}
      <p>usualmente extraeria en windows haria click derecho y seleccionaria "extraer aqui" si tuviera winrar</p>
      ${anchorAndImgTag(src, '02', 'muestra de archivo')}
      <p class="linux">(para los que usan linux)... <br> si usas una distribucion de linux como pop os o linux mint, el proceso es igual como en mi caso pero es probable que 
        en linux necesites usar la linea de comando para extraer con el programa llamado "unzip". Una vez instales "unzip", deberias escribir "unzip" y el nombre del archivo(si estas adentro del directorio. si no estas adentro del directorio deberias incluir el directorio tambien) </p>
        <p>despues de extraer el archivo, deberias abrir la carpeta que dice "tronadoHard para windows"(o "tronadoHard para linux" si bajaste la version para linux)</p>
      ${anchorAndImgTag(src, '03', 'muestra de como instalar en linux', true)}
      ${anchorAndImgTag(src, '04', 'abriendo la carpeta')}
        <p>despues deberian ejecutar el instalador para forge que se llama "instalador para forge.jar" con java(antes del instalador de mods)</p>
      ${anchorAndImgTag(src, '05', 'ejecutando el instalador para forge con java')}
        <p class="linux">en linux deberias ejecutar el archivo en la linea de comando con "java -jar [nombre del archivo](en mi caso podria escribir "instalador para forge.jar" o la otra opcion con guiones)</p>
      ${anchorAndImgTag(src, '06', 'ejecutando el instalador para forge con java', true)}
        ${javaInstalation}
        <p>despues hacele click a "Install client" y pone en "aceptar"</p>
      ${anchorAndImgTag(src, '07', 'hacer click en "install client" y en "aceptar"')}
        <p>tendras que esperar luego</p>
      ${anchorAndImgTag(src, '08', 'esperando al instalador')}
        <p>luego aparecera el siguiente cartel y le tienes que dar a "aceptar"</p>
      ${anchorAndImgTag(src, '09', 'finalizar instalacion de forge')}
        <p>despues de instalar forge, deberias abrir el "instalador de mods.exe" o el archivo de python si ya tenias python instalado desde antes(no hay ningun beneficio usando python. el archivo Solo esta ahi para compartir el codigo con las personas que estan inseguras de mi instalador)</p>
      ${anchorAndImgTag(src, '10', 'empezando instalacion de mods')}
        <p class="linux"> en linux solo inclui el archivo de python asi que para correrlo tendras que instalar python en el terminal con "sudo apt install python3" y correrlo con "python3 [nombre del archivo]"(el nombre del archivo en mi caso es "instalador de mods.py" o el mismo nombre pero sin las comillas y con los guiones)</p>
      ${anchorAndImgTag(src, '11', 'empezando instalacion de mods en linux', true)}
        <p>despues les saldra una ventana que recomiendo que lean con antencion(el numero 2 instala todos los mods, y el numero 1 te lleva mas tarde a un menu en donde podes sacar algunos de los mods opcionales. ah no ser que te funcione minecraft sin optifine con graficos medios a 60 fps, te recomendaria que uses la opcion 1).</p>
      ${anchorAndImgTag(src, '12', 'primeras opciones')}
        <p>en mi caso, yo eleji la opcion 1 porque estaba usando una computadora con solo 4 gb de ram asi que precione el numero 1 y despues el enter</p>
      ${anchorAndImgTag(src, '13', 'primera opciones(mi eleccion)')}
        <p>ahora el instalador busca un si este instalador previamente hizo un backup, siendo la primera vez que abrimos el instalador. nos pide si quiere que hagamos un backup(yo leeria con antencion aqui tambien porque habla sobre borrar los mods que ya tienes en la carpeta de Minecraft. Yo personalmente recomendaria que el instalador si haga un backup/respaldo/copia de la carpeta de mod porque de esa manera no vas a perder tus mods antiguos)</p>
      ${anchorAndImgTag(src, '14', 'backup')}
        <p>por supuesto, mi respuesta fue que si asi que aprete "s" y el enter</p>
      ${anchorAndImgTag(src, '15', 'backup(mi eleccion)')}
        <p>despues de que el backup se termine de crear, te aparecera esta ventana(si elejiste la opcion 1 que es para pc malas, todo esta seccion la puedes saltear si elejiste la opcion 2). Lo que tienes que hacer es elejir un numero, precionar ese numero y despues precionar el 'enter' pero lee con mucho cuidado(lee todo si es posible)</p>
      ${anchorAndImgTag(src, '16', 'opciones para mods opcionales')}
        <p>las siguientes lineas rojas, son los mods que se van a incluir si vos elejir cierta opcion</p>
      ${anchorAndImgTag(src, '17', 'opciones para mods opcionales(mods)')}
        <p>en mi opinion, si tienes una pc mala pero queres disfrutar de algunos mods opcionales. Yo elijiria la opcion 3 o la 2, porque incluyen los mods mas importantes de los mods opcionales</p>
      ${anchorAndImgTag(src, '18', 'opciones para mods opcionales(mis preferencias)')}
        <p>la primera opcion solo existe para la gente que tiene pc mala pero no tan mala. Para gente que le corre minecraft con varios mods pero que no les funciona el gta 5 apropiadamente(6-7 gb de ram de ddr3 mas o menos)</p>
      ${anchorAndImgTag(src, '20', 'opciones para mods opcionales(existencia de la opcion 1)')}
      ${anchorAndImgTag(src, '19', 'opciones para mods opcionales(mis preferencias)')}
        <p>en mi caso, yo eleji la opcion 3 asi que precione el numero 3 y despues precione el enter(esa pc tenia 4 gb de ram pero un procesador decente)</p>
        <p>lean lo siguiente(te dice que preciones enter y esperes 2 segundos y que no cierres la ventana porque la ventana se cerrara solo. Si haces eso, la instalacion estara completa!)</p>
      ${anchorAndImgTag(src, '21', 'y tronadoHard ya estaria instalado en tu computadora despues de hacer esto correctamente... ')}
        <p>y creeria que esto es suficiente para poder jugar tronadoHard en tu pc, simplemente no olvides jugar la version "tronadoHard" en tu launcher. Y si tu launcher no acepta instalaciones cuztomizadas, te recomendaria jugar la version 47.1.43 de forge(es lo mismo, simplemente llame una version TronadoHard para hacer la vida mas facil a algunos)</p>
      </div>
      `;
      break;
    case '2':
      dialog.innerHTML = `
      <div>
      <button id="quit">salir</button>
        <p>despues de extraer el archivo, tendras que abrir la carpeta del bajador de graficos 3000</p>
      ${anchorAndImgTag(src2, 'd01', 'abrir la carpeta del bajador de graficos')}
        <p>despues tenes que abrir el ejecutable que dice "Bajador de graficos.exe"(tienes el archivo de python)</p>
      ${anchorAndImgTag(src2, 'd02', 'abrir el bajador de graficos')}
        <p>el instalador te va a preguntar si queres hacer un backup de tus configuraciones de minecraft(es recomendados que haga el backup por si perdes alguna configuracion que no querias perder)</p>
      ${anchorAndImgTag(src2, 'd03', 'abrir el bajador de graficos')}
        <p>yo escribi que si y precione enter en mi caso porque queria un backup de mi configuracion anterior de Minecraft</p>
      ${anchorAndImgTag(src2, 'd04', 'abrir el bajador de graficos')}
        <p>una vez que aparezca este mensaje... Lo unico que tienes que hacer es precionar el enter y despues esperar 2 segundos(sin cerrar la ventana manualmente porque el programa lo hara solo cuando el intalador termine exitosamente. Porfavor no cierres la ventana)</p>
      ${anchorAndImgTag(src2, 'd05', 'abrir el bajador de graficos')}
        <p>si aun anda lento, te recomendaria bajarle la resolucion, para eso abri el juego y anda a "options" o "opciones"</p>
      ${anchorAndImgTag(src2, 'e1', 'abriendo opciones')}
      ${anchorAndImgTag(src2, 's1', 'abriendo opciones')}
        <p>despues ve a "video settings" o "graficos"</p>
      ${anchorAndImgTag(src2, 'e2', 'llendo a graficos')}
      ${anchorAndImgTag(src2, 's2', 'llendo a graficos')}
        <p>despues ve a "Others" o "opciones varias"</p>
      ${anchorAndImgTag(src2, 'e3', 'llendo a graficos')}
      ${anchorAndImgTag(src2, 's3', 'llendo a graficos')}
        <p>y despues le cambias la resolucion por una inferior a la que tengas en windows(podes ponerle la mitad o menos). La razon por la cual no inclui esto en el bajador de graficos es porque tu monitor puede tener problemas con ciertas resoluciones</p>
      ${anchorAndImgTag(src2, 'e4', 'cambiando resolucion')}
      ${anchorAndImgTag(src2, 's4', 'cambiando resolucion')}
        <p>Y esto seria todo.  si usas windows y el Minecraft aun te anda lento, recomiendo chequear los videos que estan dentro de "Links para hacer 'Windows' mas liviano' y ver si el juego te puede correr mejor"</p>
      ${anchorAndImgTag(src2, 'final', 'otros links')}
      </div>
          `;
      break;
    case '3':
      dialog.innerHTML = `
<div>
      <button id="quit">salir</button>
<h2>videos that seems good enough en mi opinion <br> (avisame en discord si conoces un video que te ayudo a hacer Minecraft lijero mucho mejor para agregarlo)</h2>
<a href="https://www.youtube.com/watch?v=yTDSjfrmcaE">debloater video</a>
<iframe width="560" height="315" src="https://www.youtube.com/embed/yTDSjfrmcaE?si=c9wP4NmzrH9ixUON" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<a href="https://www.youtube.com/watch?v=ywCOs4XyNgg">"hacer minecraft mas lijero" video parte 1</a>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ywCOs4XyNgg?si=hX_t_ISms8Ba5pTD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<a href="https://www.youtube.com/watch?v=-PJTiW_Kajo">"hacer minecraft mas lijero" video parte 2</a>
<iframe width="560" height="315" src="https://www.youtube.com/embed/-PJTiW_Kajo?si=a5ut2GNfO7MR2foK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
`
  }
  if (this.dataset.id) {
    dialog.showModal()
    let quitButton = document.querySelector('#quit');
    quitButton.addEventListener('click', quit);
  }
}


function anchorAndImgTag(src, number, message, linuxClass = false) {
  let elementClass = `class='' `;
  if (linuxClass) {
    elementClass = `class='linux' `

  }
  return `<a target="_blank"  href="${src}/${number}.png"> <img ${elementClass} src="${src}/${number}.png" tittle="${message}" alt="${message}"></a>`
}
