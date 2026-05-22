const buttons = document.querySelectorAll(".more-btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const details = button.nextElementSibling;

        details.classList.toggle("open");

        if(details.classList.contains("open")){

            button.textContent = "Réduire";

        } else {

            button.textContent = "En savoir plus";

        }

    });

});