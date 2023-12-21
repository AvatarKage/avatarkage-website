document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("snowfall");
    const ctx = canvas.getContext("2d");

    // Set the rendering size (visible size) of the canvas
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight * 3.45 + "px";

    // Set the actual size of the canvas
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio * 3.45;

    // Scale the rendering context to match the device pixel ratio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const flakes = [];

    function createSnowflake() {
        return {
        x: Math.random() * canvas.width,
        y: -5,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random(),
        };
    }

    function drawSnowflake(snowflake) {
        ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
        ctx.fill();
    }

    function updateSnowflakes() {
        for (let i = flakes.length - 1; i >= 0; i--) {
        const snowflake = flakes[i];

        snowflake.y += snowflake.speed;

        if (snowflake.y > canvas.height) {
            // Wrap the snowflake to the top if it reaches the bottom
            snowflake.y = -5;
            snowflake.x = Math.random() * canvas.width;
        }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        flakes.forEach((snowflake) => {
        drawSnowflake(snowflake);
        });
    }

    function animate() {
        updateSnowflakes();
        draw();
        requestAnimationFrame(animate);
    }

    for (let i = 0; i < 100; i++) {
        flakes.push(createSnowflake());
    }

    window.addEventListener("resize", () => {
        // Update the rendering size on window resize
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";

        // Update the actual size of the canvas and scale the context
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    });

    animate();

    // Create a new snowflake every second
    setInterval(() => {
        flakes.push(createSnowflake());
    }, 100);
});