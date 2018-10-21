const actions = {
    SET_COLOR_RED: 'SET_COLOR_RED',
    SET_COLOR_GREEN: 'SET_COLOR_GREEN',
    SET_COLOR_BLUE: 'SET_COLOR_BLUE',
    setColorRed: (value) => ({
        type: actions.SET_COLOR_RED,
        value: value,
    }),
    setColorGreen: (value) => ({
        type: actions.SET_COLOR_GREEN,
        value: value,
    }),
    setColorBlue: (value) => ({
        type: actions.SET_COLOR_BLUE,
        value: value,
    })
}

export default actions;