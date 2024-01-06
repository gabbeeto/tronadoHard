import React from "react"
import "react-dom"
import { txt } from "./DownloadModAndInstallerContent"
import img1English from "./../images/basicGraphicDowngrader/e1.png"
import img1Spanish from "./../images/basicGraphicDowngrader/s1.png"
import img2English from "./../images/downgradeGraphicManually/e02.png"
import img2Spanish from "./../images/downgradeGraphicManually/s02.png"
import img3English from "./../images/downgradeGraphicManually/e03.png"
import img3Spanish from "./../images/downgradeGraphicManually/s03.png"
import img4English from "./../images/downgradeGraphicManually/e04.png"
import img4Spanish from "./../images/downgradeGraphicManually/s04.png"
import img5English from "./../images/downgradeGraphicManually/e05.png"
import img5Spanish from "./../images/downgradeGraphicManually/s05.png"
import img6English from "./../images/downgradeGraphicManually/e06.png"
import img6Spanish from "./../images/downgradeGraphicManually/s06.png"
import img7English from "./../images/downgradeGraphicManually/e07.png"
import img7Spanish from "./../images/downgradeGraphicManually/s07.png"
import img8English from "./../images/downgradeGraphicManually/e08.png"
import img8Spanish from "./../images/downgradeGraphicManually/s08.png"
import imgDetailSpanish from "./../images/downgradeGraphicManually/sDetail.png"
import imgDetailEnglish from "./../images/downgradeGraphicManually/eDetail.png"
import imgOtherSpanish from "./../images/downgradeGraphicManually/sOthers.png"
import imgOtherEnglish from "./../images/downgradeGraphicManually/eOthers.png"
import imgQualitySpanish from "./../images/downgradeGraphicManually/sQuality.png"
import imgQualityEnglish from "./../images/downgradeGraphicManually/eQuality.png"
import imgAnimationSpanish from "./../images/downgradeGraphicManually/sAnimations.png"
import imgAnimationEnglish from "./../images/downgradeGraphicManually/eAnimations.png"
import imgPerformanceSpanish from "./../images/downgradeGraphicManually/sPerformance.png"
import imgPerformanceEnglish from "./../images/downgradeGraphicManually/ePerformance.png"

function AnchorAndImgTag({hrefs, message, linuxClass = false}) {
  return (
    <a target="_blank" className={linuxClass ? "linux" : ''} href={hrefs}>
      <img  src={hrefs} tittle={message} alt={message}/>
    </a>
  )
}


export default function() {
  return (<>
    <div>
      <h2>
        {txt("esto es para personas que no les funciona el bajador de graficos o que simplemente quieren hacer lo mismo que hace el bajador de graficos sin tener que usar el bajador de graficos", "this is for people who want to downgrade the graphics but can't or for people who don't want to use the 'graphic downgrader'")}
      </h2>
      <p>{txt(`Lo primero que tienen que hacer es ir a "opciones"`, `the first thing you need to do is to go "options"`)}</p>

      <AnchorAndImgTag hrefs={txt(img1Spanish,img1English)}  message={txt('ir a options',"go to options")} />
      <p>{txt("despues tienen que ir a \"grafficos\"", "then you have to go to \"video settings\"")}</p>
      <AnchorAndImgTag hrefs={txt(img2Spanish,img2English)} message={txt('ir a graficos', "go to video settings")}/>
      <p>{txt("cambia estos valores y dejalos como los deje yo", "then you have to leave all the settings in the same way")}</p>
      <AnchorAndImgTag hrefs={txt(img3Spanish,img3English)} message={txt('cambiar valores en graficos','change values on video settings')}/>
      <p>{txt("luego ve a \"detalles\"","then you have to go \"details\"")}</p>
      <AnchorAndImgTag hrefs={txt(imgDetailSpanish,imgDetailEnglish)} Message={txt('ir a Detalles', "go to Detail")}/>
      <p>{txt("luego deja las siguientes configuraciones como yo las deje","then you have to leave all those settings in the same way")}</p>
      <AnchorAndImgTag hrefs={txt(img4Spanish,img4English)} message={txt('cambiar valores en Detalles', "change the value in details")}/>
      <p>{txt("despues vuelve atras y luego ve a \"animaciones\"","then come back and go to \"animations\"")}</p>
      <AnchorAndImgTag hrefs={txt(imgAnimationSpanish, imgAnimationEnglish)} message={txt('ir a Animaciones',"go to Animations")}/>
      <p>{txt("y luego cambia esas configuraciones y dejalas como yo las deje")}</p>
      <AnchorAndImgTag hrefs={txt(img5Spanish,img5English)} message={txt('cambiar valores en Animaciones','change all the values from Animations')}/>
      <p>{txt("despues vuelve atras y luego ve a \"Calidad\"","then come back and go to \"Quality\"")}</p>
      <AnchorAndImgTag hrefs={txt(imgQualitySpanish,imgQualityEnglish)} message={txt("ir a Calidad..",'go to Quality..')} />
      <p>{txt("luego deja las siguientes configuraciones como yo las deje","then you have to leave all those settings in the same way")}</p>
      <AnchorAndImgTag hrefs={txt(img6Spanish,img6English)} message={txt("cambiar valores en Calidad",'change all the values from Quality')} />
      <p>{txt("despues vuelve atras y luego ve a \"Rendimiento\"","then come back and go to \"Performance\"")}</p>
      <AnchorAndImgTag hrefs={txt(imgPerformanceSpanish,imgPerformanceEnglish)} message={txt("ir a Rendimiento..",'go to Performance..')} />
      <p>{txt("luego deja las siguientes configuraciones como yo las deje","then you have to leave all those settings in the same way")}</p>
      <AnchorAndImgTag hrefs={txt(img7Spanish,img7English)} message={txt("cambiar valores en Rendimiento",'change all the values from Performance')} />
      <p>{txt("despues vuelve atras y luego ve a \"Opciones varias\"","then come back and go to \"Others\"")}</p>
      <AnchorAndImgTag hrefs={txt(imgOtherSpanish,imgOtherEnglish)} message={txt("ir a Opciones varias..",'go to Others..')} />
      <p>{txt("luego deja las siguientes configuraciones como yo las deje","then you have to leave all those settings in the same way")}</p>
      <AnchorAndImgTag hrefs={txt(img8Spanish,img8English)} message={txt("cambiar valores en Opciones varias",'change all the values from Others')} />
    </div>
  </>)

}
