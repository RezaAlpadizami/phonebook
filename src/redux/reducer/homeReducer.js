const initialHomeReducer = {
    data : [],
    isLoading : false,
    error: null
}

const homeReducer = (state = initialHomeReducer, action) => {
    switch (action.type) {
        case 'GET_DATA_CONTACT':
            return {
                ...state,
                data: action.payload,
                isLoading: true
            }

    }
    return state
}

export default homeReducer