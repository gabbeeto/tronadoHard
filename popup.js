let dialog = document.querySelector('dialog');
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', openDialog)
}

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
      let src =`./images/basicInstalation`
      dialog.innerHTML = `
      <div>
      <p>hacele click a las imagenes si quieres verlos en pantalla completa</p>
      ${anchorAndImgTag(src,'00','welcome image')}
      <p>despues de bajar el instalador tienes que extraerlos(probablemente el archivo zip tenga otro nombre)</p>
      ${anchorAndImgTag(src,'01','muestra de archivo')}
      <p>usualmente extraeria en windows haria click derecho y seleccionaria "extraer aqui" si tuviera winrar</p>
      ${anchorAndImgTag(src,'02','muestra de archivo')}
      <p>(para los que usan linux)... <br> si usas una distribucion de linux como pop os o linux mint, el proceso es igual como en mi caso pero es probable que 
        en linux necesites usar la linea de comando para extraer con el programa llamado "unzip". Una vez instales "unzip", deberias escribir "unzip" y el nombre del archivo(si estas adentro del directorio. si no estas adentro del directorio deberias incluir el directorio tambien) </p>
      ${anchorAndImgTag(src,'03','muestra de como instalar en linux')}
      <p>(para los que usan linux)... <br> si usas una distribucion de linux como pop os o linux mint, el proceso es igual como en mi caso pero es probable que 
        en linux necesites usar la linea de comando para extraer con el programa llamado "unzip". Una vez instales "unzip", deberias escribir "unzip" y el nombre del archivo(si estas adentro del directorio. si no estas adentro del directorio deberias incluir el directorio tambien) </p>
        <p>despues de extraer el archivo, deberias abrir la carpeta que dice "tronadoHard para windows"(o "tronadoHard para linux" si bajaste la version para linux)</p>
      ${anchorAndImgTag(src,'04','abriendo la carpeta')}
        <p>despues deberian ejecutar el instalador para forge que se llama "instalador para forge.jar" con java(antes del instalador de mods)</p>
      ${anchorAndImgTag(src,'05','ejecutando el instalador para forge con java')}
        <details>
          <summary>haz click aqui si no tienes java instalado en tu pc</summary>
          <p>deberias ir a la <a tittle="link de la pagina oficial" href="https://www.java.com/en/">pagina oficial de java</a> para bajartelo en windows</p>
        ${anchorAndImgTag(src,'051','pagina oficial arriba en donde dice "pagina oficial de java"')}
        <p>despues deberias hacer click donde dice "Download Java" </p>
        ${anchorAndImgTag(src,'052','referencia al botom que tenes que hacer click')}
        <p>despues deberias abrir el archivo ejecutable que se te bajo que es relacionado a java</p>
        ${anchorAndImgTag(src,'053','instalar java')}
        <p>una vez que se abrio el ejecutable, deberias poner donde dice "instalar"</p>
        ${anchorAndImgTag(src,'054','referencia al boton que dice instalar')}
        </details>
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

function anchorAndImgTag(src,number,message){

  return`<a target="_blank" href="${src}/${number}.png"> <img src="${src}/${number}.png" tittle="${message}" alt="${message}"></a>`
}
