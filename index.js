const addEventListenersToVideo = () => {
  const video = getVideo()
  video.addEventListener("ended", () => {
    isVideoEnded = true
    insertAutoplayToggleElement()
  })
  video.addEventListener("play", () => {
    isVideoEnded = false
    insertAutoplayToggleElement()
  })
}

window.addEventListener("load", () => {
  addEventListenersToVideo()
  setInterval(() => {
    playVideoIfPausedAndNotFinished()
  }, 1000)
})
