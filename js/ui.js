const btnToggleConfigTab = document.getElementById("toggle-config-tab");
const configTab = document.getElementById("config");

//function getStyle(): Achei esse código no https://stackoverflow.com/questions/16748813/mydiv-style-display-returns-blank-when-set-in-master-stylesheet
function getStyle(id, name) {
    const element = document.getElementById(id);
    return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

btnToggleConfigTab.addEventListener("click", () => {
    const display = getStyle("config", "display");
    const visible = display != "none";
    
    configTab.classList.toggle("hidden", visible);

    btnToggleConfigTab.classList.toggle("close-icon", !visible);
    btnToggleConfigTab.classList.toggle("open-icon", visible);
}, false);