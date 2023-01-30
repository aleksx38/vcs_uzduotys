document.addEventListener("DOMContentLoaded", () => {
    
// SLIDER OF THE MAIN PAGE
    let slider = tns({
        container : ".my-slider",
        gutter: 20,
        "slideBy" :1,
        nav: false,
        controlsContainer: ".controller",
        hasControls: true,
        prevButton: ".previous",
        nextButton: ".next",
        autoplay: true,
        autoplayButtonOutput: false,
        "speed": 700,
        
        responsive: {
            1024: {
                items: 3
            },
            768: {
                items: 2
            },
            480: {
                items: 1
            }
        }


    });

 /*   

    const tnsCarousel = document.querySelectorAll('.slider-paslaugos');
    tnsCarousel.forEach(slider1 => {
        tnsSlider = tns({
        container: ".slider-paslaugos",
        gutter: 20,
        "slideBy" :1,
        nav: false,
        controlsContainer: ".controller",
        hasControls: true,
        prevButton: ".previous",
        nextButton: ".next",
        autoplay: true,
        autoplayButtonOutput: false,
        "speed": 700,
        
        responsive: {
            1024: {
                items: 3
            },
            768: {
                items: 2
            },
            480: {
                items: 1
            }
        }


    });


}) 

*/

// FANCYAPP integration into PROJEKTAI page

Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,
  
    Image: {
      zoom: false,
      click: false,
      wheel: "slide",
    },
  });


  function virsun() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


})

