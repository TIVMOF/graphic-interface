var hasScrolledOnce = false;
window.addEventListener('scroll', function () {
    const lowerHeader = document.getElementById('lower_header');
    const wholeHeader = document.getElementById('main_header');
    const logoImage = document.getElementById('main-logo');
    const scrollPosition = window.scrollY || 0;

    if (scrollPosition > 100 && !hasScrolledOnce) {
        hasScrolledOnce = true;
        console.log("has scrolled once true");
    }

    if (hasScrolledOnce && scrollPosition == 0) {
        lowerHeader.style.display = "none";
        wholeHeader.style.display = "flex";
        logoImage.style.width = "204px";
        logoImage.style.padding = "16px 0px";
        console.log("lower none");
    } 

    if (scrollPosition > 80) {
        wholeHeader.style.position = "sticky";
        lowerHeader.style.display = "flex";
        wholeHeader.style.top = "0";
        logoImage.style.width = "90px";
        logoImage.style.padding = "8px 0px";
        console.log("sticky");
    }
});
