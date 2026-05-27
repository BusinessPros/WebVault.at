(function () {
    const form = document.querySelector("[data-multi-step-form]");

    if (!form) {
        return;
    }

    const steps = Array.from(form.querySelectorAll(".form-step"));
    const prevButton = form.querySelector("[data-prev-step]");
    const nextButton = form.querySelector("[data-next-step]");
    const submitButton = form.querySelector("[data-submit-button]");
    const progressBar = form.querySelector("[data-progress-bar]");
    const stepLabel = form.querySelector("[data-step-label]");
    const hasGsap = Boolean(window.gsap);
    const motionParam = new URLSearchParams(window.location.search).get("motion");
    const reduceMotion = motionParam === "off";
    let currentStep = 0;
    let isAnimating = false;

    function normalizePackage(value) {
        const normalized = (value || "").toLowerCase().trim();
        const map = {
            "abo": "abo",
            "pro": "abo",
            "abo-pro": "abo",
            "starter": "fixpreis",
            "fixpreis": "fixpreis",
            "fixpreis-website": "fixpreis",
            "business": "beratung",
            "custom": "beratung",
            "beratung": "beratung",
            "unsicher": "beratung"
        };

        return map[normalized] || "";
    }

    function applyPackageFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const packageValue = normalizePackage(params.get("paket"));

        if (!packageValue) {
            return;
        }

        const input = form.querySelector('input[name="Input.Paket"][value="' + packageValue + '"]');

        if (input) {
            input.checked = true;
        }
    }

    function updateSelectableCards(root) {
        const scope = root || form;

        scope.querySelectorAll(".select-card, .style-card").forEach(function (card) {
            const input = card.querySelector("input");
            card.classList.toggle("is-selected", Boolean(input && input.checked));
        });
    }

    function updateControls() {
        if (prevButton) {
            prevButton.style.display = currentStep === 0 ? "none" : "inline-flex";
        }

        if (nextButton) {
            nextButton.style.display = currentStep === steps.length - 1 ? "none" : "inline-flex";
        }

        if (submitButton) {
            submitButton.classList.toggle("is-visible", currentStep === steps.length - 1);
        }

        const progress = ((currentStep + 1) / steps.length) * 100;

        if (stepLabel) {
            const translator = window.WebAgenturI18n;
            stepLabel.textContent = translator
                ? translator.t("request.progress", { current: currentStep + 1, total: steps.length })
                : "Schritt " + (currentStep + 1) + " / " + steps.length;
        }

        if (progressBar) {
            if (hasGsap && !reduceMotion) {
                gsap.to(progressBar, { width: progress + "%", duration: 0.35, ease: "power3.out" });
            } else {
                progressBar.style.width = progress + "%";
            }
        }
    }

    function clearInvalidState(step) {
        step.querySelectorAll(".is-invalid").forEach(function (element) {
            element.classList.remove("is-invalid");
        });
    }

    function shake(element) {
        if (!element) {
            return;
        }

        if (hasGsap && !reduceMotion) {
            gsap.fromTo(element, { x: -8 }, { x: 0, duration: 0.42, ease: "elastic.out(1, 0.35)" });
            return;
        }

        element.animate([
            { transform: "translateX(-6px)" },
            { transform: "translateX(6px)" },
            { transform: "translateX(0)" }
        ], { duration: 240 });
    }

    function markInvalid(element) {
        element.classList.add("is-invalid");

        const label = element.closest("label");
        const field = element.closest(".field");
        const group = element.closest(".choice-grid, .style-grid, .radio-row, .radio-column, .checkbox-grid, .consent-list");
        const target = label || field || group || element;

        if (target) {
            target.classList.add("is-invalid");
            shake(target);
        }
    }

    function groupInputsByName(inputs) {
        return inputs.reduce(function (groups, input) {
            if (!groups[input.name]) {
                groups[input.name] = [];
            }

            groups[input.name].push(input);
            return groups;
        }, {});
    }

    function validateField(field) {
        if (field.disabled || field.type === "hidden") {
            return true;
        }

        if (field.type === "email" && field.value.trim() && !field.validity.valid) {
            markInvalid(field);
            return false;
        }

        if (field.type === "url" && field.value.trim() && !field.validity.valid) {
            markInvalid(field);
            return false;
        }

        if (field.required && !field.value.trim()) {
            markInvalid(field);
            return false;
        }

        return true;
    }

    function validateStep(step) {
        clearInvalidState(step);

        let valid = true;
        const requiredInputs = Array.from(step.querySelectorAll("input[required], select[required], textarea[required]"));
        const groupedRadioInputs = groupInputsByName(requiredInputs.filter(function (input) {
            return input.type === "radio";
        }));
        const groupedCheckboxInputs = groupInputsByName(requiredInputs.filter(function (input) {
            return input.type === "checkbox";
        }));

        Object.keys(groupedRadioInputs).forEach(function (name) {
            const group = groupedRadioInputs[name];
            const hasChecked = group.some(function (input) {
                return input.checked;
            });

            if (!hasChecked) {
                valid = false;
                group.forEach(markInvalid);
            }
        });

        Object.keys(groupedCheckboxInputs).forEach(function (name) {
            const group = groupedCheckboxInputs[name];
            const hasChecked = group.some(function (input) {
                return input.checked;
            });

            if (!hasChecked) {
                valid = false;
                group.forEach(markInvalid);
            }
        });

        requiredInputs.forEach(function (field) {
            if (field.type === "radio" || field.type === "checkbox") {
                return;
            }

            if (!validateField(field)) {
                valid = false;
            }
        });

        step.querySelectorAll("[data-min-checks]").forEach(function (group) {
            const min = Number(group.dataset.minChecks || "0");
            const checkedCount = group.querySelectorAll('input[type="checkbox"]:checked').length;

            if (checkedCount < min) {
                valid = false;
                group.classList.add("is-invalid");
                group.querySelectorAll("label").forEach(function (label) {
                    label.classList.add("is-invalid");
                });
                shake(group);
            }
        });

        const firstInvalid = step.querySelector(".is-invalid");

        if (firstInvalid) {
            firstInvalid.scrollIntoView({ block: "center", behavior: reduceMotion ? "auto" : "smooth" });
        }

        return valid;
    }

    function setStep(index) {
        if (index === currentStep || index < 0 || index >= steps.length || isAnimating) {
            return;
        }

        const outgoing = steps[currentStep];
        const incoming = steps[index];
        const direction = index > currentStep ? 1 : -1;
        currentStep = index;
        isAnimating = true;

        if (!hasGsap || reduceMotion) {
            outgoing.classList.remove("is-active");
            incoming.classList.add("is-active");
            updateControls();
            isAnimating = false;
            return;
        }

        gsap.to(outgoing, {
            x: direction * -42,
            opacity: 0,
            duration: 0.18,
            ease: "power3.out",
            onComplete: function () {
                outgoing.classList.remove("is-active");
                outgoing.style.transform = "";
                outgoing.style.opacity = "";

                incoming.classList.add("is-active");
                gsap.fromTo(incoming, {
                    x: direction * 42,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.34,
                    ease: "power3.out",
                    onComplete: function () {
                        incoming.style.transform = "";
                        incoming.style.opacity = "";
                        isAnimating = false;
                    }
                });

                updateControls();
            }
        });
    }

    function initChatbotFields() {
        const details = form.querySelector("[data-chatbot-details]");
        const choices = form.querySelectorAll('input[name="Input.ChatbotWunsch"]');

        if (!details || !choices.length) {
            return;
        }

        const update = function () {
            const selected = form.querySelector('input[name="Input.ChatbotWunsch"]:checked');
            const shouldShow = Boolean(selected && selected.value !== "Nein danke");

            if (hasGsap && !reduceMotion) {
                if (shouldShow) {
                    details.classList.add("is-visible");
                    gsap.fromTo(details, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.32, ease: "power3.out" });
                } else {
                    gsap.to(details, {
                        opacity: 0,
                        y: 8,
                        duration: 0.2,
                        ease: "power3.out",
                        onComplete: function () {
                            details.classList.remove("is-visible");
                            details.style.opacity = "";
                            details.style.transform = "";
                        }
                    });
                }
                return;
            }

            details.classList.toggle("is-visible", shouldShow);
        };

        choices.forEach(function (choice) {
            choice.addEventListener("change", update);
        });

        update();
    }

    function validateAllSteps() {
        for (let index = 0; index < steps.length; index += 1) {
            if (!validateStep(steps[index])) {
                setStep(index);
                return false;
            }
        }

        return true;
    }

    applyPackageFromUrl();
    updateSelectableCards();
    initChatbotFields();
    updateControls();

    window.addEventListener("wa:languagechange", updateControls);

    form.addEventListener("change", function (event) {
        if (event.target.matches("input[type='radio'], input[type='checkbox']")) {
            updateSelectableCards(form);
            event.target.closest(".is-invalid")?.classList.remove("is-invalid");
        }
    });

    form.addEventListener("input", function (event) {
        event.target.classList.remove("is-invalid");
        event.target.closest(".field")?.classList.remove("is-invalid");
    });

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            if (validateStep(steps[currentStep])) {
                setStep(currentStep + 1);
            }
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", function () {
            setStep(currentStep - 1);
        });
    }

    form.addEventListener("submit", function (event) {
        if (!validateAllSteps()) {
            event.preventDefault();
            return;
        }

        if (submitButton) {
            submitButton.classList.add("is-loading");
            submitButton.setAttribute("disabled", "disabled");
        }
    });
})();
