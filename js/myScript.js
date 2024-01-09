    // navigation routing
    document.addEventListener('DOMContentLoaded', function() {

        function toggleVisibility(event) {
            event.preventDefault();

            const viewportWidth = window.innerWidth
            if(viewportWidth>600){
                const allSections = document.querySelectorAll('.right-pane > div');
                allSections.forEach(section => {
                    section.classList.add('hiddenSection');
                });
                console.log("target 1",event.currentTarget.getAttribute('href'))

                const targetId = event.currentTarget.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                targetElement.classList.remove('hiddenSection');
            } else {
                console.log("target 2",event.currentTarget.getAttribute('href'))
                location.href = event.currentTarget.getAttribute('href');
            }
        }

        const links = document.querySelectorAll('.nav-button');
        links.forEach(link => {
            link.addEventListener('click', toggleVisibility);
        });
    });



    // pixel animation
    document.addEventListener('DOMContentLoaded', function () {
        var pixelCon = document.querySelector(".pixelCon");
        var numberOfPixels = 1000;
      
        for (var i = 0; i < numberOfPixels; i++) {
          var pixel = document.createElement("div");
          pixel.className = "pixel";
          pixel.style.animationDelay = (Math.ceil(Math.random() * 5000) -10000) + "ms";
          pixelCon.appendChild(pixel);
        }
      });

