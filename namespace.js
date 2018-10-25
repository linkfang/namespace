var FANG0055 = {
    init: function init() {
        let square = document.createElement("div");
        square.className = "box";
        square.textContent = "fang0055";
        let squares = document.getElementById("boxes");
        squares.appendChild(square);

        square.addEventListener("click", squareClick);
        square.addEventListener("mouseover", mouseOver);
        square.addEventListener("mouseout", mouseOut);

        function squareClick() {
            this.style.borderColor = "hsl(175deg, 100%, 100%)";
            this.style.backgroundColor = "hsl(182deg, 100%, 100%)";
            this.textContent = "Ah HA! Vanished!"
        }

        function mouseOver() {
            this.classList.toggle("highlight");
        }

        function mouseOut() {
            this.classList.toggle("highlight");
            this.removeAttribute('style'); 
            this.textContent = "Link";
        }
    }
};