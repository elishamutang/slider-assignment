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

// Set currentImg as first img in pictures obj.
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
    }
})

// Make small slider buttons below slider frame.
const picturesLength = Object.keys(pictures).length
const smallSliderBtnContainer = document.querySelector('.small-slider-btns')

for (let i = 0; i < picturesLength; i++) {
    const sliderSmallBtn = document.createElement('button')
    sliderSmallBtn.dataset.idx = i
    sliderSmallBtn.className = 'slide-btn'

    smallSliderBtnContainer.append(sliderSmallBtn)
}

// Add functionality to small slider btns.
smallSliderBtnContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        initialImg.src = Object.keys(pictures)
            .map((key, idx) => {
                // Multiply 1 here to convert string to number.
                if (idx === e.target.dataset.idx * 1) {
                    const lastImg = currentImg

                    currentImg = key
                    initialImg.id = key

                    if (!Array.from(e.target.classList).includes('selected')) {
                        e.target.className += ' selected'
                    }

                    return pictures[key]
                }
            })
            .filter((url) => {
                return url !== undefined
            })

        let smallSliderBtns = Array.from(
            document.getElementsByClassName('slide-btn')
        )

        smallSliderBtns = smallSliderBtns
            .filter((btn) => {
                return btn !== e.target
            })
            .map((btn) => {
                btn.className = 'slide-btn'
            })
    }
})
