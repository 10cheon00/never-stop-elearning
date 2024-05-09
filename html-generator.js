const createElement = (tagName, className) => {
    const element = document.createElement(tagName)
    element.classList.add(className)
    return element;
}

const createAutoplayToggleElement = () => {
    const element = createElement("label", "vjs-autoplay")
    const insertElement = createElement("input", "toggle-checkbox")
    insertElement.type = "checkbox"
    insertElement.addEventListener("click", () => {
        toggleAutoplay()
    })
    const toggleTrackElement = createElement("div", "toggle-track")
    const toggleThumbElement = createElement("div", "toggle-thumb")
    
    toggleTrackElement.appendChild(toggleThumbElement)
    element.appendChild(insertElement)
    element.appendChild(toggleTrackElement)

    return element
}

const getControlBarElement = () => {
    return document.querySelector(".vjs-control-bar")
}

const getElapsedTimeElement = () => {
    return document.querySelector(".vjs-remaining-time")
}

const insertAutoplayToggleElement = () => {
    const autoplayToggleElement = createAutoplayToggleElement()
    const elapsedTimeElement = getElapsedTimeElement()
    const controlBarElement = getControlBarElement()
    elapsedTimeElement.appendChild(autoplayToggleElement)
    controlBarElement.insertBefore(autoplayToggleElement, elapsedTimeElement)
}