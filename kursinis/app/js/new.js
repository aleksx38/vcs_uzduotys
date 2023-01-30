document.addEventListener("DOMContentLoaded", () => {

    
    // SLIDER'S / GALLERY OF THE 'paslaugos' page 
    
        const tnsCarousel = document.querySelectorAll('.slider-paslaugos');
        tnsCarousel.forEach( => {
            const tnsSlider = tns({
                container: '.slider-paslaugos',
                items: 3,
                "slideBy" :1,
                "speed": 400,
                "nav": false,
                autoplay: true,
                controls: false,
               responsive: { // depends on how many images will be shown depending on the pixels shown
                    1200: {
                        items: 4,
                        gutter: 20
                    },
                    1024: {
                        items: 3,
                        gutter: 20
                    },
                    768: {
                        items: 2,
                        gutter: 20
                    },
                    480: {
                        items: 1
                    }
                }
            })
    
    
        })
    
    
    
    
    })
    
    