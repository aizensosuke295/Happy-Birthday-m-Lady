function startExperience() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.4;
    music.play();

    const intro = document.querySelector(".intro");
    const main = document.querySelector(".main-content");

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        main.style.display = "block";

        revealParagraphs();
    }, 1500);
}

function revealParagraphs() {

    const paras = document.querySelectorAll(".para");

    paras.forEach((para, index) => {

        setTimeout(() => {
            para.style.opacity = "1";
        }, index * 3000);

    });
    setTimeout(() => {
        document.getElementById("memoryBtn").style.display = "inline-block";
    }, paras.length * 3000);
}
function revealMemory() {

    const memory = document.getElementById("memoryMessage");

    memory.style.opacity = "1";
    memory.style.transform = "translateY(0)";
}
