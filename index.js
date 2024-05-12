const getPosterElement = () => {
  return document.querySelector(".vjs-poster")
}

const getPlayButtonElement = () => {
  return document.querySelector(".vjs-icon-placeholder")
}

const addEventListenersToVideo = () => {
  const video = getVideo()
  video.addEventListener("ended", () => {
    isVideoEnded = true
  })
  video.addEventListener("play", () => {
    isVideoEnded = false
  })
}

const init = () => {
  insertAutoplayToggleElement()
  addEventListenersToVideo()
  setInterval(() => {
    playVideoIfPausedAndNotFinished()
  }, 1000)
}

window.addEventListener("load", () => {
  const intervalId = setInterval(() => {
    const posterElement = getPosterElement()
    if (posterElement !== null) {
      posterElement.addEventListener("click", init)
      clearInterval(intervalId)
    }
    const playButtonElement = getPlayButtonElement()
    if (playButtonElement !== null) {
      playButtonElement.addEventListener("click", init)
      clearInterval(intervalId)
    }
  }, 100)
})
