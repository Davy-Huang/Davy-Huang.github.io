const sideNavId = "#sideNav"
const navbarTogglerId = ".navbar-toggler"
const navbarLinkId = "#navbarResponsive .nav-link"

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector(sideNavId);
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: sideNavId,
            rootMargin: "0px 0px -40%",
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(navbarTogglerId);
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll(navbarLinkId)
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

});
