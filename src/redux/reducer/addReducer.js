const initialStateAdd = {
    contactlist: []
}

const addContact = ( state = initialStateAdd, action) => {
    if (action.type === 'ADD_CONTACT') {
        return {
            ...state,
           contactlist: [...state.contactlist, action.createcontact] 
        }
    }
    return state
}

export default addContact