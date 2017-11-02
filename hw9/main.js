document.addEventListener("DOMContentLoaded", () => {
    const id = 'img';
    const element = document.getElementById(id).getBoundingClientRect();
    console.log(
        `    width = ${element.width}px
    height = ${element.height}px`
    );
});
