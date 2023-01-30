
import Thumbnails from "./Thumbnails"

export default class Fullscreen extends Thumbnails {

    slideIndex: number
    slides: NodeListOf<HTMLImageElement> 
    elements: NodeListOf<HTMLDivElement> 
    btns: NodeListOf<HTMLButtonElement>
    imgs: NodeListOf<HTMLImageElement>


   
    constructor (selector: string) {
        super(selector)

        this.slideIndex = 0
        this.slides = this.rootElement!.querySelectorAll(".js-full-img")
        

        this.toggleFullScreen()
        this.initFullScreen()
        
    }



      toggleFullScreen() {
        const slideShow = document.querySelector('.js-fullscreen')
        const rfs = slideShow!.requestFullscreen
        rfs.call(slideShow);  

       

      }
      
      initFullScreen() {
        const fullscreenBtn = document.querySelector('.js-slide-btn');
        fullscreenBtn!.addEventListener('click', this.toggleFullScreen);
        
      }
      

        
    
      
      


    
}
