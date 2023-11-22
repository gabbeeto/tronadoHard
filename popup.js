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
        ${anchorAndImgTag(srcForJavaInstalation, '057', 'como hacerlo en linux',true)}
        </details>`

function openDialog() {
  console.log(this)
  switch (this.dataset.id) {
    case "0":
      dialog.innerHTML = `
      <div>
        <button><a href="zipFiles/window.zip" download="tronadoHardWindow.zip">descargar Instaladores para window</a></button>
        <button><a href="zipFiles/linux.zip" download="tronadoHardWindow.zip">descargar Instaladores para linux</a></button>
        <h2>links externos:</h2>
        <ul>
          <details>
            <summary>
             Mediafire
            </summary>
            <section>
              <button><a target="_blank" href="https://www.mediafire.com/file/nclqqzvonlry3i2/tronadoHard_para_window.zip/file">windows</a></button>
              <button><a target="_blank" href="https://www.mediafire.com/file/mhyltsr9aoe2abo/tronadoHard_para_linux.zip/file">linux</a></button>
            </section>
          </details>
          <details>
            <summary>
              Google drive(con archivos individuales separados)
            </summary>
            <section>
              <button><a target="_blank" href="https://drive.google.com/drive/folders/1HKKs15ZVdVkc9Utph76uiq4Hgb1i59fS">windows</a></button>
              <button><a target="_blank" href="https://drive.google.com/drive/folders/19gm9GzQu8YsHhwifL3VQ_RNLrOjc_Pa8">linux</a></button>
            </section>
          </details>
        </ul>
      </div>
      `;
      break;
    case '1':
      let src = `./images/basicInstalation`
      dialog.innerHTML = `
      <div>
      <p>hacele click a las imagenes si quieres verlos en pantalla completa</p>
      <p class="linux">si eres usuario de windows, ignora las letras azules o las imagenes con bordes azules. Son para usuarios de linux</p>
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
      ${anchorAndImgTag(src, '06', 'ejecutando el instalador para forge con java',true)}
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
        <p>despues de que el backup se termine de crear, te aparecera esta ventana. Lo que tienes que hacer es elejir un numero, precionar ese numero y despues precionar el 'enter' pero lee con mucho cuidado(lee todo si es posible)</p>
      ${anchorAndImgTag(src, '16', 'opcioens para mods opcionales')}
        <p>las siguientes lineas rojas, son los mods que se van a incluir si vos elejir cierta opcion</p>
      ${anchorAndImgTag(src, '17', 'opcioens para mods opcionales(mods)')}
      </div>
      `;
      break;
    case '2':
      dialog.innerHTML = `
      <div>
        <ol>
          <li>extrae el archivo zip</li>
          <li>entra dentro de la carpeta 'tronadoHard Para Windows'</li>
          <li>entra dentro de la carpeta 'Bajador de gráficos 3000'</li>
          <li>ejecuta 'Bajador de grafico.exe'<br>(o tambien puedes ejecutar'Bajador de grafico en python.py' si tienes python instalado)</li>
          <!-- keep on giving instructions here -->
        </ol>
      </div>
          `;
      break;

  }
  dialog.showModal()
}


function anchorAndImgTag(src, number, message,linuxClass = false) {
let elementClass = `class='' `;
  if(linuxClass){
elementClass = `class='linux' `

  }
  return `<a target="_blank"  href="${src}/${number}.png"> <img ${elementClass} src="${src}/${number}.png" tittle="${message}" alt="${message}"></a>`
}
