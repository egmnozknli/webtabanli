document.addEventListener("DOMContentLoaded", function () {
    const hayirButton = document.querySelector(".btn2");
    const hayirWrapper = document.querySelector(".hayir-wrapper");
    const evetButton = document.querySelector(".btn1");

    hayirButton.addEventListener("mouseenter", function () {
        const containerRect = hayirWrapper.getBoundingClientRect();
        const maxX = containerRect.width - hayirButton.offsetWidth - 10;
        const maxY = containerRect.height - hayirButton.offsetHeight - 10;
        let newX, newY;

        do {
            newX = Math.random() * maxX; 
            newY = Math.random() * maxY; 
        } while (isOverlapping(newX, newY, hayirButton, evetButton));

        hayirButton.style.position = "absolute";
        hayirButton.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
        hayirButton.style.top = `${Math.max(0, Math.min(newY, maxY))}px`;
    });

    function isOverlapping(x, y, movingButton, staticButton) {
        const buffer = 30;
        const movingRect = {
            left: x,
            right: x + movingButton.offsetWidth,
            top: y,
            bottom: y + movingButton.offsetHeight,
        };
        const staticRect = staticButton.getBoundingClientRect();

        return !(
            movingRect.right < staticRect.left - buffer ||
            movingRect.left > staticRect.right + buffer ||
            movingRect.bottom < staticRect.top - buffer ||
            movingRect.top > staticRect.bottom + buffer
        );
    }

    // Evet butonuna tıklanınca index2.html sayfasına yönlendirme
    evetButton.addEventListener("click", function () {
        window.location.href = "index2.html";
    });
});
