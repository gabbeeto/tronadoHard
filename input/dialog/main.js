import React from 'react';
import "react-dom";
import { createRoot } from "react-dom/client"
import DownloadModAndInstallerContent, { txt } from "./DownloadModAndInstallerContent.js"
import LinksToMakeWindowLightweightContent from "./LinksToMakeWindowLightweightContent"
import DowngradeGraphicsManuallyContent from "./DowngradeGraphicsManuallyContent.js";
import HowToInstallModButtonContent from "./HowToInstallModButtonContent.js";
import HowToDowngradeGraphicsContent from "./HowToDowngradeGraphicsContent.js";
import ExtraInformationContent from "./ExtraInformationContent.js";

const contentFromDifferentFiles = {
  // number 5
  extraInformation: (<ExtraInformationContent />),
  // number 0
  downloadModAndInstaller: (< DownloadModAndInstallerContent />),
  //number 3
  linksToMakeWindowLightweight: (<LinksToMakeWindowLightweightContent />),
  // number 4
  downgradeGraphicsManually: (<DowngradeGraphicsManuallyContent />),
  // number 1
  howToInstallModButton: (<HowToInstallModButtonContent />),
  // number 2
  howToDowngradeGraphics: (<HowToDowngradeGraphicsContent />)
};

export function renderDialog(dialogProperty) {
  let dialogElement = document.querySelector("dialog");
  let dialog = createRoot(dialogElement);
  dialog.render(
    (<div id='dContainer'>
      <button onClick={() => {dialogElement.close()}}>{txt("salir", "leave")}</button>
      {contentFromDifferentFiles[dialogProperty]}
    </div>
    )
  );
}
