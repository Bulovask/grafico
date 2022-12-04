const btnToggleConfigTab = document.getElementById("toggle-config-tab");
const configTab = document.getElementById("config");
const mainGraph = document.getElementById("main-graph");

//function getStyle(): Achei esse código no https://stackoverflow.com/questions/16748813/mydiv-style-display-returns-blank-when-set-in-master-stylesheet
function getStyle(id, name) {
    const element = document.getElementById(id);
    return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

//Aba de configurações
btnToggleConfigTab.addEventListener("click", () => {
    const display = getStyle("config", "display");
    const visible = display != "none";
    
    configTab.classList.toggle("hidden", visible);

    btnToggleConfigTab.classList.toggle("close-icon", !visible);
    btnToggleConfigTab.classList.toggle("open-icon", visible);
}, false);

//Movimentação da câmera do canvas
const dataCam = {
    oldPageX: null,
    oldPageY: null
}
let camMove = false;
mainGraph.addEventListener("mousedown", (e) => {
    e.preventDefault();
    camMove = true;
}, false);

mainGraph.addEventListener("mouseup", (e) => {
    e.preventDefault();
    camMove = false;
    dataCam.oldPageX = null;
    dataCam.oldPageY = null;
}, false);

mainGraph.addEventListener("mousemove", (e) => {
    if(camMove) {
        if(dataCam.oldPageX  === null) {
            dataCam.oldPageX = e.pageX;
        }
        else {
            cam.x += e.pageX - dataCam.oldPageX;
            dataCam.oldPageX = e.pageX;
        }
        if(dataCam.oldPageY  === null) {
            dataCam.oldPageY = e.pageY;
        }
        else {
            cam.y += e.pageY - dataCam.oldPageY;
            dataCam.oldPageY = e.pageY;
        }
    }
}, false);

mainGraph.addEventListener("wheel", (e) => {
    cam.s += e.deltaY * -0.01;
    console.log(cam.s)
}, false);
