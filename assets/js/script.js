document.addEventListener("DOMContentLoaded", function () {
    const btnNo = document.getElementById("btnNo");
    const btnSi = document.getElementById("btnSi");
    const dynamicMessage = document.getElementById("dynamicMessage");

    const lotsoLeft = document.getElementById("lotsoLeft");
    const lotsoRight = document.getElementById("lotsoRight");
    const lotsoBottom = document.getElementById("lotsoBottom");

    let noClickCount = 0;
    let btnSiSize = 1;
    let btnNoSize = 1;

    btnNo.addEventListener("click", function () {
        noClickCount++;

        if (noClickCount === 1) {
            dynamicMessage.textContent = "OYE QUE TIENES";
            lotsoLeft.style.display = "block";
            setTimeout(() => {
                lotsoLeft.classList.add("lotso-show");
            }, 100);
        } 
        else if (noClickCount === 2) {
            dynamicMessage.textContent = "CHAO";
            lotsoRight.style.display = "block";
            setTimeout(() => {
                lotsoRight.classList.add("lotso-show");
            }, 100);
        } 
        else if (noClickCount === 3) {
            dynamicMessage.textContent = "BASTA";
            lotsoBottom.style.display = "block";
            setTimeout(() => {
                lotsoBottom.classList.add("lotso-show-bottom");
            }, 100);
            btnNo.style.display = "none";
        }

        btnSiSize += 0.2;
        btnNoSize -= 0.1;

        btnSi.style.transform = `scale(${btnSiSize})`;
        btnNo.style.transform = `scale(${btnNoSize})`;
    });

    btnSi.addEventListener("click", function () {
        // Limpiar el contenido actual del body
        document.body.innerHTML = `
            <div class="love-container">
                <img src="assets/images/gatitoSI.gif" alt="Te Amo" class="love-gif">
                <h1 class="love-text">YA SABÍA MUY BIEN MI AMOR ❤️</h1>
                <audio autoplay loop>
                    <source src="assets/audio/DWS.mp3" type="audio/mpeg">
                    Tu navegador no soporta el audio.
                </audio>
            </div>
        `;

        // Aplicar estilos dinámicamente
        document.body.style.background = "linear-gradient(135deg, #bd71db, #b566d7)";
        document.body.style.display = "flex";
        document.body.style.flexDirection = "column";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
        document.body.style.height = "100vh";
        document.body.style.fontFamily = "'Poppins', sans-serif";
        document.body.style.color = "white";
        document.body.style.textAlign = "center";

        // Agregar estilos al gif
        const gif = document.querySelector(".love-gif");
        gif.style.width = "350px";
        gif.style.borderRadius = "20px";
        gif.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";

        // Agregar estilos al texto
        const text = document.querySelector(".love-text");
        text.style.fontSize = "3rem";
        text.style.textShadow = "3px 3px 5px rgba(0, 0, 0, 0.2)";
        text.style.marginTop = "20px";
    });
});




