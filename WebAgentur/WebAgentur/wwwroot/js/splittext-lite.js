(function () {
    if (window.SplitText) {
        return;
    }

    window.SplitText = function SplitTextLite(target, options) {
        const element = typeof target === "string" ? document.querySelector(target) : target;
        const wordsClass = options && options.wordsClass ? options.wordsClass : "split-word";
        this.words = [];

        if (!element) {
            return;
        }

        const lines = element.querySelectorAll(".hero-line").length
            ? Array.from(element.querySelectorAll(".hero-line"))
            : [element];

        lines.forEach((line) => {
            const parts = line.textContent.trim().split(/\s+/);
            line.textContent = "";

            parts.forEach((part, index) => {
                const span = document.createElement("span");
                span.className = wordsClass;
                span.textContent = part;
                line.appendChild(span);
                this.words.push(span);

                if (index < parts.length - 1) {
                    line.appendChild(document.createTextNode(" "));
                }
            });
        });
    };
})();
