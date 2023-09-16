const buttons = document.querySelectorAll("[data-carosel-button]");                 //grabs all buttons with data-carousel-button

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.caroselButton == "next" ? 1 : -1;             //checks if the value of the buttons is "next", if so then the offset is 1, otherwise -1
        const slides = button                                                       
            .closest("[data-carosel]")                                              //from the button, gets the closest parent with data-carosel
            .querySelector('[data-slides]')                                         //from there, it gets each element with data-slides (the ul, not the li's)
        
        const activeSlide = slides.querySelector("[data-active]")                   //get the slides with the data-active, this is the one that's currently visible
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;          //creates an array of the ul's children, and gets the one next to the currently active one    
        if(newIndex < 0) newIndex = slides.children.length - 1                      //if the index is too small, loop back to the top
        if(newIndex >= slides.children.length) newIndex = 0                         //if the index too big, loop back to the bottom

        slides.children[newIndex].dataset.active = true                             //makes the new slide active
        delete activeSlide.dataset.active                                           //makes the old slide inactive
    })
})