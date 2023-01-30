import Images from "./Images"

export default class Radio extends Images {

    radioButtons: NodeListOf<HTMLDivElement> | undefined
    radioIndex: number

    constructor (selector: string) {
        super(selector)
    
        this.radioButtons = this.rootElement?.querySelectorAll('.js-radio-btn')
        this.radioIndex = 0

        this.initRadioButton()
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
            this.radioButtons![i].classList.add('radio-active')
            this.images[i].classList.add('active')    
            this.radioIndex = i
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
    
          if (this.radioIndex === this.images.length - 1) {
            this.radioIndex = 0
          } else {
            this.radioIndex += 1
          }
    
          this.images[this.radioIndex].classList.add('active')
          this.radioButtons![this.radioIndex].classList.add('radio-active')
        });
      }
    
      initPrevButton() {
        this.prevBtn!.addEventListener('click', () => {
          this.images.forEach((image) => {
            image.classList.remove('active') 
          });

          this.radioButtons!.forEach((button) => {
            button.classList.remove('radio-active')         
          });
    
          if (this.radioIndex === 0) {
            this.radioIndex = this.images.length - 1
          } else {
            this.radioIndex -= 1
          }
    
          this.images[this.radioIndex].classList.add('active')
          this.radioButtons![this.radioIndex].classList.add('radio-active')
        });
      }

}