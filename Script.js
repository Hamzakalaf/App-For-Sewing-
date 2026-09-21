/* =====================================================
   LAMSET ALMOHANDES
   Main JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       01 - SMOOTH SCROLL
    ================================================= */

    const navLinks = document.querySelectorAll(
        '.bottom-nav a[href^="#"]'
    );

    navLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const targetId = link.getAttribute("href");

            const target = document.querySelector(targetId);

            if (!target) return;

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =================================================
       02 - ACTIVE BOTTOM NAVIGATION
    ================================================= */

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const bottomNavItems = document.querySelectorAll(
        ".bottom-nav .nav-item"
    );


    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + window.innerHeight * 0.35;


        sections.forEach(section => {

            const sectionTop = section.offsetTop;

            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                currentSection = section.id;
            }

        });


        bottomNavItems.forEach(item => {

            item.classList.remove("active");

            const href = item.getAttribute("href");

            if (href === `#${currentSection}`) {
                item.classList.add("active");
            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* =================================================
       03 - SCROLL REVEAL
    ================================================= */

    const revealElements = document.querySelectorAll(
        ".service-card, .gallery-item, .feature, .contact-button, .about-content"
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =================================================
       04 - HERO ANIMATION
    ================================================= */

    const heroContent =
        document.querySelector(".hero-content");

    const heroImage =
        document.querySelector(".hero-image");


    if (heroContent) {

        heroContent.style.opacity = "0";

        heroContent.style.transform =
            "translateY(25px)";

        setTimeout(() => {

            heroContent.style.transition =
                "opacity 0.9s ease, transform 0.9s ease";

            heroContent.style.opacity = "1";

            heroContent.style.transform =
                "translateY(0)";

        }, 150);

    }


    if (heroImage) {

        heroImage.style.opacity = "0";

        heroImage.style.transform =
            "translateX(-25px)";

        setTimeout(() => {

            heroImage.style.transition =
                "opacity 1s ease, transform 1s ease";

            heroImage.style.opacity = "1";

            heroImage.style.transform =
                "translateX(0)";

        }, 300);

    }


    /* =================================================
       05 - HEADER SHADOW
    ================================================= */

    const header =
        document.querySelector(".header");


    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 8px 30px rgba(0, 0, 0, 0.07)";

        } else {

            header.style.boxShadow = "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();


    /* =================================================
       06 - GALLERY HOVER EFFECT
    ================================================= */

    const galleryItems =
        document.querySelectorAll(".gallery-item");


    galleryItems.forEach(item => {

        item.addEventListener("mouseenter", () => {

            item.style.zIndex = "2";

        });


        item.addEventListener("mouseleave", () => {

            item.style.zIndex = "1";

        });

    });


    /* =================================================
       07 - CURRENT YEAR
    ================================================= */

    const footerYear =
        document.querySelector(".footer > span");

    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()} جميع الحقوق محفوظة`;

    }

});