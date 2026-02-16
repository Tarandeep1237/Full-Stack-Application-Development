function setGridLayout() {
    const container = document.getElementById("layoutContainer");
    container.classList.remove("sidebar-layout");
    container.classList.add("grid-layout");
}

function setSidebarLayout() {
    const container = document.getElementById("layoutContainer");
    container.classList.remove("grid-layout");
    container.classList.add("sidebar-layout");
}
