let isToggleElementCreated = false

const createElement = (tagName, className) => {
    const element = document.createElement(tagName)
    element.classList.add(className)
    return element;
}

const createAutoplayToggleElement = () => {
    const element = createElement("label", "vjs-autoplay")
    const inputElement = createElement("input", "toggle-checkbox")
    inputElement.type = "checkbox"
    inputElement.addEventListener("click", () => {
        toggleAutoplay()
    })
    const toggleTrackElement = createElement("div", "toggle-track")
    const toggleThumbElement = createElement("div", "toggle-thumb")
    
    toggleTrackElement.appendChild(toggleThumbElement)
    element.appendChild(inputElement)
    element.appendChild(toggleTrackElement)

    isToggleElementCreated = true
    return element
}

const getControlBarElement = () => {
    return document.querySelector(".vjs-control-bar")
}

const getElapsedTimeElement = () => {
    return document.querySelector(".vjs-remaining-time")
}

const insertAutoplayToggleElement = () => {
    if (isToggleElementCreated) {
        return
    }
    const autoplayToggleElement = createAutoplayToggleElement()
    const elapsedTimeElement = getElapsedTimeElement()
    const controlBarElement = getControlBarElement()
    elapsedTimeElement.appendChild(autoplayToggleElement)
    controlBarElement.insertBefore(autoplayToggleElement, elapsedTimeElement)
}
