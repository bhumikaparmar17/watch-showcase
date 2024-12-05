const tl = gsap.timeline();
tl.from(".circle", {
    scale: .7,
    ease: "elastic.out(1, 0.1)",
    stagger: {
        amount: 0.8
    }
});

const buttons = document.querySelectorAll(".panel h1");
let active = 2;

buttons.forEach((val, index) => {
    val.addEventListener("click", function () {
        gsap.to(".roter", {
            rotate: index * 90,
        });
        small();
        gsap.to(this, {
            scale: 1.8,
            ease: "elastic.out(1, 0.1)",
            stagger: {
                amount: 0.8
            }
        });
        gsap.to(".fill", {
            rotate: index * 180,
        });
        gsap.from(".content p", {
            opacity: 0,
            x: 100,
        });
        gsap.to(".price h6", {
            y: -index * 22,
        });
    });
});

function small() {
    gsap.to(buttons, {
        scale: 1,
    });
}



    function moveDetails() {
        const leftDiv = document.querySelector('.left');
        const rightDiv = document.querySelector('.right');
        const detailsDiv = document.querySelector('.details');

        if (window.innerWidth <= 750) {
            if (rightDiv.contains(detailsDiv)) {
                leftDiv.appendChild(detailsDiv);
                detailsDiv.style.display = 'flex';
            }
        } else {
            if (leftDiv.contains(detailsDiv)) {
                rightDiv.appendChild(detailsDiv);
                detailsDiv.style.display = 'flex';
            }
        }
    }

    window.addEventListener('resize', moveDetails);
    window.addEventListener('load', moveDetails);
