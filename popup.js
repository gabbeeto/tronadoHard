let dialog = document.querySelector('dialog');
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', openDialog)
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
  let src3 = `./images/advanceInstalation`;
  let src4 = `./images/downgradeGraphicManually`;

  switch (this.dataset.id) {
    case "0":
      dialog.innerHTML = `
      <div>
        <button><a href="zipFiles/window.zip" download="TronadoHard Para Windows.zip">descargar Instaladores para window</a></button>
        <button><a href="zipFiles/linux.zip" download="TronadoHard Para Linux.zip">descargar Instaladores para linux</a></button>
        <h2>links externos:</h2>
        <ul>
          <details>
            <summary>
             Mediafire
            </summary>
            <section>
              <button><a target="_blank" href="https://www.mediafire.com/file/517tjlbctznna8e/window.zip/file">windows</a></button>
              <button><a target="_blank" href="https://www.mediafire.com/file/mflyor0dvzi7310/linux.zip/file">linux</a></button>
            </section>
          </details>
          <details>
            <summary>
              Google Drive
            </summary>
            <section>
              <button><a target="_blank" href="https://drive.google.com/file/d/1eRIwnHzvQR9OB_ns2r9I2nXUD_1WTh1X/view?usp=sharing">windows</a></button>
              <button><a target="_blank" href="https://drive.google.com/file/d/17Jc6gFGVs173XtB6NwXb9JMzD3-NxmKE/view?usp=sharing">linux</a></button>
            </section>
          </details>
        </ul>
      </div>
      `;
      break;
    case '1':
      dialog.innerHTML = `
      <div>
      <p>hacele click a las imagenes si quieres verlos en pantalla completa</p>
      <p class="linux">si eres usuario de windows, ignora las letras azules o las imagenes con bordes azules. Son para usuarios de linux</p>
      <p>este tutorial se resume en:</p>
        <ol>
          <li>instalar forge con el instalador para forge</li>
          <li>instalar los mods con el instalador para los mods(leyendo lo que dice el instalador)</li>
          <li>elijiendo la version correcta de minecraft a la hora de entrar a tronadoHard(forge version "tronadoHard")</li>
        </ol>
      <p>y ya... Pero eso no seria util para mucha gente asi que este un tutorial detallado de la forma simple de instalar mods</p>
      ${anchorAndImgTag(src, '00', 'welcome image')}
      <p>despues de bajar el instalador tienes que extraerlos(probablemente el archivo zip tenga otro nombre)</p>
      ${anchorAndImgTag(src, '01', 'muestra de archivo')}
      <p>usualmente extraeria en windows haria click derecho y seleccionaria "extraer aqui" si tuviera winrar</p>
      ${anchorAndImgTag(src, '02', 'muestra de archivo')}
      <p class="linux">(para los que usan linux)... <br> si usas una distribucion de linux como pop os o linux mint, el proceso es igual como en mi caso pero es probable que 
        en linux necesites usar la linea de comando para extraer con el programa llamado "unzip". Una vez instales "unzip", deberias escribir "unzip" y el nombre del archivo(si estas adentro del directorio. si no estas adentro del directorio deberias incluir el directorio tambien) </p>
      ${anchorAndImgTag(src, '03', 'muestra de como instalar en linux', true)}
        <p>despues de extraer el archivo, deberias abrir la carpeta que dice "tronadoHard para windows"(o "tronadoHard para linux" si bajaste la version para linux)</p>
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
        <p>en mi caso, yo eleji la opcion 3 asi que precione el numero 3 y despues precione el enter(esa pc tenia 4 gb de ram pero un procesador decente)</p>
      ${anchorAndImgTag(src, '19', 'opciones para mods opcionales(mis preferencias)')}
        <p>lean lo siguiente(te dice que preciones enter y esperes 2 segundos y que no cierres la ventana porque la ventana se cerrara solo. Si haces eso, la instalacion estara completa!)</p>
      ${anchorAndImgTag(src, '21', 'y tronadoHard ya estaria instalado en tu computadora despues de hacer esto correctamente... ')}
        <p>despues de la instalacion, para ver la version de forge cuando estes en el launcher de Minecraft puedes ir a "instalacion" en el launcher preterminado de minecraft(a no ser que quieras elejir la version "47.1.43" que es lo mismo pero esto es para gente que no puede memorizar esos numeros antes de entrar. )</p>
      ${anchorAndImgTag(src, '22', 'fijandose en el launcher de Minecraft')}
        <p>ve a "Nueva instalacion"</p>
      ${anchorAndImgTag(src, '23', 'fijandose en el launcher de Minecraft(nueva instalacion)')}
        <p>despues eleji la version que dice "release TronadoHard"</p>
      ${anchorAndImgTag(src, '24', 'fijandose en el launcher de Minecraft(elejir la version correcta)')}
        <p>pueden poner lo que quieran como nombre. Yo pondre "TronadoHard serie" asi recordare que esta version es para tronadoHard</p>
      ${anchorAndImgTag(src, '25', 'fijandose en el launcher de Minecraft(poner el nombre que ustedes desean)')}
        <p>si aparece esto en la version la instalacion, entonces lo hiciste bien!</p>
      ${anchorAndImgTag(src, '26', 'nombre de la version')}
        <p>para jugar en TronadoHard simplemente tenemos que elejir esa version con el nombre que le pusiste y ya(y el nombre de la ip en multiplayer)</p>
      ${anchorAndImgTag(src, '27', 'fijandose en el launcher de Minecraft(poner el nombre que ustedes desean)')}
        <p>en un launcher como launcher fenix, en perfil deberias poner "forge"</p>
      ${anchorAndImgTag(src, '28', 'fijandose en el launcher de Minecraft(poner el nombre que ustedes desean)')}
        <p>si la version se llama "???"... No se preocupen, eso es porque algunos launcher no aceptan letras como nombre de versiones en algunos rincones de algunos launcher pero Minecraft deberia funcionar bien</p>
      ${anchorAndImgTag(src, '29', 'simbolo que puede preocupar a alguien pero no es grave')}
        <p>pero si vas "version" y ves el nombre de la version, dira que es "tronadoHard" asi que esta todo bien</p>
      ${anchorAndImgTag(src, '30', 'imagen para demostrar que todo esta bien')}
      </div>
      `;
      break;
    case '2':
      dialog.innerHTML = `
      <div>
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
      </div>
          `;
      break;
    case '3':
      dialog.innerHTML = `
      <div>
      <p>hacele click a las imagenes si quieres verlos en pantalla completa</p>
      <p class="linux">si eres usuario de windows, ignora las letras azules o las imagenes con bordes azules. Son para usuarios de linux</p>
      <p>este tutorial se resume en:</p>
        <ol>
          <li>instalar forge con el instalador para forge</li>
          <li>hacer un backup/copia de la carpeta y copiar mods nuevo a la carpeta de mods que esta adentro de la carpeta de Minecraft</li>
          <li>elijiendo la version correcta de minecraft a la hora de entrar a tronadoHard(forge version "47.1.43")</li>
        </ol>
      <p>y ya... Pero eso no seria util para mucha gente asi que este un tutorial detallado de la forma manual de instalar mods</p>
      ${anchorAndImgTag(src, '00', 'welcome image')}
      <p>despues de bajar el instalador tienes que extraerlos(probablemente el archivo zip tenga otro nombre)</p>
      ${anchorAndImgTag(src, '01', 'muestra de archivo')}
      <p>usualmente extraeria en windows haria click derecho y seleccionaria "extraer aqui" si tuviera winrar</p>
      ${anchorAndImgTag(src, '02', 'muestra de archivo')}
      <p class="linux">(para los que usan linux)... <br> si usas una distribucion de linux como pop os o linux mint, el proceso es igual como en mi caso pero es probable que 
        en linux necesites usar la linea de comando para extraer con el programa llamado "unzip". Una vez instales "unzip", deberias escribir "unzip" y el nombre del archivo(si estas adentro del directorio. si no estas adentro del directorio deberias incluir el directorio tambien) </p>
      ${anchorAndImgTag(src, '03', 'muestra de como instalar en linux', true)}
        <p>despues de extraer el archivo, deberias abrir la carpeta que dice "tronadoHard para windows"(o "tronadoHard para linux" si bajaste la version para linux)</p>
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
        <!-- improve this part -->

        <p>ve a "Nueva instalacion"</p>
      ${anchorAndImgTag(src, '23', 'fijandose en el launcher de Minecraft(nueva instalacion)')}
        <p>despues eleji la version que dice "release TronadoHard"</p>
      ${anchorAndImgTag(src, '24', 'fijandose en el launcher de Minecraft(elejir la version correcta)')}
        <p>pueden poner lo que quieran como nombre. Yo pondre "TronadoHard serie" asi recordare que esta version es para tronadoHard</p>
      ${anchorAndImgTag(src, '25', 'fijandose en el launcher de Minecraft(poner el nombre que ustedes desean)')}
        <p>si aparece esto en la version la instalacion, entonces lo hiciste bien!</p>
      ${anchorAndImgTag(src, '26', 'nombre de la version')}
        <p>para jugar en TronadoHard simplemente tenemos que elejir esa version con el nombre que le pusiste y ya(y el nombre de la ip en multiplayer)</p>
      ${anchorAndImgTag(src, '27', 'fijandose en el launcher de Minecraft(poner el nombre que ustedes desean)')}
        <p>en un launcher como launcher fenix, en perfil deberias poner "forge"</p>
      ${anchorAndImgTag(src, '28', 'fijandose en el launcher de Minecraft(poner el nombre que ustedes desean)')}
        <p>si la version se llama "???"... No se preocupen, eso es porque algunos launcher no aceptan letras como nombre de versiones en algunos rincones de algunos launcher pero Minecraft deberia funcionar bien</p>
      ${anchorAndImgTag(src, '29', 'simbolo que puede preocupar a alguien pero no es grave')}
        <p>pero si vas "version" y ves el nombre de la version, dira que es "tronadoHard" asi que esta todo bien</p>
      ${anchorAndImgTag(src, '30', 'imagen para demostrar que todo esta bien')}
      </div>`;
      break;
    case '4':
      dialog.innerHTML = `
      <div>
        <p>el primer paso es abrir Minecraft</p>
      </div>
          `;
      break;

  }
  dialog.showModal()
}


function anchorAndImgTag(src, number, message, linuxClass = false) {
  let elementClass = `class='' `;
  if (linuxClass) {
    elementClass = `class='linux' `

  }
  return `<a target="_blank"  href="${src}/${number}.png"> <img ${elementClass} src="${src}/${number}.png" tittle="${message}" alt="${message}"></a>`
}
