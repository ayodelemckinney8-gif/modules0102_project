const btn = document.querySelectorAll(".factClick");

btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.classList.toggle('active')
        const panel = e.target.nextElementSibling;

        const height = panel.style.maxHeight;
        if (!height) {
           panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
            panel.style.maxHeight = null;
        }
    })
})