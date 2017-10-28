module.exports = () => {
    const footer = document.createElement('footer');
    footer.className('footer');
    footer.innerHTML = `<a href="/">Easycode 2017</a>`;
    return footer;
};