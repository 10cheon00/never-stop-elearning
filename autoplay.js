let autoplay = false
let isVideoEnded = false

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

const playVideoIfPausedAndNotFinished = () => {
    const video = getVideo()
    if (isAutoplayEnabled() && !isVideoEnded) {
        playVideo(video)
    }
}
