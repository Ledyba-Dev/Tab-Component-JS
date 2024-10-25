
const dataTabFunction = (e) => {
    const buttons = document.querySelectorAll("button[data-tab]");
    const sections = document.querySelectorAll("section[data-tab]");

    buttons.forEach((button) => button.setAttribute("data-active", "false"));
    sections.forEach((section) => section.setAttribute("data-active", "false"));

    e.target.setAttribute("data-active", "true");
    const similarAtribute = e.target.getAttribute("data-tab");
    const sectionToActivated = document.querySelector(
        `section[data-tab=${similarAtribute}]`
    );
    sectionToActivated.setAttribute("data-active", "true");
};

document.addEventListener("click", (e) => {
    if (e.target.matches("button[data-tab]")) {
        dataTabFunction(e);
    }
});

document.addEventListener("DOMContentLoaded", () => {});