export default class Images {
  
    rootElement: HTMLDivElement | null;
    images: NodeListOf<HTMLImageElement>;
    prevBtn: HTMLButtonElement | null;
    nextBtn: HTMLButtonElement | null;
    activeIndex: number;
  
    
  
    constructor (selector: string) {
      this.rootElement = document.querySelector(selector);
      this.images = this.rootElement!.querySelectorAll(".js-image");
      this.prevBtn = this.rootElement!.querySelector(".js-prev-btn");
      this.nextBtn = this.rootElement!.querySelector(".js-next-btn");
      this.activeIndex = 0
  
      this.initNextButton();
      this.initPrevButton()
    
  
    }
  
    initNextButton() {
      this.nextBtn!.addEventListener('click', () => {
        this.images.forEach((image) => {
          image.classList.remove('active') 
        });
  
        if (this.activeIndex === this.images.length - 1) {
          this.activeIndex = 0
        } else {
          this.activeIndex += 1
        }
  
        this.images[this.activeIndex].classList.add('active')
      });
    }
  
    initPrevButton() {
      this.prevBtn!.addEventListener('click', () => {
        this.images.forEach((image) => {
          image.classList.remove('active') 
        });
  
        if (this.activeIndex === 0) {
          this.activeIndex = this.images.length - 1
        } else {
          this.activeIndex -= 1
        }
  
        this.images[this.activeIndex].classList.add('active')
      });
    }
  
  }
  