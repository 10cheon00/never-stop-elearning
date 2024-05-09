let autoplay = true

const toggleAutoplay = () => {
    autoplay = !autoplay
}

const isAutoplayEnabled = () => {
    return autoplay
}

const getVideo = () => {
    return document.querySelector("video")
}

const playVideo = (video) => {
    video.play()
}

const playVideoIfMutedAndPaused = () => {
    const video = getVideo()
    if (isAutoplayEnabled()) {
        playVideo(video)
    }
}
