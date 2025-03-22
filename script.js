document.addEventListener("DOMContentLoaded", function () {
    const hayirButton = document.querySelector(".btn2");
    const evetButton = document.querySelector(".btn1");

    hayirButton.addEventListener("mouseenter", function () {
        const maxX = window.innerWidth - hayirButton.offsetWidth - 50;
        const maxY = window.innerHeight - hayirButton.offsetHeight - 50;
        let newX, newY;

        do {
            newX = Math.random() * maxX; 
            newY = Math.random() * maxY; 
        } while (isOverlapping(newX, newY, hayirButton, evetButton));

        hayirButton.style.position = "absolute";
        hayirButton.style.left = `${newX}px`;
        hayirButton.style.top = `${newY}px`;
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

    // Evet butonuna tıklanınca yeni sayfaya yönlendirme
    evetButton.addEventListener("click", function () {
        window.location.href = "index2.html";
    });
});
