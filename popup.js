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
        <button><a href="" download="tronadoHardWindow.zip">descargar Instaladores para window</a></button>
        <button><a href="" download="tronadoHardWindow.zip">descargar Instaladores para linux</a></button>

        <h2>links externos:</h2>
        <ul>
          <details>
            <summary>
              Google Drive
            </summary>
            <section>
              <button><a target="_blank"
                  href="https://drive.google.com/drive/folders/1E-n2jL_nJvgqStBwHjI566ZdACbRjWvf?usp=sharing">windows</a></button>
              <button><a target="_blank"
                  href="https://drive.google.com/drive/folders/1qG0kQ0MhZU6QP6TWlHwm6rQpsE_HFnta?usp=sharing">linux</a></button>
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


