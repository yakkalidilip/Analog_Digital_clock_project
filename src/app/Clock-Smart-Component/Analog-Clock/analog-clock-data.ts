export const analogClockDeg = {
    hourRotationDegHH : 30,
    minuteRotationDegHH : 0.5,
    secondRotationDegHH : (0.5/60),
    minuteRotationDegMH : 6,
    secondRotationDegMH : 0.1,
    secondRotationDegSH : 6,
}

export enum analogClockEnum {
    deg = 'deg',
    translate3d = 'translate3d(-50%, 0, 0)',
    rotate = 'rotate',
    openBracket = '(',
    closedBracket = ')'
}