
export class SpoilerAlert{

    constructor(el){
        // Cache elementos del DOM
        this.el = document.querySelector(el);
        this.toggleButton = this.el.querySelector('.toggle-button');
        this.spoilerContent = this.el.querySelector('.spoiler-content');
        // Inicializar Listeners
        this.addEventListeners();
    }

    addEventListeners(){
        console.log("ouch!");
        this.toggleButton.addEventListener('click', () => { this.spoilerContent.classList.toggle('active') });
    }
}