window.onload = function() {
    const heroSection = document.querySelector(".hero");
    if (!heroSection) return;

    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = 1;
    heroSection.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let width, height;

    function resizeCanvas() {
        width = canvas.width = heroSection.offsetWidth;
        height = canvas.height = heroSection.offsetHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const rhombuses = Array.from({ length: 30 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 30 + 10,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() - 0.5) * 2
    }));

    function drawRhombuses() {
        ctx.clearRect(0, 0, width, height);
        rhombuses.forEach(rhombus => {
            const halfSize = rhombus.size / 2;

            ctx.beginPath();
            ctx.moveTo(rhombus.x, rhombus.y - halfSize);
            ctx.lineTo(rhombus.x + halfSize, rhombus.y);
            ctx.lineTo(rhombus.x, rhombus.y + halfSize);
            ctx.lineTo(rhombus.x - halfSize, rhombus.y);
            ctx.closePath();

            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.lineWidth = 1;
            ctx.stroke();

            rhombus.x += Math.cos(rhombus.angle) * rhombus.speed;
            rhombus.y += Math.sin(rhombus.angle) * rhombus.speed;

            if (rhombus.x < 0 || rhombus.x > width || rhombus.y < 0 || rhombus.y > height) {
                rhombus.x = Math.random() * width;
                rhombus.y = Math.random() * height;
                rhombus.angle = Math.random() * Math.PI * 2;
            }
        });
        requestAnimationFrame(drawRhombuses);
    }

    drawRhombuses();
}
document.addEventListener("DOMContentLoaded", function() {
    // Sidebar animation
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("sidebarToggleBtn");
    const closeBtn = document.getElementById("sidebarCloseBtn");
    const aboutUsSection = document.querySelector(".about-us");

    if (!sidebar || !toggleBtn || !closeBtn || !aboutUsSection) return;

    toggleBtn.addEventListener("click", function() {
        sidebar.style.transform = "translateX(0)";
        aboutUsSection.style.marginRight = "250px"; // Adjust margin to slide
    });

    closeBtn.addEventListener("click", function() {
        sidebar.style.transform = "translateX(100%)";
        aboutUsSection.style.marginRight = "0"; // Reset margin
    });

    sidebar.style.position = "fixed";
    sidebar.style.top = 0;
    sidebar.style.right = 0;
    sidebar.style.width = "250px";
    sidebar.style.height = "100%";
    sidebar.style.backgroundColor = "#080835";
    sidebar.style.color = "white";
    sidebar.style.overflowX = "hidden";
    sidebar.style.transition = "transform 0.3s ease";
    sidebar.style.transform = "translateX(100%)";

});   