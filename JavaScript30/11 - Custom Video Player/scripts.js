const player = document.querySelector(".player");
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progress__filled = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')


function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();

    }
}

function updateButton() {
    const icon = this.paused ? '►' : '||'
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip)

}

function hundelRangeUpdate() {
    video[this.name] = this.value

}

function handleProgres() {

    const persentage = (video.currentTime / video.duration) * 100;
    progress__filled.style.flexBasis = `${persentage}%`

}

function scrub(e) {

    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime



}

toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgres)

skipButtons.forEach(function (el) {
    el.addEventListener('click', skip)
})

ranges.forEach(el => el.addEventListener('change', hundelRangeUpdate))
ranges.forEach(el => el.addEventListener('mousemove', hundelRangeUpdate))

progress.addEventListener('click', scrub)
let mouseDown = false;
progress.addEventListener('mousemove', (e) => {
    if (!mouseDown) return
    scrub(e)
})
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)