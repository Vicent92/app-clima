export const reducerWeather = (state = [], action) => {
    if (action.type === 'ADD_CITY') {
        return state.concat(action.data)
    }

    return state
}

export const newClima = (city) => {
    return ({
        type: 'ADD_CITY',
        data: city
    })
}