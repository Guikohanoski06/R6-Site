const loginBtn = document.querySelector(".login");
const leftArrow = document.querySelector(".arrow-left")
const rightArrow = document.querySelector(".arrow-right")
const defender = document.querySelector(".defender");
const attack = document.querySelector(".attack");



loginBtn.addEventListener("mouseenter", () => {
    loginBtn.style.opacity = ".7";
})
loginBtn.addEventListener("mouseleave", () => {
    loginBtn.style.opacity = "";
})

defender.addEventListener("click", () => {
    rightArrow.style.opacity = "1";
    leftArrow.style.opacity = "0";
    rightArrow.style.zIndex = "10";
    leftArrow.style.zIndex = "";
    rightArrow.style.right = "49.55vw";
    defender.style.transition = 'background-image .4s linear'; // Adiciona uma transição suave
    defender.style.backgroundImage = 'linear-gradient(to left, var(--verde-agua) 80%, rgba(0, 0, 0, 0.2))';
    attack.style.backgroundImage = 'var(--cinza)';
    attack.style.backgroundColor = 'var(--cinza)';
    defender.style.cursor = "default";
    attack.style.cursor = "pointer";
    defender.style.transform = `scale(1.1)`;
    attack.style.transform = ``;

});
attack.addEventListener("click", () => {
    rightArrow.style.opacity = "0";
    leftArrow.style.opacity = "1";
    leftArrow.style.right = " 49.625vw"
    rightArrow.style.zIndex = "0";
    leftArrow.style.zIndex = "10";
    attack.style.backgroundImage = 'linear-gradient(to right, var(--verde-agua) 80%, rgba(0, 0, 0, 0.2))';
    defender.style.backgroundImage = ''
    defender.style.cursor = 'pointer'
    attack.style.cursor = 'default'
    defender.style.transform = ``;
    attack.style.transform = `scale(1.1)`;

});
