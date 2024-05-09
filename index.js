const getPosterElement = () => {
    return document.querySelector(".vjs-poster")
}

const getPlayButtonElement = () => {
    return document.querySelector(".vjs-icon-placeholder")
}

window.addEventListener("load", () => {
    const intervalId = setInterval(() => {
        const posterElement = getPosterElement()
        if (posterElement !== null) {
            posterElement.addEventListener("click", () => {
                insertAutoplayToggleElement()
                setInterval(() => {
                    playVideoIfMutedAndPaused()
                }, 1000)
            })
            clearInterval(intervalId)
        }
        const playButtonElement = getPlayButtonElement()
        if (playButtonElement !== null) {
            playButtonElement.addEventListener("click", () => {
                insertAutoplayToggleElement()
                setInterval(() => {
                    playVideoIfMutedAndPaused()
                }, 1000)
            })
            clearInterval(intervalId)
        }
    }, 100)
})