window.addEventListener("scroll", function() {
    const headerBottomRow = document.querySelector(".header-bottom-row");
    const mainHeaderContainer = document.querySelector(".main-header-container");
    const mainLogo = document.querySelector("#main-logo");

    if (window.scrollY > 100) {
        headerBottomRow.classList.add("show-header-bottom-row");
        mainHeaderContainer.classList.add("shrink-header");
        mainLogo.classList.add("shrink-logo");
    }
    
    else {
        headerBottomRow.classList.remove("show-header-bottom-row");
        mainHeaderContainer.classList.remove("shrink-header");
        mainLogo.classList.remove("shrink-logo");
    }
});
