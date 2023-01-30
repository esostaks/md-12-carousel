import Radio from "./Radio"

export default class Thumbnails extends Radio {

    thumbnails: NodeListOf<HTMLImageElement> | undefined
    thumbIndex: number

    constructor (selector: string) {
        super(selector)

        this.thumbnails = this.rootElement?.querySelectorAll('.js-thumb')
        this.thumbIndex = 0   

        this.initThumbnails()
    }

    initThumbnails() {
        for (let i = 0; i < this.thumbnails!.length; i++ ) {
           this.thumbnails![i].addEventListener('click', () => {
            this.thumbnails!.forEach((thumb) => {
                thumb.classList.remove('thumb-active')         
            });
            this.images!.forEach((image) => {
                image.classList.remove('active')         
            });
            this.radioButtons!.forEach((button) => {
                button.classList.remove('radio-active')         
            });
            this.thumbnails![i].classList.add('thumb-active')  
            this.radioButtons![i].classList.add('radio-active')
            this.images[i].classList.add('active')            
            this.thumbIndex = i
            })
        }
        
        
      }

    initNextButton() {
        this.nextBtn!.addEventListener('click', () => {
          this.images.forEach((image) => {
            image.classList.remove('active') 
          });
          this.radioButtons!.forEach((button) => {
            button.classList.remove('radio-active')         
          });
          this.thumbnails!.forEach((button) => {
            button.classList.remove('thumb-active')         
          });
    
          if (this.thumbIndex === this.images.length - 1) {
            this.thumbIndex = 0
          } else {
            this.thumbIndex += 1
          }

          this.thumbnails![this.thumbIndex].classList.add('thumb-active')
          this.images[this.thumbIndex].classList.add('active')
          this.radioButtons![this.thumbIndex].classList.add('radio-active')
        });
      }

    initRadioButton() {
        for (let i = 0; i < this.radioButtons!.length; i++ ) {
           this.radioButtons![i].addEventListener('click', () => {
            this.radioButtons!.forEach((button) => {
                button.classList.remove('radio-active')         
            });
            this.images!.forEach((image) => {
                image.classList.remove('active')         
            });
            this.thumbnails!.forEach((thumb) => {
                thumb.classList.remove('thumb-active')         
            });
            this.radioButtons![i].classList.add('radio-active')
            this.images[i].classList.add('active')    
            this.thumbnails![i].classList.add('thumb-active')
            this.thumbIndex = i
        })
            }
    }  
    
    initPrevButton() {
        this.prevBtn!.addEventListener('click', () => {
          this.images.forEach((image) => {
            image.classList.remove('active') 
          });

          this.radioButtons!.forEach((button) => {
            button.classList.remove('radio-active')         
          });

          this.thumbnails!.forEach((button) => {
            button.classList.remove('thumb-active')         
          });
    
          if (this.thumbIndex === 0) {
            this.thumbIndex = this.images.length - 1
          } else {
            this.thumbIndex -= 1
          }
          
          this.thumbnails![this.thumbIndex].classList.add('thumb-active')
          this.images[this.thumbIndex].classList.add('active')
          this.radioButtons![this.thumbIndex].classList.add('radio-active')
        });
      }

    

}
