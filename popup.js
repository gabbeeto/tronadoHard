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
<button><a href="gabbeeto.github.io/zipFiles/tronadoHard para linux.zip" download="tronadoHardWindow.zip">descargar Instaladores para window</a></button>
<button><a href="gabbeeto.github.io/zipFiles/tronadoHard para window.zip" download="tronadoHardWindow.zip">descargar Instaladores para linux</a></button>
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


