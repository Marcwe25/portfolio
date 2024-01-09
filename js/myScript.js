    // navigation routing
    document.addEventListener('DOMContentLoaded', function() {
        function toggleVisibility(event) {
            event.preventDefault();
            const allSections = document.querySelectorAll('.right-pane > div');
            allSections.forEach(section => {
                section.classList.add('hiddenSection');
            });

            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.classList.remove('hiddenSection');
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

