import './styles.css'
import pictures from './images'

const sliderContainer = document.querySelector('.slider-container')
const sliderFrame = document.querySelector('.slider-frame')

// Append first img.
const initialImg = document.createElement('img')
initialImg.src = Object.keys(pictures)
    .map((key, idx) => {
        if (idx === 0) {
            initialImg.id = key
        }

        return pictures[key]
    })
    .filter((url, idx) => {
        if (idx === 0) {
            return url
        }
    })

sliderFrame.append(initialImg)

let currentImg = initialImg.id

// Navigate between images
sliderContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let [pictureIdx] = Object.keys(pictures)
            .map((key, idx) => {
                if (key === currentImg) {
                    return idx
                }
            })
            .filter((index) => {
                return index !== undefined
            })

        if (e.target.textContent === 'Right') {
            if (pictureIdx === Object.keys(pictures).length - 1) {
                pictureIdx = 0
            } else {
                pictureIdx++
            }
        } else {
            if (pictureIdx === 0) {
                pictureIdx--
                pictureIdx = Object.keys(pictures).length - 1
            } else {
                pictureIdx--
            }
        }

        initialImg.src = Object.keys(pictures)
            .map((key, idx) => {
                if (idx === pictureIdx) {
                    currentImg = key
                    initialImg.id = key
                    return pictures[key]
                }
            })
            .filter((url) => {
                return url !== undefined
            })

        console.log(pictureIdx)
    }
})
