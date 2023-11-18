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
      <button><a target="_blank" href="https://drive.google.com/drive/folders/1E-n2jL_nJvgqStBwHjI566ZdACbRjWvf?usp=sharing">windows</a></button>
      <button><a target="_blank" href="https://drive.google.com/drive/folders/1qG0kQ0MhZU6QP6TWlHwm6rQpsE_HFnta?usp=sharing">linux</a></button>
    </section>

  </details>
</ul>
</div>
        `;
      break;

  }
  dialog.showModal()
}


