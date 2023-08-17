document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("triangle-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        calculateResults();
    });
});

function calculateResults() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!isNaN(base) && !isNaN(height)) {
        const area = 0.5 * base * height;
        const perimeter = base + 2 * Math.sqrt((0.25 * base * base) + (height * height));

        document.getElementById("area-result").textContent = area.toFixed(2);
        document.getElementById("perimeter-result").textContent = perimeter.toFixed(2);
    }
}
