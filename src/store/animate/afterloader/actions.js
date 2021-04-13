export const START_ANIMATE = 'APP/START_ANIMATE'
export const STOP_ANIMATE = 'APP/STOP_ANIMATE'

export const startAnimate = (isAnimate) => {
    return {
        type: START_ANIMATE,
        payload: isAnimate
    }
} 