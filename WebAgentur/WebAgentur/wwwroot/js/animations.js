(function () {
    const motionParam = new URLSearchParams(window.location.search).get("motion");
    const reduceMotion = motionParam === "off";
    const hasGsap = Boolean(window.gsap);
    const hasScrollTrigger = Boolean(window.ScrollTrigger);

    if (hasGsap && hasScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }

    let lenis = null;

    function initLenis() {
        if (reduceMotion || !window.Lenis || !hasGsap || !hasScrollTrigger) {
            return;
        }

        lenis = new Lenis({
            duration: 1.1,
            easing: function (t) {
                return Math.min(1, 1.001 - Math.pow(2, -10 * t));
            },
            smoothWheel: true
        });

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add(function (time) {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    }

    function scrollToTarget(target) {
        if (!target) {
            return;
        }

        if (lenis) {
            lenis.scrollTo(target, { offset: -72 });
            return;
        }

        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }

    function initNav() {
        const nav = document.getElementById("site-nav");
        const toggle = document.querySelector("[data-mobile-toggle]");
        const menu = document.querySelector("[data-mobile-menu]");

        if (nav) {
            const updateNav = function (scrollState) {
                const scrollTop = scrollState && typeof scrollState.scroll === "number"
                    ? scrollState.scroll
                    : window.scrollY;
                nav.classList.toggle("scrolled", scrollTop > 20);
            };

            updateNav();
            window.addEventListener("scroll", updateNav, { passive: true });

            if (lenis) {
                lenis.on("scroll", updateNav);
            }
        }

        if (toggle && menu) {
            const setOpen = function (open) {
                toggle.setAttribute("aria-expanded", String(open));
                menu.classList.toggle("is-open", open);
                document.body.classList.toggle("menu-open", open);

                if (hasGsap && !reduceMotion) {
                    gsap.fromTo(menu, { y: open ? -12 : 0, opacity: open ? 0 : 1 }, { y: open ? 0 : -12, opacity: open ? 1 : 0, duration: 0.26, ease: "power3.out" });
                }
            };

            toggle.addEventListener("click", function () {
                const open = toggle.getAttribute("aria-expanded") !== "true";
                setOpen(open);
            });

            menu.querySelectorAll("a").forEach(function (link) {
                link.addEventListener("click", function () {
                    setOpen(false);
                });
            });
        }

        document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(function (link) {
            link.addEventListener("click", function (event) {
                const href = link.getAttribute("href");
                const hash = href && href.includes("#") ? href.substring(href.indexOf("#")) : "";
                const target = hash ? document.querySelector(hash) : null;

                if (!target) {
                    return;
                }

                if (href.startsWith("/#") && window.location.pathname !== "/") {
                    return;
                }

                event.preventDefault();
                scrollToTarget(target);
            });
        });
    }

    function splitHeroWords(heroTitle) {
        if (!heroTitle) {
            return [];
        }

        if (window.SplitText) {
            const split = new SplitText(heroTitle, {
                type: "words",
                wordsClass: "split-word"
            });
            return split.words;
        }

        const words = [];
        heroTitle.querySelectorAll(".hero-line").forEach(function (line) {
            const parts = line.textContent.trim().split(/\s+/);
            line.textContent = "";

            parts.forEach(function (part, index) {
                const span = document.createElement("span");
                span.className = "split-word";
                span.textContent = part;
                line.appendChild(span);

                if (index < parts.length - 1) {
                    line.appendChild(document.createTextNode(" "));
                }

                words.push(span);
            });
        });

        return words;
    }

    function initHero() {
        const title = document.querySelector("[data-hero-title]");
        const words = splitHeroWords(title);
        const reveals = document.querySelectorAll(".hero-reveal");

        if (!hasGsap || reduceMotion) {
            return;
        }

        gsap.timeline({ defaults: { ease: "power3.out" } })
            .from(words, { y: 60, opacity: 0, duration: 0.9, stagger: 0.045 })
            .from(reveals, { y: 34, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.35");
    }

    function refreshHeroSplit() {
        const title = document.querySelector("[data-hero-title]");
        splitHeroWords(title);
    }

    function initScrollAnimations() {
        if (!hasGsap || !hasScrollTrigger || reduceMotion) {
            return;
        }

        gsap.utils.toArray("[data-section]").forEach(function (section) {
            gsap.from(section, {
                y: 42,
                opacity: 0,
                duration: 0.85,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 82%"
                }
            });
        });

        gsap.from("[data-service-card]", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#leistungen",
                start: "top 72%"
            }
        });

        gsap.from("[data-pricing-card]", {
            scale: 0.95,
            opacity: 0,
            duration: 0.78,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#preise",
                start: "top 72%"
            }
        });

        document.querySelectorAll("[data-timeline-path]").forEach(function (path) {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;

            gsap.to(path, {
                strokeDashoffset: 0,
                duration: 1.35,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: path.closest(".timeline"),
                    start: "top 70%",
                    end: "bottom 55%",
                    scrub: 0.8
                }
            });
        });
    }

    function initCounters() {
        const counters = document.querySelectorAll("[data-counter]");

        if (!counters.length || !hasGsap || !hasScrollTrigger || reduceMotion) {
            counters.forEach(function (counter) {
                counter.textContent = counter.dataset.count || "0";
            });
            return;
        }

        counters.forEach(function (counter) {
            const target = Number(counter.dataset.count || "0");
            const state = { value: 0 };

            gsap.to(state, {
                value: target,
                duration: 1.2,
                ease: "power3.out",
                onUpdate: function () {
                    counter.textContent = Math.round(state.value).toString();
                },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 82%",
                    once: true
                }
            });
        });
    }

    function initPortfolioHover() {
        document.querySelectorAll("[data-portfolio-card]").forEach(function (card) {
            const visual = card.querySelector(".portfolio-visual");

            if (!visual || !hasGsap || reduceMotion) {
                return;
            }

            card.addEventListener("mousemove", function (event) {
                const rect = card.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;

                gsap.to(visual, {
                    x: x * 12,
                    y: y * 12,
                    duration: 0.35,
                    ease: "power3.out"
                });
            });

            card.addEventListener("mouseleave", function () {
                gsap.to(visual, {
                    x: 0,
                    y: 0,
                    duration: 0.45,
                    ease: "power3.out"
                });
            });
        });
    }

    function initMarquee() {
        const track = document.querySelector("[data-marquee-track]");

        if (!track || !hasGsap || reduceMotion) {
            return;
        }

        track.innerHTML += track.innerHTML;
        gsap.to(track, {
            xPercent: -50,
            duration: 24,
            ease: "none",
            repeat: -1
        });
    }

    function initCheckmark() {
        const path = document.querySelector("[data-check-path]");
        const circle = document.querySelector(".checkmark circle");

        if (!path || !hasGsap || reduceMotion) {
            return;
        }

        [path, circle].forEach(function (shape) {
            const length = shape.getTotalLength();
            shape.style.strokeDasharray = length;
            shape.style.strokeDashoffset = length;
        });

        gsap.timeline({ defaults: { ease: "power3.out" } })
            .to(circle, { strokeDashoffset: 0, duration: 0.7 })
            .to(path, { strokeDashoffset: 0, duration: 0.55 }, "-=0.12")
            .from(".thanks-card .eyebrow, .thanks-card h1, .thanks-card p, .thanks-card .button", { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.2");
    }

    function safeRun(callback) {
        try {
            callback();
        } catch (error) {
            console.warn("Animation konnte nicht gestartet werden.", error);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        safeRun(initLenis);
        safeRun(initNav);
        safeRun(initHero);
        safeRun(initScrollAnimations);
        safeRun(initCounters);
        safeRun(initPortfolioHover);
        safeRun(initMarquee);
        safeRun(initCheckmark);

        window.addEventListener("wa:languagechange", function () {
            safeRun(refreshHeroSplit);
        });
    });
})();
